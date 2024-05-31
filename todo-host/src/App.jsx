import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import store from './data/store';
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";

const App = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/"  element = {<Layout/>}>
      <Route  path="/"  element = {<Main/>}/>
    </Route>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(
<Provider store={store}><App /></Provider>,
 document.getElementById("app"));
