import { useContext } from "react";

import Select from "../UI/Select";
import Input from "../UI/Input";
import Button from "../UI/Button";

import CalculatorContext from "../../store/calculator-context";

import classes from "./Form.module.css";

import {
  repayWayOptions,
  amountBtnOptions,
  interestBtnOptions,
  termBtnOptions,
} from "../../data/form-options";

const Form = () => {
  const calcCtx = useContext(CalculatorContext);

  const {
    repayWay,
    amount,
    yearlyInterest,
    repayTerm,
    inputDataIsValid,
    changeRepayWay,
    changeAmount,
    changeYearlyInterest,
    changeRepayTerm,
  } = calcCtx;

  return (
    <form className={classes.form}>
      <Select
        title="상환방식"
        value={repayWay}
        options={repayWayOptions}
        onChange={changeRepayWay}
      />
      <Input
        title="대출금액"
        id="amount"
        unit="원"
        value={amount}
        options={amountBtnOptions}
        onChange={changeAmount}
      />
      <Input
        title="연 이자율"
        id="yearly-interest"
        unit="%"
        value={yearlyInterest}
        options={interestBtnOptions}
        onChange={changeYearlyInterest}
      />
      <Input
        title="상환기간"
        id="repayTerm"
        unit="년"
        value={repayTerm}
        options={termBtnOptions}
        onChange={changeRepayTerm}
      />
      <Button disabled={inputDataIsValid} />
    </form>
  );
};

export default Form;
