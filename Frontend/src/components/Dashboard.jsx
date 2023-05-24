import React from "react";

const Dashboard = ({ transactions }) => {
  return (
    <>
      <div className="w-full max-w-xl mx-auto mt-4 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-2">
          <h2 className="text-gray-800 text-3xl font-semibold">Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="">

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
