import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = ({ expenses }) => {
  const dataPoints = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "June", value: 0 },
    { month: "July", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];
  expenses.forEach((expense) => {
      const month = expense.date.getMonth();
      dataPoints[month].value += +expense.amount;
  });
    return <Chart dataPoints={dataPoints} />;
};

export default ExpensesChart;
