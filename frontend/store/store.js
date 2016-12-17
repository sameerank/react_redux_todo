import { createStore, combineReducers } from 'redux';
import TodosReducer from '../reducers/todos_reducer';

const RootReducer = combineReducers({
  todos: TodosReducer
});

const Store = createStore(RootReducer);
export default Store;
