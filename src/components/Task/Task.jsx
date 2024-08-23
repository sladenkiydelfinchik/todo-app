import styles from './Task.module.css'

export const Task = ({task, toggleTaskCompletion}) => {
    return (
        <>
        <div className={styles.TaskListRow}>
        <label className={styles.FormControl}>
        <input type="checkbox" name="checkbox"  />
        <span>{task.title}</span>
        <span className={styles.debug}>{task.id}</span>
        </label>
        <button className={styles.TaskDelete}></button>
        </div>
        </>
);

};
