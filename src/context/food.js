import {createContext, useEffect, useReducer, useRef} from 'react';
import {GET_FEATURED_FOOD} from '../common/Types';
import * as React from 'react';
import {GetPersistedData, PersistData} from '../common/Utilities';
import {isEmpty} from 'lodash';

const FoodContext = createContext();

const initialState = {
  featuredFood: [],
  loading: false,
};

const FoodReducer = (state, action) => {
  console.tron.warn(action);
  const {data: {featuredFood = []} = {}} = action;
  switch (action.type) {
    case GET_FEATURED_FOOD.TRIGGER: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_FEATURED_FOOD.SUCCESS: {
      return {
        ...state,
        loading: false,
        featuredFood,
      };
    }
    case GET_FEATURED_FOOD.FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

function FoodProvider({children}) {
  const [state, dispatch] = useReducer(FoodReducer, initialState);
  const mounted = useRef(false);
  const value = {state, dispatch};

  useEffect(() => {
    const {loading} = state;
    if (mounted.current) {
      !loading &&
        PersistData({key: 'food', value: state?.featuredFood})
          .then(() => console.log('Food Persisted'))
          .catch(e => console.warn('Error Persisting Food: ' + e));
    } else {
      GetPersistedData({key: 'food'}).then(food => {
        !isEmpty(food) &&
          dispatch({
            type: GET_FEATURED_FOOD.SUCCESS,
            data: {featuredFood: food},
          });
      });

      mounted.current = true;
    }
  }, [state]);

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
}

function useFood() {
  const context = React.useContext(FoodContext);
  if (context === undefined) {
    throw new Error('Hook must be used within a Provider');
  }
  return context;
}

export {FoodProvider, useFood};
