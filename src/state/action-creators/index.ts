import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export const addToCart = (item: []) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      item,
    },
  };
};

export const removeFromCart = (itemId: []) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.REMOVE_FROM_CART,
      payload: itemId,
    });
  };
};

export const adjustItemQty = (itemId: number, qty: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.ADJUST_ITEM_QTY,
      payload: itemId,
      qty,
    });
  };
};

export const loadCurrentItem = (item: []) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.LOAD_CURRENT_ITEM,
      payload: item,
    });
  };
};
