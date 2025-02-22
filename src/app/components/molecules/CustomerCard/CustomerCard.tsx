"use client";
import { type ReactElement } from "react";
import styles from "./CustomerCard.module.css";
import { type CustomerCardModel } from "./CustomerCard.model";
import { FaRegUser } from "react-icons/fa";
import { useAgentsStore } from "@/app/store/agents.store";
import { deleteClient } from "@/app/server/clients/deleteClient";

export const CustomerCard = ({
  id,
  name = "No name",
}: CustomerCardModel): ReactElement => {
  const updateAgents = useAgentsStore((state) => state.addClientToAgent);
  const agents = useAgentsStore((state) => state.agents);

  const handleClient = async (agent_id: string | number, id: string, name: string): Promise<void> => {
    const response = await deleteClient(id);
    console.log(response);
    updateAgents(agent_id, { id, name });
  };

  return (
    <div className={styles.customer_card}>
      <div className={styles.user_details}>
        <div className={styles.user_pic}>
          <FaRegUser size={25} />
        </div>
        <div className={styles.stats}>
          <p>
            <strong>Name:</strong>
            {name}
          </p>
          <p>
            <strong>Id:</strong>
            {id}
          </p>
        </div>
      </div>

      <div className={styles.agents_details}>
        <details>
          <summary>Choose an agent</summary>
          <div>
            {agents.map(({id:agent_id,name:agent_name}) => (
              <div
                key={agent_id}
                onClick={async() => {
                  await handleClient(agent_id,id,name)
                }}
              >
                {agent_name}
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
};
