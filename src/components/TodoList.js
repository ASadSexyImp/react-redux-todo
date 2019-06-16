import React from "react";
import propTypes from "prop-types";
import Todo from "./Todo"; // Todo引き継ぎ

const TodoList = ({ todos }) => {
  return (
    <ul>
      {/* 受け取ったtodo Componentを渡す */}
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );

  TodoList.propTypes = {
    todos: propTypes.arrayOF(
      propTypes.shape({
        id: propTypes.number.isRequired,
        text: propTypes.string.isRequired
      }).isRequired
    ).isRequired
  };
};

export default TodoList;
