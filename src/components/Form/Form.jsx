import styles from './Form.module.css'
import plusIcon from '../../shared/icons/plus.svg'

const Form = () => {
    return (
        <div className={styles.FormWrapper}>
            <form className={styles.Form} action=""
                onSubmit={e => e.preventDefault()}>
                <span className={styles.FormHeader}>Новая задача</span>
                <input className={styles.FormInput} type="text" placeholder="Введите текст" />
                <button className={styles.FormSubmit}> <img src={plusIcon} /> Создать</button>
            </form>
        </div>
    );
}

export { Form };