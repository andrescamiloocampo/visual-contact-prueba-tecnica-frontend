import type { AgentModel } from "@/app/models";

export const getAgents = async (filter:string):Promise<AgentModel[] | null> => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Agents?filter=${filter}`,{
            method:'GET',            
            headers
        });

        if(!response.ok)
            throw new Error('Network response was not ok');

        return await response.json();        

    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
};