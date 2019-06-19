import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import "../index.css";

// buttonを押した際にinput要素に入力された内容をTodoに追加出来るようにする
let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        Add
      </button>
      <hr />
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
