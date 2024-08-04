/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import FormList from "../FormList/FormList";
import { FaWindowClose } from "react-icons/fa";
import { ToDoContext } from "../../context/ToDoContext";
import capitalizeTask from "../../utils/capitalizeTask";

// eslint-disable-next-line react/prop-types
export default function Modal({ setShowModal, editTask, setEditTask }) {
  const { setList } = useContext(ToDoContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  function handleEditChange(e) {
    setEditTask((prevTask) => ({
      ...prevTask,
      task: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const updateTask = {
      ...editTask,
      task: capitalizeTask(editTask.task),
    };

    setList((prevList) => {
      return prevList.map((item) =>
        item.id === updateTask.id ? updateTask : item
      );
    });

    console.log("edit task successfully!");
    setShowModal(false);
  }

  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <FaWindowClose
        size={"2em"}
        className="modal__close"
        onClick={() => setShowModal(false)}
      />
      <FormList
        buttonText={"Edit Task"}
        className={"form"}
        handleChange={handleEditChange}
        task={editTask.task}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
