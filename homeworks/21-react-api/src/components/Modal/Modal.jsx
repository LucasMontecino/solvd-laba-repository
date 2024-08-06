/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormList from "../FormList/FormList";
import { FaWindowClose } from "react-icons/fa";
import capitalizeTask from "../../utils/capitalizeTask";
import { EDIT_TODO, useTodos } from "../../hooks/useTodos";

// eslint-disable-next-line react/prop-types
export default function Modal({ setShowModal, editTask }) {
  const { dispatch } = useTodos();
  const [task, setTask] = useState(editTask.task);

  useEffect(() => {
    setTask(editTask.task);
  }, [editTask]);

  function handleEditChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const updatedTask = {
      ...editTask,
      task: capitalizeTask(task),
    };

    dispatch({ type: EDIT_TODO, payload: updatedTask });
    setShowModal(false);
  }

  return (
    <div className={`modal show`}>
      <FaWindowClose
        size={"2em"}
        className="modal__close"
        onClick={setShowModal}
      />
      <FormList
        buttonText={"Edit Task"}
        className={"form"}
        handleChange={handleEditChange}
        task={task}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
