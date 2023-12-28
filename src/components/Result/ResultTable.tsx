import { ScheduleItemShape } from "../../util/util";

import classes from "./ResultTable.module.css";

interface PropsShape {
  schedule: Array<ScheduleItemShape>;
  repayTerm: number;
}

const ResultTable = ({ schedule, repayTerm }: PropsShape) => {
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
              <tr key={data.month} className={classes.show}>
                <td>{data.month}</td>
                <td>{data.monthInterest}</td>
                <td>{data.monthAmount}</td>
                <td>{data.totalPayment}</td>
                <td>{data.balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={classes.footer}>
        <i className={`fa-solid fa-angles-down"}`}></i>
      </div>
    </>
  );
};

export default ResultTable;
