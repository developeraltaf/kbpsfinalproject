const aboutReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_ABOUTS":
        return action.payload;
  
      case "ADD_PROJECT":
        return [...state, action.payload];
  
      case "DELETE_PROJECT":
        return state.filter((about) => about._id !== action.payload);
  
      case "UPDATE_PROJECT":
        return state.map((about) =>
        about._id === action.payload._id ? action.payload : about
        );
      default:
        return state;
    }
  };
  
  export default aboutReducer;
  