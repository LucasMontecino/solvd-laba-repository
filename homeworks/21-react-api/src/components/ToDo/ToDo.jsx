import { useContext, useState } from "react";
import ListItems from "../ListItems/ListItems";
import { ToDoContext } from "../../context/ToDoContext";
import FormList from "../FormList/FormList";
import Errors from "../Errors/Errors";
import Modal from "../Modal/Modal";
import capitalizeTask from "../../utils/capitalizeTask";

function validateErrors(input) {
  if (input.length === 0)
    throw new Error("Oh no, you forget to type something!");
  if (input.length > 50)
    throw new Error("Hey, the maximum of characters is 50!");
}

export default function ToDo() {
  const { list, setList, errors, setErrors } = useContext(ToDoContext);
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    try {
      validateErrors(task);

      const newTask = {
        id: list.length + 1,
        task: capitalizeTask(task),
        isCompleted: false,
      };

      setList((prevList) => {
        return [...prevList, newTask];
      });

      console.log("adding task successfully!");
      setTask("");
      setErrors(null);
    } catch (error) {
      setErrors(error.message);
    }
  }

  function handleDeleteTask(id) {
    setList(list.filter((item) => item.id !== id));
  }

  function handleEditTask(id) {
    const currentTask = list.find((item) => item.id === id);
    setEditTask(currentTask);
    setShowModal(true);
  }

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <>
      <div
        className={`ToDo ${showModal ? "opacity" : null}`}
        onClick={() => {
          showModal ? setShowModal(false) : null;
        }}
      >
        <FormList
          task={task}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText={"Add Task"}
          showModal={showModal}
        />
        {errors && <Errors errors={errors} />}
        <ListItems
          showModal={showModal}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          editTask={editTask}
          setEditTask={setEditTask}
        />
      )}
    </>
  );
}
