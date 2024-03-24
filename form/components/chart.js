// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

// const LineChartComponent = () => {
//   return (
//     <div className="flex justify-center items-center bg-gray-50 p-4 rounded-lg shadow">
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="nftId" />
//           <YAxis />
// <Tooltip />
// <Legend />
// <Line type="monotone" dataKey="eth" stroke="#8884d8" activeDot={{ r: 8 }} />
// </LineChart>
// </ResponsiveContainer>
// </div>
// );
// };

// export default LineChartComponent;