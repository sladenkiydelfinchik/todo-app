 import styles from './TaskList.module.css'
import { Task } from '../Task/Task';


export const TaskList = () => {
    return (
        <div className={styles.TaskListWrapper}>
        <div  className={styles.TaskList} >

        <Task />
        
      </div>
      </div>
    );
}