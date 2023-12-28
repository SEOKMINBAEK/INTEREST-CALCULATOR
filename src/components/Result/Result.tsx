import { useContext } from "react";

import ResultTable from "./ResultTable";
import CalculatorContext from "../../store/calculator-context";
import {
  convertAveragePaymentToString,
  convertKoreanUnit,
} from "../../util/util";

import classes from "./Result.module.css";

const Result = () => {
  const calcCtx = useContext(CalculatorContext);

  const { resultData } = calcCtx;

  const { schedule, totalInterest, averagePayment, input } = resultData;

  if (!(schedule && totalInterest && averagePayment && input)) {
    return <p></p>;
  }

  return (
    <div className={classes.result}>
      <div className={classes.wrapper}>
        <h2>계산 결과</h2>
        <p>
          <span className={classes.point}>
            {convertKoreanUnit(input.amount)}
          </span>
          을 <span className={classes.point}>{input.repayTerm}년</span> 동안
          <br />
          <span className={classes.point}>{input.repayWay}</span>으로 대출을
          받았을때 <br />
          <span className={classes.point}>{input.yearlyInterest}%</span>기준
          <span className={classes.point}>
            {convertAveragePaymentToString(input.repayWay, averagePayment)}
          </span>
          갚아야 합니다.
        </p>
      </div>

      <ResultTable schedule={schedule} repayTerm={+input.repayTerm} />

      <p className={classes.total}>
        총 이자액 {convertKoreanUnit(totalInterest)}
      </p>
    </div>
  );
};

export default Result;
