import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'Complete React Frontend',
      description: 'Create new react frontends for add new todo task,and edit tasks',
      completed: false,
    },
    {
      id: 2,
      title: 'Implement the backend with node',
      description: 'Implement the backend using node js and express js',
      completed: true,
    },
    {
      id: 3,
      title: 'Test apis ',
      description: 'Test apis for the add new task and edit task',
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
    toggleTodoStatus: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, editTodo,setOpen,toggleTodoStatus } = addEditTodoSlice.actions;
export const addEditTodoReducer = addEditTodoSlice.reducer;
