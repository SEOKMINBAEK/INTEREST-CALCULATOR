import { useState } from "react";

import {
  ResultDataShape,
  equalPrincipalAndInterestRepayment,
  equalPrincipalRepayment,
  lumpSumRepayment,
} from "../util/util";

const useCalculator = () => {
  const [repayWay, setRepayWay] = useState("원리금균등상환");
  const [amount, setAmount] = useState(1000000);
  const [yearlyInterest, setYearlyInterest] = useState(4);
  const [repayTerm, setRepayTerm] = useState(5);
  const [resultData, setResultData] = useState({});

  const inputDataIsValid = amount && yearlyInterest && repayTerm ? true : false;

  const changeRepayWay = (repayWay: string) => {
    setRepayWay(repayWay);
  };

  const changeAmount = (amount: number) => {
    setAmount(amount);
  };

  const changeYearlyInterest = (yearlyInterest: number) => {
    setYearlyInterest(yearlyInterest);
  };

  const changeRepayTerm = (repayTerm: number) => {
    setRepayTerm(repayTerm);
  };

  const calculateInterest = () => {
    let result: ResultDataShape;
    const paramsObj = {
      repayWay,
      amount,
      yearlyInterest,
      repayTerm,
    };

    switch (repayWay) {
      case "원리금균등상환":
        result = equalPrincipalAndInterestRepayment(paramsObj);
        break;
      case "원금균등상환":
        result = equalPrincipalRepayment(paramsObj);
        break;
      default:
        result = lumpSumRepayment(paramsObj);
    }
    console.log(result);
    setResultData(result);
  };

  return {
    repayWay,
    amount,
    yearlyInterest,
    repayTerm,
    inputDataIsValid,
    resultData,
    changeRepayWay,
    changeAmount,
    changeYearlyInterest,
    changeRepayTerm,
    calculateInterest,
  };
};

export default useCalculator;
