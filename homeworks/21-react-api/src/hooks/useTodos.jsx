/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_COMPLETED = "DELETE_COMPLETED";
export const CLEAR_ALL = "CLEAR_ALL";

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, task: action.payload.task }
          : todo
      );
    case DELETE_COMPLETED:
      return state.filter((todo) => !todo.isCompleted);
    case CLEAR_ALL:
      return [];
    default:
      return state;
  }
}

const ToDoContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useTodos() {
  return useContext(ToDoContext);
}

export function ToDoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
}
