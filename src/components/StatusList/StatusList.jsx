import styles from "./StatusList.module.css";

export const StatusList = ({ statusFilter, setStatusFilter }) => {
  return (
    <>
      <div className={styles.StatusList}>
        <h3 className={styles.StatusHeader}>Статус</h3>
        <label className={styles.StatusFilter}>
          <input
            type="radio"
            name="status"
            value="all"
            checked={statusFilter === "all"}
            onChange={() => setStatusFilter("all")}
          />
          Все
        </label>

        <label className={styles.StatusFilter}>
          <input
            type="radio"
            name="status"
            value="active"
            checked={statusFilter === "active"}
            onChange={() => setStatusFilter("active")}
          />
          Активные
        </label>

        <label className={styles.StatusFilter}>
          <input
            type="radio"
            name="status"
            value="completed"
            checked={statusFilter === "completed"}
            onChange={() => setStatusFilter("completed")}
          />
          Завершенные
        </label>
      </div>
    </>
  );
};
