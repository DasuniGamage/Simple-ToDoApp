import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'Sample Todo 1',
      description: 'This is the description for Sample Todo 1',
      completed: false,
    },
    {
      id: 2,
      title: 'Sample Todo 2',
      description: 'This is the description for Sample Todo 2',
      completed: true,
    },
  ],
  isOpen: false,
};

const addEditTodoSlice = createSlice({
  name: 'addEditTodo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    editTodo: (state, action) => {
      const { id, title, description, completed } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
        todo.description = description;
        todo.completed = completed;
      }
    },
  },
});

export const { addTodo, editTodo,setOpen } = addEditTodoSlice.actions;
export const addEditTodoReducer = addEditTodoSlice.reducer;
