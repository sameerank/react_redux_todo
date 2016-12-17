import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/store.js';
import TodoListContainer from './components/todo_list_container';
import NewTodoFormContainer from './components/new_todo_form_container';
import { receiveTodo, toggleTodo } from './actions/todo_actions.js'

window.Store = Store;
window.receiveTodo = receiveTodo;
window.toggleTodo = toggleTodo;

const Root = () => (
  <Provider store={Store}>
    <div>
      <TodoListContainer />
      <NewTodoFormContainer />
    </div>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
