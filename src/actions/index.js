export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

let nextTodoId = 0; // todoカウント変数
export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++, // idを入れただカウント増やす
    text //text: text
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id //id: id
  };
};
export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id //id: id
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter // filter: filter
  };
};
