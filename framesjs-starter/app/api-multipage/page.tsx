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
  const apiUrl = `http://localhost:3001/subgraph-fetch?contractAddress="${encodeURIComponent(contractAddress)}"`;
  console.log(apiUrl, "apiUrl");

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

    fs.writeFile('queryData.json', JSON.stringify(data, null, 2), (err : any) => {
      if (err) throw err;
      console.log('Data has been saved to queryData.json');
    });
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    console.log(data, "data")




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