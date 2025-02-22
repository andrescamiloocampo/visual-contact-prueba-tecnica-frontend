import { type ReactElement } from "react"
import styles from './AgentsTable.module.css';
import { AgentsTableModel } from "./AgentsTable.model";

export const AgentsTable = ({agents=[]}:AgentsTableModel):ReactElement => {
    return(
      <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.equalWidth}>Agent</th>
            <th className={styles.equalWidth}>Avg. handle time</th>         
            <th className={styles.equalWidth}>State</th>                                    
          </tr>
        </thead>
        <tbody>
          {agents.map((agent, index) => (
            <tr key={index}>
              <td className={styles.equalWidth}>{agent.name}</td>              
              <td className={styles.equalWidth}>{agent.waittime}</td>              
              <td className={styles.equalWidth}>
                {(agent.clients?.length ?? 0) === 0 ? (
                  <span className={`${styles.badge} ${styles.available}`}>Available</span>
                ) : (
                  <span className={`${styles.badge} ${styles.onCall}`}>onCall</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
}