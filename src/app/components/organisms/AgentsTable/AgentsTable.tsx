import { type ReactElement } from "react"
import styles from './AgentsTable.module.css';

const agents = [
    { name: "Anna Smith", state: "Available", calls: 5, time: "3m" },
    { name: "Ben Johnson", state: "Unavailable", calls: 8, time: "2m" },
    { name: "Chris Davis", state: "Busy", calls: 4, time: "5m" },
    { name: "Diana Brown", state: "Available", calls: 7, time: "4m" },
    { name: "Ethan Miller", state: "Unavailable", calls: 6, time: "3m" },
    { name: "Fiona Wilson", state: "Busy", calls: 3, time: "6m" },
    { name: "George Taylor", state: "Available", calls: 9, time: "2m" },
    { name: "Helen Clark", state: "Unavailable", calls: 5, time: "4m" },
    { name: "Ivan White", state: "Busy", calls: 2, time: "7m" }
];

export const AgentsTable = ():ReactElement => {
    return(
        <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Agent</th>
            <th>State</th>
            <th>Calls handled</th>
            <th>Avg. handle time</th>
            <th>Clients</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent, index) => (
            <tr key={index}>
              <td>{agent.name}</td>
              <td>
                <span className={`${styles.badge} ${styles[agent.state.toLowerCase()]}`}>
                  {agent.state}
                </span>
              </td>
              <td>{agent.calls}</td>
              <td>{agent.time}</td>
              <td>
                <a href="#" className={styles.link}>View clients</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
}