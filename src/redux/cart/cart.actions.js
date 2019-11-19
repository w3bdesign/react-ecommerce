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

const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export default toggleCartHidden;
