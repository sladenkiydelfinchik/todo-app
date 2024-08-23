import { Form } from "./components/Form/Form";
import { TaskList } from "./components/TaskList/TaskList";
import { StatusList } from "./components/StatusList/StatusList";
import "./shared/styles/reset.css";
import "./shared/styles/index.css"
import { useState } from "react";


export const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskTitle) => {
       setTasks([
        ...tasks,{
            id: crypto.randomUUID(),
            title: taskTitle,
            isCompleted: false
        }
       ])
    };

    const toggleTaskCompletion = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          );
          setTasks(updatedTasks);
    }

    return (
        <>
        <div className="Main">
        <Form
            handleAddTask = {addTask}/>   
        <h3 className="Header">Список задач</h3>
        <div className="Secondary">
         
        <TaskList 
            tasks={tasks}
            onComplete={toggleTaskCompletion}
        />
        <StatusList />
        </div>
        </div>
        </>
    );
}
