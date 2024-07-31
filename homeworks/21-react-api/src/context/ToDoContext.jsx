/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { defaultList } from "../list";

export const ToDoContext = createContext(null);

export default function ToDoState({ children }) {
  const [list, setList] = useState([]);

  function getList() {
    setList(defaultList);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <ToDoContext.Provider value={{ list, setList }}>
      {children}
    </ToDoContext.Provider>
  );
}
