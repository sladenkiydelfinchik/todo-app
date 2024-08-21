import styles from './Form.module.css'

const Form = () => {
    return (
        <div className={styles.FormWrapper}>
       <form className={styles.Form} action=""
            onSubmit={e => e.preventDefault()}>
        <span className={styles.FormHeader}>Новая задача</span>
        <input className={styles.FormInput} type="text" placeholder="Введите текст"/>
        <button className={styles.FormSubmit}> Создать</button>
       </form>
       </div>
    );
}

export { Form };