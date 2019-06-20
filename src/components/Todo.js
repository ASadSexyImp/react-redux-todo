import React from "react";
import PropTypes from "prop-types";
import "../index.css";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../actions";

const Todo = ({ onClick, completed, text, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p onClick={onClick} style={{ color: completed ? "red" : "white" }}>
        {text}
      </p>
      <button
        onClick={() => {
          console.log("削除:" + id);
          dispatch(deleteTodo(id));
        }}
      >
        x
      </button>
    </div>
  );
};

// // propで受け取ったデータを表示
// Todo.propTypes = {
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired
// };

export default Todo;
