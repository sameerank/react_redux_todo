import { createStore, combineReducers, applyMiddleware } from 'redux';
import TodosReducer from '../reducers/todos_reducer.js';
import TodosMiddleware from '../middleware/todos_middleware.js'

const RootReducer = combineReducers({
  todos: TodosReducer
});

const MasterMiddleware = applyMiddleware(
  TodosMiddleware
);

const Store = createStore(RootReducer, MasterMiddleware);
export default Store;
