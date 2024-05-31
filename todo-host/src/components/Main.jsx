import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import ErrorBoundary from "./ErrorBoundary";
const AddTodo = React.lazy(() => import("todo_mf2/AddTodo"));
const TodoList = React.lazy(() => import("todo_mf1/TodoList"));

const Main = () => {
  const isOpen = useSelector((state) => state.addEditTodo.isOpen);

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex justify-center">
          <div className="w-2/4 shadow-md ">
            <TodoList />
          </div>
          {isOpen ? (
            <div className="w-1/3 shadow-md">
              <AddTodo />
            </div>
          ) : null}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Main;
