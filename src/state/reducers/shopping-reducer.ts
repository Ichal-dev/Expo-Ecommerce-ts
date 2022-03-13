import { ActionTypes } from "../action-types";
import { Action } from "../actions";

const INITIALSTATE = {
  cart: [],
  currentItem: null,
};

const reducer = (state = INITIALSTATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ActionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: +action.payload.qty,
              }
            : item
        ),
      };
    case ActionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
