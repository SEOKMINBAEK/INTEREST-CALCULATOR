import ResultTable from "./ResultTable";

import classes from "./Result.module.css";

const Result = () => {
  return (
    <div className={classes.result}>
      <div className={classes.wrapper}>
        <h2>계산 결과</h2>
        <p>
          <span className={classes.point}>1,000원</span>을{" "}
          <span className={classes.point}>10년</span> 동안
          <br />
          <span className={classes.point}>원리금균등상환</span>으로 대출을
          받았을때 <br />
          <span className={classes.point}>5%</span>기준
          <span className={classes.point}>1,000원</span>
          갚아야 합니다.
        </p>
      </div>

      <ResultTable />

      <p className={classes.total}>총 이자액 1,000원</p>
    </div>
  );
};

export default Result;
