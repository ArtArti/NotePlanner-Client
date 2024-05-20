import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


import store from "./store";


import 'react-app-polyfill/stable'
import 'core-js'
import { Provider } from 'react-redux'

// src/index.js
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import { Toaster } from "react-hot-toast";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
  <Provider store={store}>
    <App />
  <Toaster/>
  </Provider>
  </I18nextProvider>
);
