import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { PhoneContextProvider } from "./context/phone.context.provider";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <PhoneContextProvider>
        <App />
      </PhoneContextProvider>
    </Router>
  </React.StrictMode>
);
