import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../index.scss";
import { setOpen } from "host/addEditTodoSlice";



const TodoListMicrofrontend = () => {
  const todos = useSelector((state) => state.addEditTodo.todos);
  const dispatch = useDispatch();

  const openAddTodo = () => {
    dispatch(setOpen(true));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
            <div>
              <h2 className="text-lg font-semibold">{todo.title}</h2>
              <p className="text-sm text-gray-600">{todo.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center" >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={openAddTodo}>
          Add New Task
        </button>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default TodoListMicrofrontend;
