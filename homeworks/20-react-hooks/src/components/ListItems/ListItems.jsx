/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import style from "./ListItems.module.css";

export default function ListItems({ items, deleteItem, showModal }) {
  return (
    <ul className={style.listItems}>
      {items &&
        items.length > 0 &&
        items.map(({ item, id }) => (
          <div key={id} className={style.item}>
            <li>{item}</li>
            <div className={style.iconsWrapper}>
              <FaRegEdit
                className={style.icons}
                size={"1.3rem"}
                onClick={showModal}
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
  );
}
