/* eslint-disable react/prop-types */
import { FaEdit, FaTrash } from "react-icons/fa";
import { useTodos } from "../../hooks/useTodos";

export default function ListItems({
  handleDeleteTask,
  handleToggleCompleteTask,
  openModal,
}) {
  const { state: list } = useTodos();
  return (
    <>
      {list.length > 0 ? (
        <div className={"hp-list"}>
          <h2 className="hp-list__title">To Do List</h2>
          <ul className="hp-list__parent">
            {list.map((item) => (
              <li key={item.id} className="hp-list__item">
                <div
                  className={`task ${item.isCompleted ? "completed" : ""}`}
                  onClick={() => handleToggleCompleteTask(item.id)}
                >
                  <div className="bullets"></div>
                  {item.task}
                </div>
                <div className="icons">
                  <FaEdit
                    className="icons__item"
                    size={"1.5em"}
                    onClick={() => openModal(item)}
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
