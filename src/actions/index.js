export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

let nextTodoId = 0; // todoカウント変数
export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++, // idを入れただカウント増やす
    text //text: textを省略
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
    //id: id
  };
};
