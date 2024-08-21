import styles from './TaskList.module.css'

const TaskList = () => {
    return (
        <div className={styles.TaskListWrapper}>
        <form action="" className={styles.TaskList} >
        <div className={styles.TaskListRow}>
        <label className={styles.FormControl}>
          <input type="checkbox" name="checkbox" />
          Задача 1
        </label>
        <button className={styles.TaskDelete}></button>
        </div>
      </form>
      </div>
    );
}

export { TaskList };