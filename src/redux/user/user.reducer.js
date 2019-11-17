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
