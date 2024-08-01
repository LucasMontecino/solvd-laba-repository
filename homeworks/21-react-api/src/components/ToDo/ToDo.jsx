import { useContext, useState } from "react";
import ListItems from "../ListItems/ListItems";
import { ToDoContext } from "../../context/ToDoContext";
import FormList from "../FormList/FormList";

export default function ToDo() {
  const { list, setList } = useContext(ToDoContext);
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = { id: list.length + 1, task: task, isCompleted: false };

    setList((prevList) => {
      return [...prevList, newTask];
    });

    console.log("adding task successfully!");
    setTask("");
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

      <ListItems />
    </div>
  );
}
