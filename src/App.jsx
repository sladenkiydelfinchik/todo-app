import { Form } from "./components/Form/Form";
import { TaskList } from "./components/TaskList/TaskList";
import { StatusList } from "./components/StatusList/StatusList";
import "./shared/styles/reset.css";
import "./shared/styles/index.css"
import { useState, useEffect } from "react";


export const App = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
      });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);

    const addTask = (taskTitle) => {
       setTasks([
        ...tasks,{
            id: crypto.randomUUID(),
            title: taskTitle,
            isCompleted: false
        }
       ])
    };

    const toggleTaskCompletionById = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
          );
            setTasks(updatedTasks);
    }

    const deleteTaskById = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
      };

    const [statusFilter, setStatusFilter] = useState('all');
    const filteredTasks = tasks.filter((task) => {
        if (statusFilter === 'all') return true;
        if (statusFilter === 'completed') return task.isCompleted;
        if (statusFilter === 'active') return !task.isCompleted;
        if (statusFilter === 'uncompleted') return !task.isCompleted;
        return true;
      });
    return (
        <>
        <div className="Main">
        <Form
            handleAddTask = {addTask}/>   
        <h3 className="Header">Список задач</h3>
        <div className="Secondary">
         
        <TaskList 
            tasks={filteredTasks}
            onComplete={toggleTaskCompletionById}
            onDelete={deleteTaskById}
        />
        <StatusList 
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}/>
        </div>
        </div>
        </>
    );
}
