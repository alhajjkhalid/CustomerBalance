// Balance.jsx
import React from "react";

const Balance = ({ filteredTransactions, cumulative }) => {
  const monthlyBalance = filteredTransactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
  const cumulativeBalance = cumulative.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  return (
    <div className="w-full max-w-xl mx-auto mt-4 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-2">
        <h2 className="text-gray-800 text-3xl font-semibold">Balances</h2>
      </div>
      <div className="flex justify-around my-4">
        <div>
          <h3 className="text-xl font-semibold">Monthly Balance:</h3>
          <p
            className={`text-lg ${
              monthlyBalance >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {monthlyBalance}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Cumulative Balance:</h3>
          <p
            className={`text-lg ${
              cumulativeBalance >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {cumulativeBalance}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Balance;