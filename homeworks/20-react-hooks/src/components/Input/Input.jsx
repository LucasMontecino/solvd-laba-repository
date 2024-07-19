/* eslint-disable react/prop-types */
export default function Input({
  type,
  value,
  handleChange,
  handleClick,
  name,
}) {
  return (
    <div>
      <input type={type} name={name} value={value} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
