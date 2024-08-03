/* eslint-disable react/prop-types */

export default function FormList({
  handleSubmit,
  task,
  handleChange,
  buttonText,
}) {
  return (
    <form className={"form"} onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        className="form__input"
      />
      <button type="submit" className="form__button">
        {buttonText}
      </button>
    </form>
  );
}
