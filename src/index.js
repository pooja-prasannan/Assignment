import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/store";
import App from "./js/components/App.jsx";
// import "./js/styles/tailwind.css";
// import './index.css';

render(
  <div className="bg-black"> 
  <Provider store={store}>
    <App />
  </Provider>
  </div>,
  document.getElementById("root")
);
