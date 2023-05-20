import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <TaskForm onAddTask={addTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          onToggle={editTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
