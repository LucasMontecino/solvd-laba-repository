import { useContext, useState } from "react";
import ListItems from "../ListItems/ListItems";
import { ToDoContext } from "../../context/ToDoContext";
import FormList from "../FormList/FormList";
import Errors from "../Errors/Errors";

function validateErrors(input) {
  if (input.length === 0)
    throw new Error("Oh no, you forget to type something!");
  if (input.length > 50)
    throw new Error("Hey, the maximum of characters is 50!");
}

function capitalizeTask(input) {
  return input[0].toUpperCase() + input.slice(1);
}

export default function ToDo() {
  const { list, setList, errors, setErrors } = useContext(ToDoContext);
  const [task, setTask] = useState("");

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

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <div className="ToDo">
      <FormList
        task={task}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {errors && <Errors errors={errors} />}
      <ListItems />
    </div>
  );
}
