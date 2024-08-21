import { Form } from "./components/Form/Form";
import { TaskList } from "./components/TaskList/TaskList";
import { StatusList } from "./components/StatusList/StatusList";
import "./shared/styles/reset.css";
import "./shared/styles/index.css"

const App = () => {
    return (
        <>
        <div className="Main">
        <Form />   
        <h3 className="Header">Список задач</h3>
        <div className="Secondary">
         
        <TaskList />
        <StatusList />
        </div>
        </div>
        </>
    );
}

export { App };