import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./core/component/App";
import { Provider } from "react-redux";
import { store } from "./core/store/store";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
