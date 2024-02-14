import React from "react";

function ListTask(props) {
  const tasks = props.tasks;
  const setTasks = props.setTasks;

  return (
    <div>
      <h1>My Tasks:</h1>
      {tasks.map(function (x) {
        return <h1>{x}</h1>;
      })}
    </div>
  );
}

export default ListTask;
