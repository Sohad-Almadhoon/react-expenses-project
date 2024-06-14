import { useRef } from "react";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = ({ onAddExpense }) => {
  const titleRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({
      title: titleRef.current.value,
      amount: amountRef.current.value,
      date: new Date(dateRef.current.value),
      id: Math.floor(Math.random() * 140),
    });
    titleRef.current.value = "";
    amountRef.current.value = "";
    dateRef.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.inputs}>
        {" "}
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input ref={titleRef} type="text" id="title" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="amount">Amount</label>
          <input ref={amountRef} type="number" id="amount" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <input ref={dateRef} type="date" id="date" required />
        </div>
      </div>
      <div className={classes.actions}>
        {" "}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
