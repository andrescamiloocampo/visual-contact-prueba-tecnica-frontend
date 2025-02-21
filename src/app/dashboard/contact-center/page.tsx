import { type ReactElement } from "react";
import styles from "./contact-center.module.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AgentsTable } from "@/app/components/organisms/AgentsTable/AgentsTable";
import { AgentsFilter } from "@/app/components/organisms/AgentsFilter/AgentsFilter";

export default function ContactCenterPage(): ReactElement {
  return (
    <div className={styles.contact_center_container}>
       <aside className={styles.left_side}>
            <AgentsFilter />
        </aside> 
      <aside className={styles.right_side}>
        <div className={styles.heading_content}>
          <h1>Looking for an agent?</h1>
          <div className={styles.search_bar_container}>
            <HiMagnifyingGlass size={25} color="#918888" />
            <input className={styles.search_bar} placeholder="Search here" />
          </div>
        </div>
        <AgentsTable />
      </aside>
    </div>
  );
}
