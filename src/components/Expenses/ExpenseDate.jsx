import classes from "./ExpenseDate.module.css";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
 
  return (
    <div className={classes.date}>
      <span className={classes.day}>{day}</span>
      <span className={classes.month}>{month}</span>
      <span className={classes.year}>{date.getFullYear()}</span>
    </div>
  );
};

export default ExpenseDate;
