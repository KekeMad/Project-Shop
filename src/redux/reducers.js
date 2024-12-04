const initialState = {
  cart: [],
  user: null, 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload, // Store user info
      };
    default:
      return state;
  }
};

export default reducer;

