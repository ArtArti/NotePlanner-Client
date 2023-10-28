import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import store from "./store";
import store from "./store";


import 'react-app-polyfill/stable'
import 'core-js'
import { Provider } from 'react-redux'

// src/index.js
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
  <App />
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
