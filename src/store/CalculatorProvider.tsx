import { ReactNode } from "react";

import useCalculator from "../hook/calculator-hook";
import CalculatorContext from "./calculator-context";

interface PropsShape {
  children: ReactNode;
}

const CalculatorProvider = ({ children }: PropsShape) => {
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
    calculateInterest,
  } = useCalculator();

  const calculatorContext = {
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

  return (
    <CalculatorContext.Provider value={calculatorContext}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
