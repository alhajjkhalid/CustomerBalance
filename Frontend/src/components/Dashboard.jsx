import React from "react";

const Dashboard = ({ transactions }) => {
  return (
    <>
      <div className="w-full max-w-xl mx-auto mt-4 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-dark-blue">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-white uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs text-white uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.length === 0 ? (
                <tr>
                  <td
                    colSpan="2"
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No Transactions Available
                  </td>
                </tr>
              ) : (
                transactions.map((transaction, index) => {
                  return (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-light-pink" : "bg-dark-pink"
                      }
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {transaction.timestamp}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div
                          className={`text-sm ${
                            transaction.amount >= 0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {transaction.amount}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
