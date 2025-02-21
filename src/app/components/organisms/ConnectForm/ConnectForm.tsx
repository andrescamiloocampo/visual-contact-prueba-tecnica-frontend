'use client'

import styles from './ConnectForm.module.css';
import { type ReactElement } from 'react';

export const ConnectForm = (): ReactElement => {
    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    }; 
    return(
        <form className={styles.register} onSubmit={handleForm}>
                <h3>Enter in the list </h3>
                <input type="text" placeholder="Enter your name" className={styles.input}/>
                <button className={styles.btn_create}>Connect user</button>
            </form>                    
    )
}