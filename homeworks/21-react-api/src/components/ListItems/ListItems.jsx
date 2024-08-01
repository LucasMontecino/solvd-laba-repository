import { useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";

export default function ListItems() {
  const { list } = useContext(ToDoContext);
  return (
    <div className="hp-list">
      <h2 className="hp-list__title">To Do List</h2>
      <ul className="hp-list__parent">
        {list &&
          list.map((item) => (
            <li key={item.id} className="hp-list__item">
              <div className="bullets"></div>
              {item.task}
            </li>
          ))}
      </ul>
    </div>
  );
}
