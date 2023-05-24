import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Filter from "./components/Filter";
import transactions from "../src/assets/data";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    const filtered = transactions.filter((transaction) => {
      const transactionVar = transaction.timestamp.split("-");

      return transactionVar[0] === year && transactionVar[1] === month;
    });
    setFilteredTransactions(filtered);
  }, [year, month]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    console.log(event.target.value);
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
      </div>
    </>
  );
}

export default App;
