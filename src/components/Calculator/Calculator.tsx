import React, { useState } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';

export default function Calculator() {
  const [totalAmount, setTotalAmount] = useState<string>('');
  const [taxRate, setTaxRate] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculatePreTaxAmount = () => {
    const total = parseFloat(totalAmount);
    const rate = parseFloat(taxRate);
    
    if (total && rate) {
      const preTax = total / (1 + (rate / 100));
      setResult(preTax);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-center mb-6">
        <CalculatorIcon className="h-8 w-8 text-indigo-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Reverse Sales Tax Calculator</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="total" className="block text-sm font-medium text-gray-700">
            Total Amount (Including Tax)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              id="total"
              value={totalAmount}
              onChange={(e) => setTotalAmount(e.target.value)}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tax" className="block text-sm font-medium text-gray-700">
            Tax Rate
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="tax"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter tax rate"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">%</span>
            </div>
          </div>
        </div>

        <button
          onClick={calculatePreTaxAmount}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Calculate
        </button>

        {result !== null && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-medium text-gray-900">Results</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Pre-tax amount:</p>
              <p className="text-2xl font-bold text-indigo-600">
                ${result.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">Tax amount: ${(parseFloat(totalAmount) - result).toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}