import { connect } from 'react-redux';
import TodoList from './todo_list';
import { toggleTodo, deleteTodo, toggleFilter } from '../actions/todo_actions';

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  toggleFilter: () => dispatch(toggleFilter())
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
