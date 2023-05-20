import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { v4 as uuidv4 } from "uuid";
function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);

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
    const task = { id: uuidv4(), name: newTask, completed: false };
    setTasks([...tasks, task]);
  };

  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditingTaskId(null); // Reset editing state
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId) => {
    setEditingTaskId(taskId);
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
          onToggle={toggleTaskCompletion}
          onDelete={deleteTask}
          onEdit={handleEditTask} // Pass the handleEditTask function as prop
        />
      ))}
    </div>
  );
}

export default TaskList;
