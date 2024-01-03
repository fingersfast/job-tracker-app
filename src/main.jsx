import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
