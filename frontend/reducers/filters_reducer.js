const FiltersReducer = (state = "ALL", action) => {
  console.log(state);
  switch(action.type) {
    case "TOGGLE_FILTER":
      switch(state) {
        case "ALL":
          return "COMPLETE";
        case "COMPLETE":
          return "INCOMPLETE";
        case "INCOMPLETE":
          return "ALL";
        default:
          return state;
      };
    default:
      return state;
  }
};

export default FiltersReducer;
