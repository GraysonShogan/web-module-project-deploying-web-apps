import React from "react";

function Task(props) {
  const handleToggle = () => {
    props.onToggle(props.id);
  };

  const handleDelete = () => {
    props.onDelete(props.id);
  };

  const handleEdit = () => {
    props.onEdit(props.id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={handleToggle}
        />
        {props.name}
      </label>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Task;
