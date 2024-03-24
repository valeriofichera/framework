import { vercelURL } from "../utils";



const fetchQuery = async (contractAddress : string) => {

  

    const apiUrl = `${vercelURL()}/subgraph-fetch?contractAddress=${encodeURIComponent(contractAddress)}`;


    console.log(apiUrl, "apiUrl fetchquery")
  let data;
  try {
    const apiResponse = await fetch(apiUrl, {
      method: 'POST', // Specify the request method as POST
      headers: {
        'Content-Type': 'application/json' // Specify the content type as JSON
      },
      // Optionally, provide a request body if needed
      body: JSON.stringify({ /* your request body object */ })
    });

    data = await apiResponse.json();

    } catch (error) {
      console.error('Error fetching data:', error);
    }

    return data;


}

export default fetchQuery;