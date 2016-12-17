const TodosReducer = (state = [], action) => {
  switch(action.type) {
    case "RECEIVE_TODO":
      return state.concat(action.todo);
    default:
      return state;
  }
};

export default TodosReducer;
