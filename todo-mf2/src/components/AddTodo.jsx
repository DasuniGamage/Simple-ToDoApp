import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo,setOpen } from "host/addEditTodoSlice";
import { FiX } from "react-icons/fi";

import "../index.scss";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        title,
        description,
        completed: false,
      })
    );
    dispatch(setOpen(false));
    setTitle("");
    setDescription("");
  };
  return (
    <div className="items-center mx-auto px-4 py-10 my-10 max-h-[75vh] overflow-y-auto">
    <h1  className="text-3xl font-bold mb-4 text-center  text-violet-800">Add New Task<span><button
        className="m-6 bg-red-600 text-white rounded-full  focus:outline-none focus:bg-red-600"
        onClick={()=>dispatch(setOpen(false))}
      >
        <FiX/>

      </button></span></h1>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-500 focus:outline-none focus:bg-violet-600"
      >
        Add Todo
      </button>
      

    </form>
    </div>
  );
};

export default AddTodoForm;
