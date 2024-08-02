/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ToDoContext = createContext(null);

export default function ToDoState({ children }) {
  const [list, setList] = useState([]);
  const [errors, setErrors] = useState(null);

  return (
    <ToDoContext.Provider value={{ list, setList, errors, setErrors }}>
      {children}
    </ToDoContext.Provider>
  );
}
