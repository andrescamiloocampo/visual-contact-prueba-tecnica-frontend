import { ClientModel } from "./Client.model";

export interface AgentModel{
    id: number | string;
    status: string;
    name: string;
    waittime: string;
    clients?: ClientModel[];
}