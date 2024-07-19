import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import ListItems from "./components/ListItems/ListItems";

function App() {
  const [input, setInput] = useState({
    id: "",
    item: "",
  });
  const [items, setItems] = useState([]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: [e.target.value],
    });
  }

  function handleClick() {
    setItems((prev) => [...prev, { ...input, id: crypto.randomUUID() }]);
    setInput({
      id: "",
      item: "",
    });
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
      <ListItems items={items} />
    </>
  );
}

export default App;
