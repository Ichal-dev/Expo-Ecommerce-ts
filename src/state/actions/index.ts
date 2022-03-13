import { ActionTypes } from "../action-types";

interface AddToCartAction {
  type: ActionTypes.ADD_TO_CART;
  payload: [];
}

interface RemoveFromCartAction {
  type: ActionTypes.REMOVE_FROM_CART;
  payload: [];
}

interface AdjustItemQtyAction {
  type: ActionTypes.ADJUST_ITEM_QTY;
  payload: number;
}

interface LoadCurrentItemAction {
  type: ActionTypes.LOAD_CURRENT_ITEM;
  payload: [];
}

export type Action =
  | AddToCartAction
  | RemoveFromCartAction
  | AdjustItemQtyAction
  | LoadCurrentItemAction;
