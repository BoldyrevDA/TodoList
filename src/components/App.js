import React from "react";
import TodoList from "./TodoList";
import initialItems from "../initialData";
import "./style.css";

function App() {
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <TodoList items={initialItems.slice()} />
    </div>
  );
}

export default App;
