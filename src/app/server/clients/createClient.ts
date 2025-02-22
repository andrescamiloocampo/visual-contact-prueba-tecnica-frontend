import type { ClientModel } from "@/app/models";

export const CreateClient = async(body:ClientModel):Promise<ClientModel> => {
    const headers = new Headers();
    const raw = JSON.stringify(body);
    headers.append('Content-Type', 'application/json'); 

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Clients`,{
            method: 'POST',
            headers,
            body: raw,
        });

        if(!response.ok)
            throw new Error(response.statusText);
        return await response.json();
    } catch (error) {
        throw new Error(`Error: ${error}`);   
    }
}