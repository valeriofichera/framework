import { vercelURL } from "../utils";

const fetchQuery = async (contractAddress: string) => {
  const apiUrl = `${vercelURL()}/subgraph-fetch?contractAddress=${encodeURIComponent(contractAddress)}`;

  console.log(apiUrl, "apiUrl fetchquery");

  try {
    const apiResponse = await fetch(apiUrl, {
      method: 'POST', // Specify the request method as POST
      headers: {
        'Content-Type': 'application/json' // Specify the content type as JSON
      },
      // Optionally, provide a request body if needed
      body: JSON.stringify({ /* your request body object */ })
    });

    if (!apiResponse.ok) {
      throw new Error(`HTTP error! Status: ${apiResponse.status}`);
    }

    const data = await apiResponse.json();
    console.log('Data fetched successfully:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null or handle the error as needed
  }
}

export default fetchQuery;
