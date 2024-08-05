import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToDoProvider } from "./hooks/useTodos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </React.StrictMode>
);
