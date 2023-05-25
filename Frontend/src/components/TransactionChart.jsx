// TransactionChart.jsx
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

const TransactionChart = ({ transactions }) => {
  // Prepare your data
  let cumulativeBalance = 0;
  const data = transactions.map((transaction, index) => {
    cumulativeBalance += transaction.amount;
    return {
      name: index,
      balance: cumulativeBalance,
    };
  });

  return (
    <div className="w-full max-w-xl mx-auto mt-4 bg-white rounded-lg shadow-md overflow-hidden flex justify-center">
      <BarChart width={400} height={400} data={data}>
        <Bar dataKey="balance" fill="#00005e" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </div>
  );
};

export default TransactionChart;
