import styles from './Task.module.css'

export const Task = () => {
    return (
        <>
        <div className={styles.TaskListRow}>
        <label className={styles.FormControl}>
          <input type="checkbox" name="checkbox"  />
         Задача 1
        </label>
        <button className={styles.TaskDelete}></button>
        </div></>
);

};
