import React from 'react';

export default function DistributorTable() {
    const distributorData = [
        { level: "V1", monthlyDividend: 6500, purchasedProducts: 2, deposit: 39000 },
        { level: "V2", monthlyDividend: 13000, purchasedProducts: 3, deposit: 78000 },
        { level: "V3", monthlyDividend: 26000, purchasedProducts: 5, deposit: 156000 },
        { level: "V4", monthlyDividend: 52000, purchasedProducts: 7, deposit: 312000 },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Distributor</h3>
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg shadow transition-colors duration-200">
                    Apply for Release
                </button>
            </div>
            
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Dividend</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchased Products</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deposit</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {distributorData.map((row, index) => (
                            <tr key={index}>
                                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-900">{row.level}</td>
                                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-900">KSH {row.monthlyDividend.toFixed(4)}</td>
                                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-900">{row.purchasedProducts}</td>
                                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-900">KSH {row.deposit.toFixed(4)}</td>
                                <td className="py-4 px-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow transition-colors duration-200">
                                        Apply
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
