import {createContext, useEffect, useReducer, useRef} from 'react';
import {LOGIN, LOGOUT} from '../common/Types';
import * as React from 'react';
import {GetPersistedData, PersistData} from '../common/Utilities';
import {isEmpty} from 'lodash';

const UserContext = createContext();

const initialState = {
  user: {},
  loading: false,
};

const UserReducer = (state, action) => {
  console.tron.warn(action);
  const {data: {user = {}} = {}} = action;
  switch (action.type) {
    case LOGIN.TRIGGER: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN.SUCCESS: {
      return {
        ...state,
        loading: false,
        user,
      };
    }
    case LOGIN.FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case LOGOUT.TRIGGER: {
      return {
        ...state,
        user: {},
      };
    }
    default:
      return state;
  }
};

function UserProvider({children}) {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const mounted = useRef(false);
  const value = {state, dispatch};

  useEffect(() => {
    const {loading} = state;
    if (mounted.current) {
      !loading &&
        PersistData({key: 'user', value: state?.user})
          .then(() => console.log('User Persisted'))
          .catch(e => console.warn('Error Persisting User: ' + e));
    } else {
      GetPersistedData({key: 'user'}).then(user => {
        !isEmpty(user) && dispatch({type: LOGIN.SUCCESS, data: {user}});
      });

      mounted.current = true;
    }
  }, [state]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('Hook must be used within a Provider');
  }
  return context;
}

export {UserProvider, useUser};
