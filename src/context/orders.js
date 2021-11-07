import {createContext, useEffect, useReducer, useRef} from 'react';
import {GET_FEATURED_FOOD, PLACE_ORDER} from '../common/Types';
import * as React from 'react';
import {GetPersistedData, PersistData} from '../common/Utilities';
import {isEmpty} from 'lodash';

const OrdersContext = createContext();

const initialState = {
  loading: false,
};

const OrdersReducer = (state, action) => {
  console.tron.warn(action);
  switch (action.type) {
    case PLACE_ORDER.TRIGGER: {
      return {
        ...state,
        loading: true,
      };
    }
    case PLACE_ORDER.SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case PLACE_ORDER.FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

function OrdersProvider({children}) {
  const [state, dispatch] = useReducer(OrdersReducer, initialState);
  const value = {state, dispatch};

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
}

function useOrders() {
  const context = React.useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('Hook must be used within a Provider');
  }
  return context;
}

export {OrdersProvider, useOrders};
