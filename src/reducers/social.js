const socialReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_SOCIAL":
        return action.payload;
  
      case "ADD_SOCIAL":
        return [...state, action.payload];
  
      case "DELETE_SOCIAL":
        return state.filter((ski) => ski._id !== action.payload);
  
      case "UPDATE_SOCIAL":
        return state.map((ski) =>
          ski._id === action.payload._id ? action.payload : ski
        );
      default:
        return state;
    }
  };
  
  export default socialReducer;
  