interface Trade {
  timestamp: string;
  priceETH: number;
}

const LineChartComponent = ({trades}: { trades: Trade[] }) => {

  console.log(trades, "trades!")

  trades.forEach((trade) => {
    console.log(trade, "trade")
  
  })

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
          style={{ left: `${(index / trades.length) * 100}%`, height: `${trade.priceETH / 50}px`, width: '35px' }}
        >
          <span tw="text-3xl text-teal-300 mb-10">{trade.priceETH}</span>
        </div>
      ))}
    </div>
  </div>
  );
};

export default LineChartComponent;
