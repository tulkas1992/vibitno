import { combineReducers } from "redux";

import sessionReducer from "../app/session/session.reducer";
import productsReducer from "../settings/products/Table/products.reducer";

export default combineReducers({
  auth: sessionReducer,
  products: productsReducer
});
