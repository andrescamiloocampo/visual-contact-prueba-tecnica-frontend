import { type ReactElement } from "react";
import { FilterTag } from "../../atoms/FilterTag/FilterTag";
import styles from './AgentsFilter.module.css';
import search from '@assets/search.svg';
import Image from "next/image";

export const AgentsFilter = ():ReactElement => {
    return(
        <div className={styles.agents_filter_container}>        
            <h2 className={styles.title}>
                Agent State
            </h2>
            <div className={styles.tags}>
                <FilterTag text="All agents"/>
                <FilterTag text="Available"/>
                <FilterTag text="On call"/>
            </div>
            <div className={styles.filter_fill}>
                <Image src={search} alt="search_agent" className={styles.filter_image}/>
            </div>
        </div>
    )
}