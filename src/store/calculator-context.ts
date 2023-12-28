import { createContext } from "react";

interface ContextShape {
  repayWay: string;
  amount: number;
  yearlyInterest: number;
  repayTerm: number;
  inputDataIsValid: boolean;

  changeRepayWay: (repayWay: string) => void;
  changeAmount: (amount: number) => void;
  changeYearlyInterest: (yearlyInterest: number) => void;
  changeRepayTerm: (repayTerm: number) => void;
}

const CalculatorContext = createContext<ContextShape>({
  repayWay: "",
  amount: 0,
  yearlyInterest: 0,
  repayTerm: 0,
  inputDataIsValid: false,

  changeRepayWay: () => {},
  changeAmount: () => {},
  changeYearlyInterest: () => {},
  changeRepayTerm: () => {},
});

export default CalculatorContext;
