import styles from "./Task.module.css";
import { Link } from "react-router-dom";
import newTab from "../../shared/icons/newtab.svg";
import { basePath } from "../BasePath/BasePath";

export const Task = ({ task, onComplete, onDelete }) => {
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
          <span className={task.isCompleted ? styles.textCompleted : ""}>
            {task.title}
          </span>
        </label>
        <Link to={`${basePath}/task/${task.id}`} className={styles.newTab}>
          <img src={newTab} />{" "}
        </Link>
        <button
          className={styles.TaskDelete}
          onClick={() => onDelete(task.id)}
        ></button>
      </div>
    </>
  );
};
