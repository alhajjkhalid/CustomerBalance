import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Filter from "./components/Filter";
import transactions from "../src/assets/data";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("1");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    const filtered = transactions.filter((transaction) => {
      const transactionYear = transaction.timestamp.split("-");
      const transactionMonth = transaction.timestamp.split("-");
      return transactionYear === year && transactionMonth === month;
    });
    setFilteredTransactions(filtered);
  }, [year, month]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };
  return (
    <>
      <div data-testid="hi">
        <Filter
          handleYearChange={handleYearChange}
          handleMonthChange={handleMonthChange}
        />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
