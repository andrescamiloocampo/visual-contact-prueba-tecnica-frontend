import { ClientModel } from './../models/Client.model';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AgentModel {
  id: number | string;
  status: string;
  name: string;
  waittime: string;
  clients: ClientModel[];
}

interface AgentsStoreModel {
  agents: AgentModel[];
  setAgents: (agents: AgentModel[]) => void;
  addAgent: (agent: AgentModel) => void;
  updateAgent: (id: number | string, updatedAgent: Partial<AgentModel>) => void;
  removeAgent: (id: number | string) => void;
  addClientToAgent: (agentId: number | string, client: ClientModel) => void;
}

export const useAgentsStore = create<AgentsStoreModel>()(
  persist(
    (set) => ({
      agents: [],
      setAgents: (agents) => set({ agents }),
      addAgent: (agent) => set((state) => ({ agents: [...state.agents, agent] })),
      updateAgent: (id, updatedAgent) => set((state) => ({
        agents: state.agents.map((agent) =>
          agent.id === id ? { ...agent, ...updatedAgent } : agent
        ),
      })),
      removeAgent: (id) => set((state) => ({
        agents: state.agents.filter((agent) => agent.id !== id),
      })),
      addClientToAgent: (agentId, client) => set((state) => ({
        agents: state.agents.map((agent) =>
          agent.id === agentId ? { ...agent, clients: [...agent.clients, client] } : agent
        ),
      })),
    }),
    {
      name: 'agents-storage', 
      storage: createJSONStorage(() => localStorage)
    }
  )
);