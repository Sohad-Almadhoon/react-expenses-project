import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = ({ id, title, amount, date, onRemoveExpense }) => {
  const remove = () => {
    onRemoveExpense(id);
  }
  return (
    <Card>
      <div className={classes.item}>
       <ExpenseDate date={date}/>
        <span className={classes.title}>{title}</span>
        <span className={classes.amount}> {amount}</span>
        <button onClick={remove}>🗑️</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
