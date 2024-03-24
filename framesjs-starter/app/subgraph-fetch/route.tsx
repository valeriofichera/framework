// import { NEXT_PUBLIC_URL } from '@/app/config';
import { NextRequest, NextResponse } from 'next/server';

const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;
const GRAPH_APIY_KEY = "5b737725e2782a0b2eb1b081be562306";
const SUBGRAPH_URL = `https://gateway-arbitrum.network.thegraph.com/api/${GRAPH_APIY_KEY}/subgraphs/id/GSjXo5Vd1EPaMGRJBYe6HoBKv7WSq3miCrRRZJbTCHkT`; // Replace with your actual API key

let user = {
  custody_address: null,
  username: null,
  display_name: null,
  pfp_url: null,
};

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
        trades(first: 10, orderBy: priceETH, orderDirection: desc) {
          id
          priceETH
          seller
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
