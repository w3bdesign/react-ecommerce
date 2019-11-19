/*
Actions are payloads of information that send data from your application to your store (state). 
They are the only source of information for the store (state). 
You send them to the store (state) using store.dispatch().

Action creators are exactly that, functions that create actions. 
It's easy to conflate the terms “action” and “action creator”, so do your best to use the proper term.
In Redux, action creators simply return an action:

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

https://redux.js.org/basics/actions#actions

*/
import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
