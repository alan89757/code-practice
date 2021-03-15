import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider  } from "react-redux";
import thunk from "redux-thunk";
import { tempChange } from "./redux/index";  // reducer
import App from "./app";

const store = createStore(tempChange);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("app"));