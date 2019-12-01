import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import UserReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";

// We need to configure Redux persist before we can use it
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer
});

export default persistReducer(persistConfig, rootReducer);
