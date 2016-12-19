import React from 'react';

import FilterButton from './filter_button'

const TodoList = ({todos, filter, toggleTodo = function(){}, deleteTodo = function(){}, toggleFilter = function(){} }) => {

  const _getClassName = done => (
    done ? "done" : ""
  );

  const _handleX = id => e => {
    e.stopPropagation();
    deleteTodo(id);
  };

  var filterTodos = {
    ALL: todos,
    COMPLETE: todos.filter( todo => todo.done === true ),
    INCOMPLETE: todos.filter( todo => todo.done === false )
  };

  const _generateList = () => (
    filterTodos[filter].map( todo => (
      <li key={todo.id}
          className={_getClassName(todo.done)}
          onClick={() => toggleTodo(todo.id)}>
          <span onClick={_handleX(todo.id)}>X</span>
          {todo.body}
      </li>
    ))
  );

  return (
    <ul id="todoList">
      <FilterButton filter={filter} toggleFilter={toggleFilter}></FilterButton>
      {_generateList()}
    </ul>
  );
}

export default TodoList;
