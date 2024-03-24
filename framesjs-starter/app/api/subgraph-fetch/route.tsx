// import { NEXT_PUBLIC_URL } from '@/app/config';
import { NextRequest, NextResponse } from 'next/server';
import { vercelURL } from '../../utils';

const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;
const GRAPH_APIY_KEY = "5b737725e2782a0b2eb1b081be562306";
const SUBGRAPH_URL = `https://gateway-arbitrum.network.thegraph.com/api/${GRAPH_APIY_KEY}/subgraphs/id/ECtdoov16DUmk5qbhFx4PVVN7vidiNDwzFNsui6FoHEo`; // Replace with your actual API key

console.log(SUBGRAPH_URL, "SUBGRAPH_URL")

export async function POST(req: NextRequest): Promise<Response> {
    
  let contractAddress = req.nextUrl.searchParams.get('contractAddress');

  if (!contractAddress) {
    throw new Error('Missing search params');
  }

  console.log(contractAddress, 'contractAddress');

  const query = `
    query BasicAPI {
      collection(
        id: "${contractAddress}"
        block: { number_gte: 10 }
        subgraphError: allow
      ) {
        buyerCount
        creatorRevenueETH
        cumulativeTradeVolumeETH
        marketplaceRevenueETH
        id
        name
        nftStandard
        royaltyFee
        sellerCount
        symbol
        totalRevenueETH
        totalSupply
        tradeCount
        trades(orderDirection: asc, orderBy: timestamp, first: 10) {
            priceETH
            timestamp
          }
        }
    }
  `;

  const response = await fetch(SUBGRAPH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data from subgraph');
  }

  const data = await response.json();

  // Process and potentially format the data from 'data.data.collection' as needed
  // for your specific application logic (e.g., generate HTML or JSON response)

  return new NextResponse(
    JSON.stringify(data) // Assuming you want to return the entire collection data
  );
}

export const dynamic = 'force-dynamic';
