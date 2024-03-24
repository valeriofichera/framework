
// const data = [
//   {
//     nftId: '#12',
//     eth: 400,
//     time: 1,
//   },
//   {
//     nftId: '#123',
//     eth: 1398,
//     time: 2,
//   },
//   {
//     nftId: '#1234',
//     eth: 9800,
//     time: 3,
//   },
//   {
//     nftId: '#1',
//     eth: 3908,
//     time: 4,
//   },
//   {
//     nftId: '#1223',
//     eth: 4800,
//     time: 5,
//   },
//   {
//     nftId: '#333',
//     eth: 3800,
//     time: 6,
//   },
//   {
//     nftId: '#111',
//     eth: 7,
//     time: 7,
//   },
// ];



interface Trade {
  timestamp: string;
  priceETH: string;
}

const LineChartComponent = ( {trades}: { trades: Trade[] }) => {

  // Find the maximum priceETH value among all trades
  const maxPrice = Math.max(...trades.map((trade) => parseFloat(trade.priceETH)));

  return (
    <div tw="flex flex-col w-full h-full justify-center items-center bg-gray-900 p-4 rounded-lg shadow">
      <h1 tw="text-3xl font-bold text-teal-300 mb-4">Recent NFT Transactions</h1>
      <div tw="flex w-full h-3/4 relative border border-neonPink">
        {/* Y-axis label */}
        <div tw="absolute left-0 top-0 flex flex-col items-end">
          <span tw="mr-2 mt-20 text-teal-300 text-lg">ETH Spent</span>
        </div>
        {/* X-axis label */}
        <div tw="absolute bottom-0 left-0 w-full h-full flex justify-between px-2">
          {trades.map((trade, index) => (
            <span key={index} tw="text-xs text-gray-500">
              {trade.timestamp}
            </span>
          ))}
        </div>
        {/* Bars */}
        {trades.map((trade, index) => (
          <div
            key={index}
            tw="absolute bottom-0 bg-violet-500 h-full flex flex-col items-center justify-end"
            style={{
              left: `${(index / trades.length) * 100}%`,
              height: `${((parseFloat(trade.priceETH) / maxPrice) * 100).toString()}%`,
              width: '35px',
            }}
          >
            <span tw="text-3xl text-teal-300 mb-10">{trade.priceETH}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineChartComponent;
