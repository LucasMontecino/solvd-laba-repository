/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from 'react';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_COMPLETED = 'DELETE_COMPLETED';
export const CLEAR_ALL = 'CLEAR_ALL';
export const FILTER_BY_STATUS = 'FILTER_BY_STATUS';

const initialState = {
  initialList: JSON.parse(localStorage.getItem('list')) || [],
  filterList: JSON.parse(localStorage.getItem('list')) || [],
};

function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        initialList: [...state.initialList, action.payload],
        filterList: [...state.filterList, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        initialList: state.initialList.filter(
          (todo) => todo.id !== action.payload
        ),
        filterList: state.filterList.filter(
          (todo) => todo.id !== action.payload
        ),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        initialList: state.initialList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
        filterList: state.filterList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };

    case EDIT_TODO:
      return {
        ...state,
        initialList: state.initialList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, task: action.payload.task }
            : todo
        ),
        filterList: state.filterList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, task: action.payload.task }
            : todo
        ),
      };

    case DELETE_COMPLETED:
      return {
        ...state,
        initialList: state.initialList.filter((todo) => !todo.isCompleted),
        filterList: state.filterList.filter((todo) => !todo.isCompleted),
      };
    case CLEAR_ALL:
      return {
        ...state,
        initialList: [],
        filterList: [],
      };
    case FILTER_BY_STATUS: {
      const handleCompleted = (todo) => todo.isCompleted;
      const handleIncompleted = (todo) => !todo.isCompleted;
      return {
        ...state,
        filterList:
          action.payload === 'incompleted'
            ? state.initialList.filter(handleIncompleted)
            : action.payload === 'completed'
            ? state.initialList.filter(handleCompleted)
            : state.initialList,
      };
    }

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

  const { initialList, filterList } = state;

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state.initialList));
  }, [state.initialList]);

  return (
    <ToDoContext.Provider value={{ initialList, filterList, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
}
