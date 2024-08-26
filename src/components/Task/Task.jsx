import styles from './Task.module.css'

export const Task = ({task, onComplete, onDelete}) => {
    return (
        <>
        <div className={styles.TaskListRow}>
        <label className={styles.FormControl}>
        <input 
            type="checkbox" 
            name="checkbox" 
            onChange={() => onComplete(task.id)}
            checked={task.completed} 
        />
        <span className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</span>
        </label>
        <button className={styles.TaskDelete} onClick={()=> onDelete(task.id)}></button>
        </div>
        </>
);
};
