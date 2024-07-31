import "./App.css";
import HelloWorld from "./components/HelloWorld";
import ListItems from "./components/ListItems/ListItems";

function App() {
  return (
    <div className="body">
      <HelloWorld name={"Lucas"} />
      <ListItems />
    </div>
  );
}

export default App;
