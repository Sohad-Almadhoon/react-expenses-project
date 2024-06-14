import { useState } from "react";
import ExpenseFilter from "././ExpenseFilter";
import ExpenseItem from "././ExpenseItem";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ setExpense, items }) => {
  const removeExpenseHandler = (id) => {
    const newArray = items.filter((expense) => expense.id !== id);
    setExpense(newArray);
  };
  const [selectedYear, setSelectedYear] = useState("2024");
  const handleSelectedYear = (e) => {
    setSelectedYear(e.target.value);
  };
  const filteredExpenses = items.filter(
    ({ date }) => date.getFullYear().toString() === selectedYear
  );
  let expenseContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((item) => (
      <ExpenseItem
        onRemoveExpense={removeExpenseHandler}
        {...item}
        key={item.id}
      />
    ));
  }
  return (
    <div>
      <ExpenseFilter
        selected={selectedYear}
        onChangeFilter={handleSelectedYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {expenseContent}
    </div>
  );
};

export default Expenses;
