"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): React.FC {
  const [contractAddress, setContractAddress] = useState<string | null>(null);
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch data based on search param when component mounts
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const contractAddressParam = urlParams.get('contractAddress');

    if (contractAddressParam) {
      setContractAddress(contractAddressParam);
      fetchData(contractAddressParam);
    }
  }, []);

  // Function to fetch data from internal API endpoint (client-side only)
  const fetchData = async (address: string) => {
    try {
      // Use `fetch` directly for client-side fetching
      const response = await fetch(`/api/internal-endpoint?contractAddress=${address}`, {
        method: 'GET', // Explicitly set GET method
        mode: 'cors', // Enable CORS for cross-origin requests
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching data:', error);
    }
  };

  return (
    <main>
      {/* Display data or error message conditionally */}
      {data && !error && <div>Fetched data: {JSON.stringify(data)}</div>}
      {error && <div className="error">Error: {error}</div>}
    </main>
  );
}

// Server-side API route (if needed for other purposes)
// export const config = {
//   matcher: '/api/internal-endpoint',
// };
