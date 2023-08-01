import React, { useContext } from 'react';
import { TodoContext } from "../Context/TodoContext"

export default function Todo({ task }) {
  const value = useContext(TodoContext);
  return (
    <li>
      <label>{task.text}</label>
      <button onClick={() => value.handleDeleteTask(task.id)}>Delete Task</button>
    </li>
  );
};
