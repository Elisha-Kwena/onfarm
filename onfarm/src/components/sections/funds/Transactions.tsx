import React from 'react';

export default function Transactions() {
  const tableData = [
    {
      serial: "F431564653454",
      name: "John Doe",
      payment: "M-Pesa",
      account: "072354673456",
      amount: 146,
      tax: 14.6,
      time: "10:30 AM"
    },
    {
      serial: "G543216543210",
      name: "Jane Smith",
      payment: "Bank Transfer",
      account: "1234567890",
      amount: 250,
      tax: 25,
      time: "11:45 AM"
    },
    {
      serial: "H678901234567",
      name: "Peter Jones",
      payment: "PayPal",
      account: "9876543210",
      amount: 75,
      tax: 7.5,
      time: "02:15 PM"
    },
  ];

  return (
    <div className="shadow-lg rounded-md p-4 bg-white">
      <h1 className="text-black text-lg text-start">Transaction List</h1>
      <div className="w-full mt-4">

        {/* Mobile View: Card-based layout */}
        <div className="sm:hidden space-y-4">
          {tableData.map((row, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Serial</span>
                <span className="text-sm font-bold text-gray-900">{row.serial}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Name</span>
                <span className="text-sm text-gray-900">{row.name}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Payment</span>
                <span className="text-sm text-gray-900">{row.payment}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Account</span>
                <span className="text-sm text-gray-900">{row.account}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Amount</span>
                <span className="text-sm text-gray-900">Ksh {row.amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Tax</span>
                <span className="text-sm text-gray-900">Ksh {row.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Amount Received</span>
                <span className="text-sm text-gray-900">Ksh {(row.amount - row.tax).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Time</span>
                <span className="text-sm text-gray-900">{row.time}</span>
              </div>
              <div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-md text-center cursor-pointer transition duration-150 ease-in-out">
                  Success
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Standard Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full bg-white divide-y divide-gray-200 rounded-md">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tax</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Received</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-150 ease-in-out">
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900">{row.serial}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900">{row.name}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900">{row.payment}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900">{row.account}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900">Ksh {row.amount.toFixed(2)}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900">Ksh {row.tax.toFixed(2)}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900">Ksh {(row.amount - row.tax).toFixed(2)}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-left text-sm font-medium">
                    <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md text-center cursor-pointer transition duration-150 ease-in-out">
                      Success
                    </button>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
