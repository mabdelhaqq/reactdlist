import React, {createContext, useState} from "react";

export const TodoContext= createContext();
const TodoContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
    const handleInputChange = (event) => {
        setTaskText(event.target.value);
      };
    const handleAddTask = () => {
        if (taskText.trim() === '') {
          alert('Please enter a task, this is empty');
          return;
        }
        const newTask = {
          id: Date.now(),
          text: taskText,
        };
        setTasks([...tasks, newTask]);
        setTaskText('');
      };
      const handleDeleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      };
      const value={tasks,taskText,handleInputChange,handleAddTask, handleDeleteTask};
    return(
        <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
    )
}
export default TodoContextProvider;