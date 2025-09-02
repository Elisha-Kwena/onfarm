import React, { useState } from 'react';

export default function DepositBox() {
  const predefinedAmounts = [
    1300.00,
    3900.00,
    9750.00,
    20800.00,
    39000.00,
    65000.00,
    117000.00,
  ];

  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const handleRadioChange = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomInputChange = (event) => {
    setCustomAmount(event.target.value);
    setSelectedAmount('');
  };

  const isCustomInputSelected = selectedAmount === '' && customAmount !== '';

  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full ">
        <h2 className="text-2xl font-bold mb-6 text-start text-gray-800">Online Recharge</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {predefinedAmounts.map((amount) => (
            <label
              key={amount}
              className={`
                flex items-center justify-center p-3 rounded-md cursor-pointer transition-all duration-200
                border-2 ${selectedAmount === amount ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:border-teal-400'}
              `}
            >
              <input
                type="radio"
                name="recharge-amount"
                value={amount}
                checked={selectedAmount === amount}
                onChange={() => handleRadioChange(amount)}
                className="hidden"
              />
              <span className="text-sm sm:text-base font-medium text-gray-700">
                {amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </span>
            </label>
          ))}
        </div>

        <div className="mb-6">
          <input
            type="number"
            placeholder="Custom Amount"
            value={customAmount}
            onChange={handleCustomInputChange}
            className={`
              w-full p-3 text-black rounded-md transition-all duration-200
              border-2 focus:outline-none ${isCustomInputSelected ? 'border-green-500 bg-teal-50' : 'border-gray-300 hover:border-teal-400'}
            `}
          />
        </div>

        <button
          className="w-full py-3 px-6 rounded-md text-white font-semibold text-lg
          bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300
          transition-all duration-200"
        >
          Online Recharge
        </button>
      </div>
    </div>
  );
}
