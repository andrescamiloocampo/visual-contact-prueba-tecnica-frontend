"use client";
import { type ReactElement } from "react";
import { FilterTag } from "../../atoms/FilterTag/FilterTag";
import styles from "./AgentsFilter.module.css";
import search from "@assets/search.svg";
import Image from "next/image";
import { filterOptions } from "@/app/datasources/filterOptions";
import { useRouter } from "next/navigation";

export const AgentsFilter = (): ReactElement => {
  const router = useRouter();

  const action = (tag: string) => {
    console.log("Filter tag clicked", tag);
    const currentPath = window.location.pathname;
    router.push(`${currentPath}?tag=${tag}`);
  };

  return (
    <div className={styles.agents_filter_container}>
      <h2 className={styles.title}>Agent State</h2>

      <div className={styles.tags}>
        {filterOptions.map(({ tag }, index) => (
          <FilterTag
            key={index}
            text={tag}
            action={() => {
              action(tag);
            }}
          />
        ))}
      </div>

      <div className={styles.filter_fill}>
        <Image
          src={search}
          alt="search_agent"
          className={styles.filter_image}
        />
      </div>
    </div>
  );
};
