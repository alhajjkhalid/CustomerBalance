import React from "react";

const Filter = ({ handleYearChange, handleMonthChange }) => {
  const years = ["2022", "2023"];
  const months = [
    { monthName: "January", month: 1 },
    { monthName: "February", month: 2 },
    { monthName: "March", month: 3 },
    { monthName: "April", month: 4 },
    { monthName: "May", month: 5 },
    { monthName: "June", month: 6 },
    { monthName: "July", month: 7 },
    { monthName: "August", month: 8 },
    { monthName: "September", month: 9 },
    { monthName: "October", month: 10 },
    { monthName: "November", month: 11 },
    { monthName: "December", month: 12 },
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
              <option key={month.monthName} value={index + 1}>
                {month.monthName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
