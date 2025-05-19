// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";  // Note the change here
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";  // React Router

const root = ReactDOM.createRoot(document.getElementById("root"));  // Create root for React 18
root.render(
  <Router>
    <App />
  </Router>
);
