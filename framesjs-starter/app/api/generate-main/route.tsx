import Link from "next/link";
import { currentURL, vercelURL } from "../../utils";
import { createDebugUrl } from "../../debug";
import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
import { NextRequest, NextResponse } from 'next/server';

import { Button } from "frames.js/next";
import { frames } from "../../examples/new-api/frames/frames";

import fetchQuery from '../../utils/fetchQuery'





const handleRequest = frames(async (ctx) => {

  const { contractAddress } = ctx.searchParams;

  console.log(contractAddress, "contractAddress")

  if(contractAddress === undefined) throw new Error("Missing search params")


  const data = await fetchQuery(contractAddress)



    // Perform checks to ensure all properties exist
    const name = data.data.collection && data.data.collection.name;
    const symbol = data.data.collection && data.data.collection.symbol;
    const totalSupply = data.data.collection && data.data.collection.totalSupply;
    const cumulativeTradeVolumeETH = data.data.collection && data.data.collection.cumulativeTradeVolumeETH;
  
    // Check if any of the properties are missing and throw an error
    if (!name || !symbol || !totalSupply || cumulativeTradeVolumeETH === undefined) {
      throw new Error('One or more required properties are missing in data.data.collection');
    }
  




  return {
    image: (
      <div tw="flex w-[285px] h-[152px] bg-teal-800 p-3">
<span tw="bg-gray-900 text-white p-4 rounded-lg">
    <div tw="flex flex-col">
      <div tw="flex bg-blue-700 text-white p-2 rounded-md justify-between items-center">
        <div tw="flex w-1/2">
          <span tw="font-bold">Name:</span>
        </div>
        <div tw="flex w-1/2 justify-end">
          <span tw="ml-2">{data.data.collection.name}</span>
        </div>
      </div>
      <div tw="flex bg-indigo-700 text-white p-2 rounded-md mt-2 justify-between items-center">
        <div tw="flex w-1/2">
          <span tw="font-bold">Symbol:</span>
        </div>
        <div tw="flex w-1/2 justify-end">
          <span tw="ml-2">{data.data.collection.symbol}</span>
        </div>
      </div>
      <div tw="flex bg-green-700 text-white p-2 rounded-md mt-2 justify-between items-center">
        <div tw="flex w-1/2">
          <span tw="font-bold">Total Supply:</span>
        </div>
        <div tw="flex w-1/2 justify-end">
          <span tw="ml-2">{data.data.collection.totalSupply}</span>
        </div>
      </div>
      <div tw="flex bg-yellow-700 text-white p-2 rounded-md mt-2 justify-between items-center">
        <div tw="flex w-1/2">
          <span tw="font-bold">Cumulative Trade Volume (ETH):</span>
        </div>
        <div tw="flex w-1/2 justify-end">
          <span>{parseInt(data.data.collection.cumulativeTradeVolumeETH)}</span>
        </div>
      </div>
    </div>
  </span>
  </div>


    ),
    buttons: [
      <Button action="post" key="nextFrameButton" target={`https://framework-u5cy.vercel.app/api/generate-page?page=chart&contractAddress=${contractAddress}`}>
        Latest transactions
      </Button>,
    ]
  };
});

export const GET = handleRequest;
export const POST = handleRequest;