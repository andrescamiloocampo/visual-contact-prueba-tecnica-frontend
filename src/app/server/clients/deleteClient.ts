export const deleteClient = async (id: string) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/Clients/${id}`,
      {
        method: "DELETE",
        headers,
      }
    );

    if(!response.ok)        
        throw new Error(response.statusText);

    return await response.json();

  } catch (error) {
    throw new Error(`Error: ${error}`);   
  }
};
