 import styles from './TaskList.module.css'
import { Task } from '../Task/Task';


export const TaskList = ({ tasks }) => {
    return (
        <div className={styles.TaskListWrapper}>
        <div  className={styles.TaskList} >
{tasks.map(task => (
  <Task key={task.id} task={task} />
))}
     
        
      </div>
      </div>
    );
}