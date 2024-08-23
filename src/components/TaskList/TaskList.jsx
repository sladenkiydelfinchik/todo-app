 import styles from './TaskList.module.css'
import { Task } from '../Task/Task';


export const TaskList = ({ tasks, toggleTaskCompletion }) => {
    return (
      <div className={styles.TaskListWrapper}>
        <div  className={styles.TaskList} >
          {tasks.map(task => (
            <Task
            key={task.id} 
            task={task} 
            toggleTaskCompletion={toggleTaskCompletion} />
          ))}
        </div>
      </div>
    );
}