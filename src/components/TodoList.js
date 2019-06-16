import React from "react";
import propTypes from "prop-types";
import Todo from "./Todo"; // Todo引き継ぎ

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );

  TodoList.propTypes = {
    todos: PropTypes.arrayOF(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  };
};

export default TodoList;
