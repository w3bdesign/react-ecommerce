/*
Reducers specify how the application's state changes in response to actions sent to the store. 
Remember that actions only describe what happened, but don't describe how the application's state changes.

In Redux, all the application state is stored as a single object. It's a good idea to think of its shape before writing any code.
*/

// Set a default initial state
const INITIAL_STATE = {
  currentUser: null
};

// Define our userReducer and set a default value of state
// Check the action and return the existing state and add the action payload
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};

export default userReducer;
