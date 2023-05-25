import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Filter from "./components/Filter";
import transactions from "../src/assets/data";
import Dashboard from "./components/Dashboard";
import Balance from "./components/Balance";

import "./App.css";

function App() {
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("1");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [cumulative, setcumulative] = useState([]);

  useEffect(() => {
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
  }, [year, month]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };
  return (
    <>
      <div>
        <Filter
          handleYearChange={handleYearChange}
          handleMonthChange={handleMonthChange}
        />
        <Dashboard transactions={filteredTransactions} />
        <Balance
          filteredTransactions={filteredTransactions}
          cumulative={cumulative}
        />
      </div>
    </>
  );
}

export default App;
