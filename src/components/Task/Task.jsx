import styles from './Task.module.css'

export const Task = ({task}) => {
    return (
        <>
        <div className={styles.TaskListRow}>
        <label className={styles.FormControl}>
          <input type="checkbox" name="checkbox"  />
         <span>{task.title}</span>
     
        </label>
        <button className={styles.TaskDelete}></button>
        </div></>
);

};
