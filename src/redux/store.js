// In Redux, all the application state is stored as a single object. There should only be a single store in your app.

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

// Import the logger which will log actions between the reducer and the components
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
