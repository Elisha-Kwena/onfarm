import React from 'react';

export default function SubordinateCards() {
    const subordinatesData = [
        {
            level: 1,
            commissionRate: 8,
            totalNumber: 0,
            purchasers: 0,
            todaysCommission: 0,
        },
        {
            level: 2,
            commissionRate: 4,
            totalNumber: 0,
            purchasers: 0,
            todaysCommission: 0,
        },
        {
            level: 3,
            commissionRate: 2,
            totalNumber: 0,
            purchasers: 0,
            todaysCommission: 0,
        },
        {
            level: 4,
            commissionRate: 1,
            totalNumber: 0,
            purchasers: 0,
            todaysCommission: 0,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {subordinatesData.map((data, index) => (
                <div key={index} className="flex flex-col items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-green-500">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.48 7.48 0 0112 15a7.48 7.48 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-sm font-semibold text-gray-500 uppercase">
                            Level {data.level} Subordinates
                        </div>
                    </div>
                    <div className="flex flex-col text-sm text-gray-700">
                        <span className="mb-1">Commission Rate: {data.commissionRate}%</span>
                        <span className="mb-1">Total Number: {data.totalNumber}</span>
                        <span className="mb-1">Number of Purchasers: {data.purchasers}</span>
                        <span>Today's Commission: KSH{data.todaysCommission.toFixed(4)}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
