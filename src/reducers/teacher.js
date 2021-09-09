const teacherReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_TEACHERS":
        return action.payload;
  
      case "ADD_PROJECT":
        return [...state, action.payload];
  
      case "DELETE_PROJECT":
        return state.filter((teacher) => teacher._id !== action.payload);
  
      case "UPDATE_PROJECT":
        return state.map((teacher) =>
        teacher._id === action.payload._id ? action.payload : teacher
        );
      default:
        return state;
    }
  };
  
  export default teacherReducer;
  