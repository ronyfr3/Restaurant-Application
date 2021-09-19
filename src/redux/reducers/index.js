import { combineReducers } from "redux";
import { ProductReducer } from "./product";
import { cartReducer } from "./cart";
import authreducer from "./Auth";
import { bookReducer } from "./product";

export const reducers = combineReducers({
  products: ProductReducer,
  cart: cartReducer,
  user: authreducer,
  booktable: bookReducer,
});
