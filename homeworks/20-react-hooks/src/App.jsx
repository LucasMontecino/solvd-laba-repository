import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import ListItems from "./components/ListItems/ListItems";
import Modal from "./components/Modal/Modal";
import icon from "./assets/icon-list.png";

function App() {
  const [input, setInput] = useState({
    id: "",
    item: "",
  });
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [showModal, setShowModal] = useState(false);

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    document.title = "Lucas' to-do List";
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = icon;
  }, []);

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

  function handleUpdate(id, updateItem) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, item: updateItem } : item
      )
    );
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
        showModal={() => setShowModal(true)}
        setEditItem={setEditItem}
      />
      {showModal && (
        <Modal
          editItem={editItem}
          handleUpdate={handleUpdate}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default App;
