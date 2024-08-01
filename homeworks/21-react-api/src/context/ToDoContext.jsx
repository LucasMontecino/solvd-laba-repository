/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { todoList } from "../list";

export const ToDoContext = createContext(null);

export default function ToDoState({ children }) {
  const [list, setList] = useState(todoList);

  return (
    <ToDoContext.Provider value={{ list, setList }}>
      {children}
    </ToDoContext.Provider>
  );
}
