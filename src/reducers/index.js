import { combineReducers } from "redux"; // reduxを使う
import todos from "./Todo";
import visibilityFilter from "./visibilityFilter";

const todoApp = combineReducers({ todos, visibilityFilter }); // reducersをまとめる

export default todoApp;
