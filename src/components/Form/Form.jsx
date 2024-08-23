import styles from './Form.module.css'
import plusIcon from '../../shared/icons/plus.svg'

export const Form = () => {

    return(
        <>
        <div className={styles.FormWrapper}>
            <form className={styles.Form}>
                <span className={styles.FormHeader}>Новая задача</span>
                <input 
                className={styles.FormInput}
                type="text" 
                placeholder="Введите текст" 
                />
                <button className={styles.FormSubmit} type="submit"> <img src={plusIcon} />Создать</button>
            </form>
        </div>
        </>
    );
};