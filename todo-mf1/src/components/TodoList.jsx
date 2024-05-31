import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.scss";
import { setOpen,toggleTodoStatus } from "host/addEditTodoSlice";

const TodoListMicrofrontend = () => {
  const todos = useSelector((state) => state.addEditTodo.todos);
  const isOpen = useSelector((state) => state.addEditTodo.isOpen);
  const dispatch = useDispatch();

  const openAddTodo = () => {
    dispatch(setOpen(true));
  };
  const completedTasksCount = todos.filter(todo => todo.completed).length;
  const allTasks = todos.length ;

  return (
    <div className=" mx-auto px-4 py-10 my-10 max-h-[75vh] overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4 text-center text-violet-800">Todo List</h1>
      <div className="flex justify-center bg-violet-600 text-white rounded-full w-16 mx-auto">
      <h1 className="text-xl font-bold p-4 ">{completedTasksCount}/{allTasks}</h1>
      </div>
      <h1 className="text-l font-bold mb-4 text-center">completed</h1>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white rounded-lg shadow-md p-4"
          >
           
              <div className=" ">
              <h2 className="text-lg font-semibold">{todo.title}</h2>
              <p className="text-sm text-gray-600">{todo.description}</p>
              </div>
              <div className="flex flex-col  items-center justify-end">
              <button
                className={`w-10 h-6 rounded-full ${
                  todo.completed ? "bg-green-500" : "bg-red-600"
                } focus:outline-none`}
                onClick={()=>dispatch(toggleTodoStatus({ id: todo.id }))}
              />
              <span>Status</span>
              </div>

          </li>
        ))}
      </ul>
      {!isOpen ? (
        <div className="mt-8 flex justify-center">
          <button
            className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded "
            onClick={openAddTodo}
          >
            Add New Task
          </button>
        </div>
      ) : null}
      <div></div>
    </div>
  );
};

export default TodoListMicrofrontend;
