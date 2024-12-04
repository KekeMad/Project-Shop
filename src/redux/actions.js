// Define the setUser action
export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});
