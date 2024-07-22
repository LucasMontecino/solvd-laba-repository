/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Modal.module.css";

export default function Modal({ editItem, handleUpdate, closeModal }) {
  const [input, setInput] = useState(editItem.item);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSave() {
    handleUpdate(editItem.id, input);
    closeModal();
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Edit item: <span className={styles.specialTitle}>{editItem.item}</span>
      </h3>
      <input
        type="text"
        onChange={handleChange}
        value={input}
        name="item"
        className={styles.input}
      />
      <div className={styles.buttons}>
        <span className={styles.modalButton} onClick={handleSave}>
          ✅
        </span>
        <span className={styles.modalButton} onClick={closeModal}>
          ❌
        </span>
      </div>
    </div>
  );
}
