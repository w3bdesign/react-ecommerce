/*
In Redux, all the application state is stored as a single object. There should only be a single store in your app.
*/

import { createStore, applyMiddleware } from "redux";

// Import the logger which will log actions between the reducer and the components
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

/* 
Creates a Redux store that holds the complete state tree of your app.
Apply the logger middleware with applyMiddleware(...middlewares) with [logger] passed
as an array to be able to easily add additional middleware later.

See https://redux.js.org/api/createstore 
*/
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
