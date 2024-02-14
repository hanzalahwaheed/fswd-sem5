import { useState } from "react";
import "./App.css";
import AddTask from "./component/AddTask";
import ListTask from "./component/ListTask";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <ListTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
