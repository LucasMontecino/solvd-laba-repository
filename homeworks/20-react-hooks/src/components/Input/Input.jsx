/* eslint-disable react/prop-types */
import styles from "./Input.module.css";
export default function Input({
  type,
  value,
  handleChange,
  handleClick,
  name,
}) {
  return (
    <div className={styles.container}>
      <input type={type} name={name} value={value} onChange={handleChange} />
      <button className={styles.button} onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
