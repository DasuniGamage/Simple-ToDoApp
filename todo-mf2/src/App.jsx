import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import AddTodo from "./components/AddTodo";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <AddTodo/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
