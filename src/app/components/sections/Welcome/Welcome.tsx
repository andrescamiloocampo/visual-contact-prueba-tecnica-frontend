'use client'

import { type ReactElement } from "react";
import styles from "./Welcome.module.css";
import Image from "next/image";
import callcenter from '@assets/callcenter.svg';
import { useRouter } from "next/navigation";

export const Welcome = (): ReactElement => {
  const router = useRouter();
  return (
    <section className={styles.welcome_container}>
      <div className={styles.welcome_image}>
        <Image src={callcenter} alt="Call center welcome" className={styles.main_image}/>
      </div>
      <div className={styles.welcome_content}>
        <h1 className={styles.title}>Welcome to the Contact center</h1>
        <p className={styles.body}>
          Manage all your customer conversations in one place. Here you can view
          and respond to messages from customers who have contacted you through
          direct messages, comments on your posts, or mentions.
        </p>
        <button onClick={()=>{router.push('/dashboard/contact-center')}} className={styles.redirect_btn}>Go to agent list</button>
      </div>
    </section>
  );
};
