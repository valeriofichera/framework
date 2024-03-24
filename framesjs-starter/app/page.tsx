import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import { fetchMetadata } from 'frames.js/next';

import { vercelURL } from './utils';
import { currentURL } from './utils';

import Link from 'next/link';

import { createDebugUrl } from './debug';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Dynamic NFT frame generator",
    description: "This endpoint can generate dynamic frames endpoints that fetches data from subgraph",
    other: {
      ...(await fetchMetadata(
        new URL(
          "/",
          vercelURL() || "http://localhost:3001"
        )
      )),
    },
  };
}

export default async function Home() {
  const url = currentURL("/");

  return (
    <div>
      New api example.{" "}
      <Link href={createDebugUrl(url)} className="underline">
        Debug
      </Link>
    </div>
  );
}