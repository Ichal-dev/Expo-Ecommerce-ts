import { combineReducers } from "redux";
import shoppingReducers from "./shopping-reducer";

const reducers = combineReducers({
  shop: shoppingReducers,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
