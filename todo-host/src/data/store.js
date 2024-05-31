import { configureStore } from '@reduxjs/toolkit';
import {addEditTodoReducer} from '../redux/addEditTodoSlice';

const rootReducer = {
  addEditTodo: addEditTodoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
