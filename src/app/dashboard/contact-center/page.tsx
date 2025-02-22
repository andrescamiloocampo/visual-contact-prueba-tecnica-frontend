'use client';

import { useEffect, type ReactElement } from "react";
import styles from "./contact-center.module.css";
import { useSearchParams } from "next/navigation";
import { AgentsTable } from "@/app/components/organisms/AgentsTable/AgentsTable";
import { AgentsFilter } from "@/app/components/organisms/AgentsFilter/AgentsFilter";
import { getAgents } from "@/app/server/agents/getAgents";
import { useAgentsStore } from "@/app/store/agents.store";

export default function ContactCenterPage(): ReactElement {
  const searchParams = useSearchParams();
  const filter = searchParams.get("tag") || "";  
  const setAgentsStorage = useAgentsStore(state=>state.setAgents);
  const agentsStorage = useAgentsStore(state=>state.agents);

  useEffect(()=>{
    const fetchAgents = async () => {
      const agents = await getAgents(filter) ?? [];
      const agentsWithClients = agents.map(agent => ({ ...agent, clients: [] }));      
      setAgentsStorage(agentsWithClients);
    }
    fetchAgents();
  }, [filter]);

  return (
    <div className={styles.contact_center_container}>            
    {JSON.stringify(agentsStorage)}
      <aside className={styles.left_side}>
        <AgentsFilter />
      </aside>
      <aside className={styles.right_side}>
        <div className={styles.heading_content}>
          <h1>Looking for an agent?</h1>
        </div>
        <AgentsTable agents={agentsStorage ?? []}/>
      </aside>
    </div>
  );
}
