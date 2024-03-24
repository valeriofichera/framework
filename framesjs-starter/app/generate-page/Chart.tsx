import React from 'react';

const data = [
  {
    nftId: '#12',
    eth: 400,
    time: 1,
  },
  {
    nftId: '#123',
    eth: 1398,
    time: 2,
  },
  {
    nftId: '#1234',
    eth: 9800,
    time: 3,
  },
  {
    nftId: '#1',
    eth: 3908,
    time: 4,
  },
  {
    nftId: '#1223',
    eth: 4800,
    time: 5,
  },
  {
    nftId: '#333',
    eth: 3800,
    time: 6,
  },
  {
    nftId: '#111',
    eth: 7,
    time: 7,
  },
];

const LineChartComponent = () => {
  return (
    <div tw="flex flex-col w-full h-full justify-center items-center bg-gray-900 p-4 rounded-lg shadow">
      <h1 tw="text-xl font-bold text-teal-300 mb-4">Recent NFT Transactions</h1>
      <div tw="flex w-full h-3/4 relative border border-neonPink">
        {/* Y-axis label */}
        <div tw="absolute left-0 top-0 flex flex-col items-end">
          <span tw="mr-2 mt-20 text-teal-300 text-lg">ETH Spent</span>
        </div>
        {/* X-axis label */}
        <div tw="absolute bottom-0 left-0 w-full h-full flex justify-between px-2">
          {data.map((entry, index) => (
            <span key={index} tw="text-xs text-gray-500">
              {entry.nftId}
            </span>
          ))}
        </div>
        {/* Bars */}
        {data.map((entry, index) => (
          <div
            key={index}
            tw="absolute bottom-0 bg-violet-500 h-full flex flex-col items-center justify-end"
            style={{ left: `${(index / data.length) * 100}%`, height: `${entry.eth / 50}px`, width: '35px' }}
          >
            <span tw="text-3xl text-teal-300 mb-10">{entry.eth}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineChartComponent;
