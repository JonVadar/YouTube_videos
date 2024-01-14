import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Remove the React.StrictMode component to get re-renders once
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
