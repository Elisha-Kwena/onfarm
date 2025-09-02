export default function Accounts() {
  const tableData = [
    { no: 1, name: 'John Doe', payment: 'M-Pesa', accountNumber: '0742464275' },
    { no: 2, name: 'Jane Smith', payment: 'Bank Transfer', accountNumber: '1234567890' },
    { no: 3, name: 'Peter Jones', payment: 'PayPal', accountNumber: '9876543210' },
  ];

  return (
    <div className="shadow-lg rounded-md p-4 bg-white">
      <h1 className="text-black text-lg text-start">Account List</h1>

      <div className="w-full mt-4">
        {/* Mobile View: Card-based layout */}
        <div className="sm:hidden space-y-4">
          {tableData.map((row, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">No.</span>
                <span className="text-sm font-bold text-gray-900">{row.no}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Name</span>
                <span className="text-sm text-gray-900">{row.name}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Payment</span>
                <span className="text-sm text-gray-900">{row.payment}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-500">Account Number</span>
                <span className="text-sm text-gray-900">{row.accountNumber}</span>
              </div>
              <div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-md text-center cursor-pointer transition duration-150 ease-in-out">
                  Delete
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
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Number</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-150 ease-in-out">
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900">{row.no}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900">{row.name}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900">{row.payment}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900">{row.accountNumber}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-right text-sm font-medium">
                    <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white p-2 rounded-md text-center cursor-pointer transition duration-150 ease-in-out">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
