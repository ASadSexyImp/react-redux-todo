import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text }) => {
  return <li>{text}</li>;
};

// propで受け取ったデータを表示
Todo.propTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
