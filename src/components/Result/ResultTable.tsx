import classes from "./ResultTable.module.css";

const ResultTable = () => {
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
          <tr className={classes.show}>
            <td>1</td>
            <td>1,000원</td>
            <td>1,000원</td>
            <td>1,000원</td>
            <td>1,000원</td>
          </tr>
          <tr className={classes.show}>
            <td>1</td>
            <td>1,000원</td>
            <td>1,000원</td>
            <td>1,000원</td>
            <td>1,000원</td>
          </tr>
          <tr className={classes.show}>
            <td>1</td>
            <td>1,000원</td>
            <td>1,000원</td>
            <td>1,000원</td>
            <td>1,000원</td>
          </tr>
          <tr className={classes.show}>
            <td>1</td>
            <td>1,000원</td>
            <td>1,000원</td>
            <td>1,000원</td>
            <td>1,000원</td>
          </tr>
          <tr className={classes.show}>
            <td>1</td>
            <td>1,000원</td>
            <td>1,000원</td>
            <td>1,000원</td>
            <td>1,000원</td>
          </tr>
        </tbody>
      </table>
      <div className={classes.footer}>
        <i className={`fa-solid fa-angles-down"}`}></i>
      </div>
    </>
  );
};

export default ResultTable;
