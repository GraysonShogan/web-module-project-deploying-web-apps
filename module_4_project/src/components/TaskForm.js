import React, { useState } from "react";
function TaskForm(props) {
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskName.trim() === "") {
      return;
    }

    props.onAddTask(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskName} onChange={handleInputChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;