import React from "react";


const Filter = ({ handleYearChange, handleMonthChange }) => {
  const years = ["2022", "2023"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <div className="flex justify-around my-4">
        <div className="flex flex-col">
          <label htmlFor="year" className="mb-2">
            Year
          </label>
          <select
            onChange={handleYearChange}
            id="year"
            className="py-2 px-4 rounded-lg shadow-md"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="month" className="mb-2">
            Month
          </label>
          <select
            onChange={handleMonthChange}
            id="month"
            className="py-2 px-4 rounded-lg shadow-md"
          >
            {months.map((month, index) => (
              <option key={month} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
