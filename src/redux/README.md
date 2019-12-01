## Redux

In this folder we have all of the files that are related to Redux.

## Root-reducer

This is the file that combines all of our states together.

The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

The resulting reducer calls every child reducer, and gathers their results into a single state object.

See https://redux.js.org/api/combinereducers

Reducers specify how the application's state changes in response to actions sent to the store.
Remember that actions only describe what happened, but don't describe how the application's state changes.
In Redux, all the application state is stored as a single object. It's a good idea to think of its shape before writing any code.
