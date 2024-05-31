import React from "react";
import { useSelector } from "react-redux";
import TodoList from "todo_mf1/TodoList";
import AddTodo from "todo_mf2/AddTodo";

const Main = () => {
  const isOpen = useSelector(state => state.addEditTodo.isOpen);

  return (
    <div className="flex justify-center max-height-screen">
      <div className="w-1/2 shadow-md">
        <TodoList />
      </div>
      {isOpen ? (
      <div className="w-1/2 shadow-md">
        <AddTodo />
      </div>
      ):null}
    </div>
  );
};

export default Main;
