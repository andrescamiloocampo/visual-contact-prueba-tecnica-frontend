'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import type { ClientModel } from "@/app/models";

interface ClientsContextProps {
  clients: ClientModel[];
  setClients: (clients: ClientModel[]) => void;
}

const ClientsContext = createContext<ClientsContextProps | undefined>(undefined);

export const ClientsProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useState<ClientModel[]>([]);

  return (
    <ClientsContext.Provider value={{ clients, setClients }}>
      {children}
    </ClientsContext.Provider>
  );
};

export const useClients = (): ClientsContextProps => {
  const context = useContext(ClientsContext);
  if (!context) {
    throw new Error("useClients must be used within a ClientsProvider");
  }
  return context;
};
