import { useState } from "react";

import {
  ResultDataShape,
  equalPrincipalAndInterestRepayment,
  equalPrincipalRepayment,
  lumpSumRepayment,
} from "../util/util";

const useCalculator = () => {
  const [repayWay, setRepayWay] = useState("원리금균등상환");
  const [amount, setAmount] = useState("");
  const [yearlyInterest, setYearlyInterest] = useState("");
  const [repayTerm, setRepayTerm] = useState("");
  const [resultData, setResultData] = useState({});

  const inputDataIsValid = +amount > 0 && +yearlyInterest > 0 && +repayTerm > 0;

  const changeRepayWay = (repayWay: string) => {
    setRepayWay(repayWay);
  };

  const changeAmount = (amount: string) => {
    setAmount(amount);
  };

  const changeYearlyInterest = (yearlyInterest: string) => {
    setYearlyInterest(yearlyInterest);
  };

  const changeRepayTerm = (repayTerm: string) => {
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
