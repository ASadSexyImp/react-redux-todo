import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo"; // Todo引き継ぎ
import { useSelector } from "react-redux";

const TodoList = ({ todos, toggleTodo }) => {
  // const todos = useSelector();
  return (
    <div>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => {
            console.log(todo.id);
            toggleTodo(todo.id);
          }}
        />
        // <button
        // onClick={() => {
        //   // dispatch(deleteTodo(...todo));
        //   deleteTodo(todos);
        // }}
        // >
        //   x
        // </button>
      ))}
    </div>
  );

  // TodoList.propTypes = {
  //   todos: PropTypes.arrayOF(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       text: PropTypes.string.isRequired
  //     }).isRequired
  //   ).isRequired
  // };
};

export default TodoList;
