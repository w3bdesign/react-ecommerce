/* 
   Argument 1 = existing cart items
   Argument 2 = cart item we want to add
   See inside cart item to see if it already exists by checking cartItem.id === cartItemToAdd.id
*/

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  /*
  Map

  A function that accepts up to three arguments. 
  The map method calls the callbackfn function one time for each element in the array.
  Calls a defined callback function on each element of an array, and returns an array that contains the results.
*/

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      /*
        If cartItem ids match, return original cartItem array and quantity + 1 (also needed for component update)
      */
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
          }
        : // If not, just return cartItem
          cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
