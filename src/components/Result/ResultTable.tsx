import { useState } from "react";
import { ScheduleItemShape, convertKoreanUnit } from "../../util/util";

import classes from "./ResultTable.module.css";

interface PropsShape {
  schedule: Array<ScheduleItemShape>;
  repayTerm: number;
}

const ResultTable = ({ schedule, repayTerm }: PropsShape) => {
  const [moreView, setMoreView] = useState(false);

  const moreViewClickHandler = () => {
    setMoreView((prevState) => !prevState);
  };

  const isPointMonth = (month: number) => {
    return month === 1 || !(month % repayTerm) || month - 1 === schedule.length;
  };

  return (
    <>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr className={classes.show}>
            <th>회차</th>
            <th>이자</th>
            <th>원금</th>
            <th>내야하는 금액</th>
            <th>남은 잔액</th>
          </tr>
        </thead>

        <tbody className={classes.tbody}>
          {schedule.map((data) => {
            return (
              <tr
                key={data.month}
                className={[
                  moreView && classes.show,
                  isPointMonth(data.month) && classes.point,
                ].join(" ")}
              >
                <td>{data.month}</td>
                <td>{convertKoreanUnit(data.monthInterest)}</td>
                <td>{convertKoreanUnit(data.monthAmount)}</td>
                <td>{convertKoreanUnit(data.totalPayment)}</td>
                <td>{convertKoreanUnit(data.balance)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={classes.footer}>
        <i
          onClick={moreViewClickHandler}
          className={`fa-solid fa-angles-${moreView ? "up" : "down"}`}
        ></i>
      </div>
    </>
  );
};

export default ResultTable;
