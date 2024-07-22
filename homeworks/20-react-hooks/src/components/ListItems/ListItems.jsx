/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import style from "./ListItems.module.css";
import { useState } from "react";

export default function ListItems({
  items,
  deleteItem,
  showModal,
  setEditItem,
}) {
  const [isCompleted, setIsCompleted] = useState([]);

  function handleComplete(item) {
    if (!isCompleted.includes(item)) {
      setIsCompleted((prev) => [...prev, item]);
    } else {
      setIsCompleted(isCompleted.filter((el) => el !== item));
    }
  }

  return (
    <>
      <ul className={style.listItems}>
        {items &&
          items.length > 0 &&
          items.map(({ item, id }) => (
            <div key={id} className={style.item}>
              <li
                className={`${style.itemList} ${
                  isCompleted.includes(item) ? style.completed : ""
                }`}
                onClick={() => handleComplete(item)}
              >
                {item}
              </li>
              <div className={style.iconsWrapper}>
                <FaRegEdit
                  className={style.icons}
                  size={"1.3rem"}
                  onClick={() => {
                    setEditItem({ id, item });
                    showModal();
                  }}
                />
                <FaRegTrashCan
                  className={style.icons}
                  size={"1.3rem"}
                  onClick={() => deleteItem(id)}
                />
              </div>
            </div>
          ))}
      </ul>
    </>
  );
}
