import { useState } from "react";

import {
  equalPrincipalAndInterestRepayment,
  equalPrincipalRepayment,
  lumpSumRepayment,
} from "../util/util";

const useCalculator = () => {
  const [repayWay, setRepayWay] = useState("원리금균등상환");
  const [amount, setAmount] = useState(1000000);
  const [yearlyInterest, setYearlyInterest] = useState(4);
  const [repayTerm, setRepayTerm] = useState(5);

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
    let result;
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
      case "만기일시상환":
        result = lumpSumRepayment(paramsObj);
    }

    console.log(result);
  };

  return {
    repayWay,
    amount,
    yearlyInterest,
    repayTerm,
    inputDataIsValid,
    changeRepayWay,
    changeAmount,
    changeYearlyInterest,
    changeRepayTerm,
    calculateInterest,
  };
};

export default useCalculator;
