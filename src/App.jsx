import { Form } from "./components/Form/Form";
import { TaskList } from "./components/TaskList/TaskList";
import { StatusList } from "./components/StatusList/StatusList";
import "./shared/styles/reset.css";
import "./shared/styles/index.css"
import { useState } from "react";


export const App = () => {
    const [tasks, setTasks] = useState([]);
    function addTask(taskTitle) {
       console.log(taskTitle);
       setTasks([
        ...tasks,{
            id: crypto.randomUUID(),
            title: taskTitle,
            isCompleted: false
        }
       ])
       
    };
    
    return (
        <>
        <div className="Main">
        <Form  handleAddTask = {addTask}/>   
        <h3 className="Header">Список задач</h3>
        <div className="Secondary">
         
        <TaskList 
            tasks={tasks}
        />
        <StatusList />
        </div>
        </div>
        </>
    );
}
