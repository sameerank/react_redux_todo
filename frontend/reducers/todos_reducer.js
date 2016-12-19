const TodosReducer = (state = [], action) => {
  switch(action.type) {
    case "RECEIVE_TODO":
      return state.concat(action.todo);
    case "TOGGLE_TODO":
      var idx = state.findIndex( todo => todo.id === action.id );
      const status = !state[idx].done;
      const newTodo = Object.assign({}, state[idx], {done: status});
      return [...state.slice(0, idx), newTodo, ...state.slice(idx + 1)];
    case "RECEIVE_ALL_TODOS":
      return action.todos;
    case "DELETE_TODO":
      var idx = state.findIndex( todo => todo.id === action.id );
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case "TOGGLE_FILTER":
      switch (action.filter) {
        case "COMPLETE":
          return state.filter( todo => todo.done === true );
        default:
          return state;
        }
    default:
      return state;
  }
};

export default TodosReducer;
