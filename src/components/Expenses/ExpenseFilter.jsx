import classes from "./ExpenseFilter.module.css";

const ExpenseFilter = ({ selected, onChangeFilter }) => {
  
  return (
    <div className={classes.filter}>
      <select onChange={onChangeFilter} value={selected}>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
