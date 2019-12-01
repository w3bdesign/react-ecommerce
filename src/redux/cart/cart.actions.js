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

// Tell Redux that we are trying to remove an item to our cart
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});
