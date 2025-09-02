import React, { useState } from 'react';

// New component for the Recharge Record table
export default function DepositTable(){
  // Sample data for the table
  const [tableData] = useState([
    {
      id: "S1750699135491",
      amount: 1300.00,
      status: "Success",
      time: "2025-06-23 20:18:55",
    },
    {
      id: "S1750699135492",
      amount: 3900.00,
      status: "Success",
      time: "2025-06-23 20:20:10",
    },
    {
      id: "S1750699135493",
      amount: 9750.00,
      status: "Pending",
      time: "2025-06-23 20:22:30",
    },
  ]);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Deposit Record</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.id}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  KSH {row.amount.toFixed(2)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${row.status === 'Success' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                    `}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
