import styles from './Form.module.css'
import plusIcon from '../../shared/icons/plus.svg'
import { useState } from 'react';

export const Form = ({ handleAddTask }) => {
    const [title, setTitle] = useState('');

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (title.trim() === '') return;
        handleAddTask(title);
       setTitle('');
      }
    
    return(
        <>
        <div className={styles.FormWrapper}>
            <form className={styles.Form} onSubmit={handleSubmit}>
                <span className={styles.FormHeader}>Новая задача</span>
                <input 
                className={styles.FormInput}
                type="text" 
                placeholder="Введите текст"
                onChange={onChangeTitle}
                />
                <button className={styles.FormSubmit} type="submit"> <img src={plusIcon} />Создать</button>
            </form>
        </div>
        </>
    );
};