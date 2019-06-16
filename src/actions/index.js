export ADD_TODO = 'ADD_TODO';

let nextTodoId = 0; // todoカウント変数
export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++, // idを入れただカウント増やす
    text, //text: textを省略
  };
};