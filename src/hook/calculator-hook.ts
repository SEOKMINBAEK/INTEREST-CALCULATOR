import { useState } from "react";

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
  };
};

export default useCalculator;
