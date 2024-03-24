import Link from "next/link";
import { currentURL, vercelURL } from "../utils";
import { createDebugUrl } from "../debug";
import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";

const fs = require('fs');





export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {

  // let contractAddress = req.nextUrl.searchParams.get('contractAddress');

  // if (!contractAddress) {
  //   throw new Error('Missing search params');
  // }

  // console.log(contractAddress, 'contractAddress');

  // Fetch data from the API endpoint
  const contractAddress = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"; // Default contract address
  let apiUrl;
  if (process.env.NODE_ENV === 'development') {
    // If in development mode (localhost), use http
    apiUrl = `http://${vercelURL()}/subgraph-fetch?contractAddress=${encodeURIComponent(contractAddress)}`;
  } else {
    // Otherwise, use https
    apiUrl = `https://${vercelURL()}/subgraph-fetch?contractAddress=${encodeURIComponent(contractAddress)}`;
  }

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

    

    try {
      const apiResponse = await fetch(`http://localhost:3001/api-multipage/saveFile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    
      if (apiResponse.ok) {
        console.log('Data has been saved successfully');
      } else {
        // If the response is not okay, attempt to parse the response body as JSON
        let errorMessage = '';
        try {
          const errorData = await apiResponse.json();
          errorMessage = errorData.message || 'Unknown error occurred';
        } catch (parseError) {
          errorMessage = `Error parsing server response: ${parseError}`;
        }
        console.error('Failed to save data:', errorMessage);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    




  return {
    title: "New api example",
    description: "This is a new api example",
    other: {
      ...(await fetchMetadata(
        new URL(
          "/api-multipage/frames",
          vercelURL() || "http://localhost:3001"
        )
      )),
    },
  };
}

export default async function Home() {
  const url = currentURL("/api-multipage");

  return (
    <div>
      Multi-page example
      <Link href={createDebugUrl(url)} className="underline">
        Debug
      </Link>
    </div>
  );
}