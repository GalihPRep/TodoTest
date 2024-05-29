import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  let todos = useSelector((state) => state.app);
  return (
    <div classname="my-3">
      {todos.map((n) => (
        <TodoItem key={n.id} item={n} />
      ))}
    </div>
  );
};

export default TodoList;
