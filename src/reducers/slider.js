const sliderReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_SLIDERS":
        return action.payload;
  
      case "ADD_PROJECT":
        return [...state, action.payload];
  
      case "DELETE_PROJECT":
        return state.filter((homeslider) => homeslider._id !== action.payload);
  
      case "UPDATE_PROJECT":
        return state.map((homeslider) =>
          homeslider._id === action.payload._id ? action.payload : homeslider
        );
      default:
        return state;
    }
  };
  
  export default sliderReducer;
  