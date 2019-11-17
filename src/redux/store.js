/*
Creates a Redux store that holds the complete state tree of your app.
There should only be a single store in your app.
Apply the logger middleware with applyMiddleware(...middlewares)
See https://redux.js.org/api/createstore
*/

import { createStore, applyMiddleware } from "redux";

// Import the logger which will log actions between the reducer and the components
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
