"use client";

import styles from "./ConnectForm.module.css";
import { useState, type ReactElement } from "react";
import { CreateClient } from "@/app/server/clients/createClient";
import { ClientModel } from "@/app/models";
import { getClients } from "@/app/server/clients/getClients";

interface ConnectFormProps {
  clients: ClientModel[];
  setClients: (clients: ClientModel[]) => void;
}

export const ConnectForm = ({ setClients }: ConnectFormProps): ReactElement => { 

  const [data, setData] = useState<ClientModel>({
    name: "",
    id: 0,
  });

  const handleForm = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await CreateClient(data);
    if (response) {
      const updatedClients = await getClients();
      setClients(updatedClients ?? []);
    }
  };

  return (
    <form className={styles.register} onSubmit={handleForm}>
      <h3>Enter in the list </h3>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setData({ ...data, name: e.target.value }) }}
        className={styles.input}
      />
      <button className={styles.btn_create}>Connect user</button>
    </form>
  );
};
