import classes from "./ChartBar.module.css";

const ChartBar = ({ value, label, maxValue }) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className={classes["chart-bar"]}>
      <div className={classes["chart-bar_inner"]} title={label}>
        <div
          className={classes["chart-bar_fill"]}
          style={{ height: barFillHeight }}></div>
      </div>{" "}
      <div className={classes["chart-bar_label"]}>{label}</div>
    </div>
  );
};

export default ChartBar;
