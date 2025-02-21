import { ReactElement } from "react";
import styles from './dashboardPage.module.css';
import { Welcome } from "../components/sections/Welcome/Welcome";

export default function DashboardPage():ReactElement{
    return(
        <div className={styles.dashboard_container}>
            <Welcome/>
        </div>
    )
}