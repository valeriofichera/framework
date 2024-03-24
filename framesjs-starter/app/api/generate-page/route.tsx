import Link from "next/link";
import { currentURL, vercelURL } from "../../utils";
import { createDebugUrl } from "../../debug";
import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
import { NextRequest, NextResponse } from 'next/server';

import { Button, createFrames } from "frames.js/next";


import fetchQuery from '../../utils/fetchQuery'

import LineChartComponent from './Chart'






const frames = createFrames({
    basePath: "/generate-page",
  });

const handleRequest = frames(async (ctx) => {

  const { contractAddress, page } = ctx.searchParams;

  console.log(contractAddress, "contractAddress")
  console.log(page, "page")

  if(contractAddress === undefined || !page) throw new Error("Missing search params")

  
  const data = await fetchQuery(contractAddress)

  switch (page) {
    case 'chart':
      return {
        image: (
            <div tw="flex">

            
            <LineChartComponent trades={data.data.collection.trades} />

           
            {/* <span tw="bg-blue-500 text-white p-4 rounded-lg">
                Chart here, supposedly.
            </span> */}
            </div>
        ),
        buttons: [
          <Button key="previousFrameButton" action="post" target={`https://framework-u5cy.vercel.app/api/generate-main?contractAddress=${contractAddress}`}>
          Statistics
        </Button>,

          <Button key="nextFrameButton" action="link" target={`https://etherscan.io/address/${contractAddress}`}>
            Etherscan
          </Button>,

          ///generate-page?page=chart&contractAddress=${contractAddress}
        ]
      };
    case 'price':
      return {
        image: (
          <span>
            Name : {data.data.collection.name}
          </span>
        ),
        buttons: [
          <Button key="nextFrameButton2" action="post" target={`/generate-page?page=price&contractAddress=${contractAddress}`}>
            Different Action
          </Button>,
        ]
      };
    default:
      // Handle other pages or provide a default content
      return {
        image: (
          <span>
            Name : {data.data.collection.name}
          </span>
        ),
        buttons: [
          <Button key="nextFrameButton3" action="post" target={`/generate-page?page=price&contractAddress=${contractAddress}`}>
            Different Action
          </Button>,
        ]
      };
  }
});

export const GET = handleRequest;
export const POST = handleRequest;