import styles from './StatusList.module.css'

const StatusList = () => {
    return (
        <>
    <div className={styles.StatusList}>
      <h3 className={styles.StatusHeader}>Статус</h3>
    


    <label className={styles.StatusFilter}><input type="radio" name="status"/>
        Все
    </label>

    <label className={styles.StatusFilter}><input type="radio" name="status"/>
        Активные
    </label>

    <label className={styles.StatusFilter}><input type="radio" name="status"/>
        Завершенные
    </label>


    <label className={styles.StatusFilter}><input type="radio" name="status"/>
        Незавершенные
    </label>

        </div>
      </>
    );
}

export { StatusList };