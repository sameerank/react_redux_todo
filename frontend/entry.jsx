import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/store.js';
import TodoListContainer from './components/todo_list_container';
import { receiveTodo } from './actions/todo_actions.js'

window.Store = Store;
window.receiveTodo = receiveTodo;

const Root = () => (
  <Provider store={Store}>
    <TodoListContainer />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
