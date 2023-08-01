import Todo from './Todo';
import {TodoContext} from "../Context/TodoContext"

export default function TodoList() {
    return (
      <TodoContext.Consumer>
        {(value) => {
          return (
            <div className="TodoList">
              <div className="add">
                <label htmlFor="task">New Task: </label>
                <input type="text" id="task" placeholder="Write your task.." value={value.tasktest} onChange={value.handleInputChange}/>
                <button type="button" onClick={value.handleAddTask}>
                  Add Task
                </button>
              </div>
              <div className="list">
                <ul id="task-list">
                  {value.tasks.map((task) => (
                    <Todo key={task.id} task={task} onDeleteTask={value.handleDeleteTask}/>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </TodoContext.Consumer>
    );
  }
  