import React from "react";

function Task(props) {
  const handleToggle = () => {
    props.onToggle(props.id);
  };
  return (
    <div>
      <input type="checkbox" checked={props.completed} />
      <span>{props.name}</span>
    </div>
  );
}

export default Task;
