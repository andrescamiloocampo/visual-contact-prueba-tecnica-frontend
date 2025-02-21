import { type ReactElement } from "react";
import styles from "./customers.module.css";
import { CustomerCard } from "@/app/components/molecules/CustomerCard/CustomerCard";
import { ConnectForm } from "@/app/components/organisms/ConnectForm/ConnectForm";
import Image from "next/image";
import queue from '@assets/queue.svg';

export default function CustomersPage(): ReactElement {
  return (
    <div className={styles.customers_page}>
      <aside className={styles.left_side}>
      <h1 className={styles.title}>Customers queue</h1>
        <div className={styles.customers_list}>
          <CustomerCard id="1" name="Andres Ocampo" wait_time="30s" />
          <CustomerCard id="1" name="Andres Ocampo" wait_time="30s" />
          <CustomerCard id="1" name="Andres Ocampo" wait_time="30s" />
          <CustomerCard id="1" name="Andres Ocampo" wait_time="30s" />
          <CustomerCard id="1" name="Andres Ocampo" wait_time="30s" />
          <CustomerCard id="1" name="Andres Ocampo" wait_time="30s" />
          <CustomerCard id="1" name="Andres Ocampo" wait_time="30s" />
          <CustomerCard id="1" name="Andres Ocampo" wait_time="30s" />
          <CustomerCard id="1" name="Andres Ocampo" wait_time="30s" />
          <CustomerCard id="1" name="Andres Ocampo" wait_time="30s" />
          <CustomerCard id="1" name="Andres Ocampo" wait_time="30s" />
          <CustomerCard id="1" name="Andres Ocampo" wait_time="30s" />
        </div>
        <ConnectForm />
      </aside>
      <aside className={styles.right_side}>
        <Image alt="queue" src={queue} className={styles.queue_image}/>
      </aside>
    </div>
  );
}
