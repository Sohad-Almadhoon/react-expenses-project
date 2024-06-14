import classes from "./Chart.module.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
    console.log(dataPoints)
    const maxPoints = dataPoints.map((dataPoint) => dataPoint.value);
    const maxValue = Math.max(...maxPoints);
  return (
    <div className={classes.chart}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.month}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.month}
        />
      ))}
    </div>
  );
};

export default Chart;
