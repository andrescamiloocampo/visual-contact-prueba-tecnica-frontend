import { ClientModel } from "@/app/models";

export const getClients = async():Promise<ClientModel[]> => {
    const headers = new Headers();
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Clients`,{
            method: 'GET',
            headers            
        });

        if(!response.ok)
            throw new Error(response.statusText);
        return await response.json();
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
};