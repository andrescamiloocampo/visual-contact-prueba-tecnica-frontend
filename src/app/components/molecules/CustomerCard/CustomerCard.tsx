import { type ReactElement } from "react";
import styles from './CustomerCard.module.css';
import { type CustomerCardModel } from './CustomerCard.model'
import { FaRegUser } from "react-icons/fa";

export const CustomerCard = ({id,name='No name',wait_time='0s'}:CustomerCardModel):ReactElement => {
    return(
        <div className={styles.customer_card}>
            <div className={styles.user_pic}>            
                <FaRegUser size={25}/>
            </div>
            <div className={styles.stats}>
                <p><strong>Name:</strong>{name}</p>
                <p><strong>Id:</strong>{id}</p>
                <p><strong>Wait time:</strong>{wait_time}</p>
            </div>        
        </div>
    );
}