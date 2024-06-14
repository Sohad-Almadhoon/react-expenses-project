import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";

export default function App() {
  const [expenses, setExpense] = useState([]);
  const addExpenseHandler = (expense) => {
    setExpense([...expenses, expense]);
  };
  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} setExpense={setExpense} />
    </div>
  );
}
