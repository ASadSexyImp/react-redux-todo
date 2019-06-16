import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToPorops = state => {
  return { todos: state.todos };
};
// componentとstateを結びつける
const VisibleTodoList = connect(mapStateToPorops)(TodoList);

export default VisibleTodoList;
