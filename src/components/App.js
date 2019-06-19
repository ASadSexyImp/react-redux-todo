import React from "react";
import VisibleTodoList from "../containers/VisibleTodoList";
import AddTodo from "../containers/AddTodo";
import Footer from "./Footer";
import "../index.css";

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default App;
