import Select from "../UI/Select";
import Input from "../UI/Input";
import Button from "../UI/Button";

import classes from "./Form.module.css";

import {
  repayWayOptions,
  amountBtnOptions,
  interestBtnOptions,
  termBtnOptions,
} from "../../data/form-options";

interface Props {
  repayWay: string;
  amount: number;
  yearlyInterest: number;
  repayTerm: number;
}

const Form = ({ repayWay, amount, yearlyInterest, repayTerm }: Props) => {
  return (
    <form className={classes.form}>
      <Select title="상환방식" value={repayWay} options={repayWayOptions} />
      <Input
        title="대출금액"
        id="amount"
        unit="원"
        value={amount}
        options={amountBtnOptions}
      />
      <Input
        title="연 이자율"
        id="yearly-interest"
        unit="%"
        value={yearlyInterest}
        options={interestBtnOptions}
      />
      <Input
        title="상환기간"
        id="repayTerm"
        unit="년"
        value={repayTerm}
        options={termBtnOptions}
      />
      <Button />
    </form>
  );
};

export default Form;
