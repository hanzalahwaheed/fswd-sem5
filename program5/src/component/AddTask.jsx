import React, { useState } from "react";

function AddTask(props) {
  const tasks = props.tasks;
  const setTasks = props.setTasks;

  const [taskValue, setTaskValue] = useState("");

  function handleChange(e) {
    const str = e.target.value;
    setTaskValue(str);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks,taskValue]);
    console.log(tasks);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Task: </label>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTask;
