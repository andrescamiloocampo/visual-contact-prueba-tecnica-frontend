'use client'

import { type ReactElement, useEffect } from "react";
import styles from "./customers.module.css";
import { CustomerCard } from "@/app/components/molecules/CustomerCard/CustomerCard";
import { ConnectForm } from "@/app/components/organisms/ConnectForm/ConnectForm";
import { getClients } from "@/app/server/clients/getClients";
import type { ClientModel } from "@/app/models";
import Image from "next/image";
import queue from '@assets/queue.svg';
import { useClients } from "@/app/context/ClientsContext";

export default function CustomersPage(): ReactElement {
  const { clients, setClients } = useClients();

  useEffect(() => {
    const fetchClients = async () => {
      const customers: ClientModel[] = await getClients() ?? [];
      setClients(customers);
    };
    fetchClients();
  }, [setClients]);

  return (
    <div className={styles.customers_page}>
      <aside className={styles.left_side}>
        <h1 className={styles.title}>Customers queue</h1>
        <div className={styles.customers_list}>
          {clients.map((client) => (
            <CustomerCard id={client.id.toString()} name={client.name} key={client.id} />
          ))}
        </div>
        <ConnectForm clients={clients} setClients={setClients}/>
      </aside>
      <aside className={styles.right_side}>
        <Image alt="queue" src={queue} className={styles.queue_image} />
      </aside>
    </div>
  );
}
