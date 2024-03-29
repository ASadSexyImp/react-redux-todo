import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { deleteTodo, toggleTodo, VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed); //todos.filter()は配列のメソッドのフィルタ
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed); //todos.filter()は配列のメソッドのフィルタ
  }
};

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter) };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
