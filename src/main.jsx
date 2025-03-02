// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Renderizar la aplicación en el DOM
ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);