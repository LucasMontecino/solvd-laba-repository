/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ListItems({ handleDeleteTask, handleEditTask }) {
  const { list } = useContext(ToDoContext);
  return (
    <>
      {list && list.length > 0 ? (
        <div className={"hp-list"}>
          <h2 className="hp-list__title">To Do List</h2>
          <ul className="hp-list__parent">
            {list &&
              list.map((item) => (
                <li key={item.id} className="hp-list__item">
                  <div className="task">
                    <div className="bullets"></div>
                    {item.task}
                  </div>
                  <div className="icons">
                    <FaEdit
                      className="icons__item"
                      size={"1.5em"}
                      onClick={() => handleEditTask(item.id)}
                    />
                    <FaTrash
                      className="icons__item"
                      size={"1.5em"}
                      onClick={() => handleDeleteTask(item.id)}
                    />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
