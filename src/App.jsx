// App.jsx
import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Filter from "./components/Filter";
import transactions from "../src/assets/data";
import Dashboard from "./components/Dashboard";
import Balance from "./components/Balance";
import TransactionChart from "./components/TransactionChart";

import "./App.css";

function App() {
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("1");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [cumulative, setcumulative] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const filtered = transactions.filter((transaction) => {
      const transactionVar = transaction.timestamp.split("-");

      return transactionVar[0] === year && transactionVar[1] === month;
    });
    setFilteredTransactions(filtered);

    const cumulativeFilter = transactions.filter((transaction) => {
      const transactionVar = transaction.timestamp.split("-");

      return (
        parseInt(transactionVar[0]) < parseInt(year) ||
        (parseInt(transactionVar[0]) === parseInt(year) &&
          parseInt(transactionVar[1]) <= parseInt(month))
      );
    });

    setcumulative(cumulativeFilter);
    setLoading(false);
  }, [year, month]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-dark-blue text-white text-center py-6 shadow-md mb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold ">
          Transaction History
        </h1>
      </div>
      <div>
        <Filter
          handleYearChange={handleYearChange}
          handleMonthChange={handleMonthChange}
          month={month}
          year={year}
        />
        <Dashboard transactions={filteredTransactions} />
        <Balance
          filteredTransactions={filteredTransactions}
          cumulative={cumulative}
        />
      </div>
      <div>
        {filteredTransactions.length > 0 ? (
          <TransactionChart transactions={filteredTransactions} />
        ) : null}
      </div>
    </>
  );
}

export default App;
