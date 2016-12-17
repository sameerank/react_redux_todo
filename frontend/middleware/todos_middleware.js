import { addTodo } from '../util/local_storage_manager.js';

const TodosMiddleware = store => next => action => {
  switch (action.type) {
    case "RECEIVE_TODO":
      addTodo(action.todo);
      next(action);
      break;
    default:
      next(action);
  }
}

export default TodosMiddleware;
