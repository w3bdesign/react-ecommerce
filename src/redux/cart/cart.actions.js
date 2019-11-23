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

import CartActionTypes from "./cart.types";

// Note that we are not using payload here as we dont need it
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// Tell Redux that we are trying to add a new item to our cart
// We need to have a payload here as we are adding the data to our cart
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
