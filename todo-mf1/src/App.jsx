import React from "react";
import ReactDOM from "react-dom";


import "./index.scss";
import Header from 'host/Header'
import Footer from "host/Footer";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
const App = () => (
  <div>
    <Header/>
    <Button/>
    <TodoList/>
    <div className="my-10">
      This is content of mf1
    </div>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
