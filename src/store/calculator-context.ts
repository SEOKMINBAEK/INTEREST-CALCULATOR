import { createContext } from "react";

import { ResultDataShape } from "../util/util";

interface ContextShape {
  repayWay: string;
  amount: number;
  yearlyInterest: number;
  repayTerm: number;
  inputDataIsValid: boolean;
  resultData: ResultDataShape;

  changeRepayWay: (repayWay: string) => void;
  changeAmount: (amount: number) => void;
  changeYearlyInterest: (yearlyInterest: number) => void;
  changeRepayTerm: (repayTerm: number) => void;

  calculateInterest: () => void;
}

const CalculatorContext = createContext<ContextShape>({
  repayWay: "",
  amount: 0,
  yearlyInterest: 0,
  repayTerm: 0,
  inputDataIsValid: false,
  resultData: {},

  changeRepayWay: () => {},
  changeAmount: () => {},
  changeYearlyInterest: () => {},
  changeRepayTerm: () => {},

  calculateInterest: () => {},
});

export default CalculatorContext;
