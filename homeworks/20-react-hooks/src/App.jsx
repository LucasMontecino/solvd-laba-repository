import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import ListItems from "./components/ListItems/ListItems";
import Modal from "./components/Modal/Modal";

function App() {
  const [input, setInput] = useState({
    id: "",
    item: "",
  });
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick() {
    setItems((prev) => {
      const newItem = { ...input, id: crypto.randomUUID() };
      const findItem = items.find((el) => el.item === newItem.item);

      if (!findItem && newItem.item !== "") {
        return [...prev, newItem];
      } else {
        return items;
      }
    });
    setInput({
      id: "",
      item: "",
    });
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <Input
        type={"text"}
        value={input.item}
        name="item"
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <ListItems
        items={items}
        deleteItem={handleDelete}
        showModal={() => setShowModal(!showModal)}
      />
      {showModal && <Modal />}
    </>
  );
}

export default App;
