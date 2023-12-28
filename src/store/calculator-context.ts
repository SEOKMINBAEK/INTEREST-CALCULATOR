import { createContext } from "react";

import { ResultDataShape } from "../util/util";

interface ContextShape {
  repayWay: string;
  amount: string;
  yearlyInterest: string;
  repayTerm: string;
  inputDataIsValid: boolean;
  resultData: ResultDataShape;

  changeRepayWay: (repayWay: string) => void;
  changeAmount: (amount: string) => void;
  changeYearlyInterest: (yearlyInterest: string) => void;
  changeRepayTerm: (repayTerm: string) => void;

  calculateInterest: () => void;
}

const CalculatorContext = createContext<ContextShape>({
  repayWay: "",
  amount: "",
  yearlyInterest: "",
  repayTerm: "",
  inputDataIsValid: false,
  resultData: {},

  changeRepayWay: () => {},
  changeAmount: () => {},
  changeYearlyInterest: () => {},
  changeRepayTerm: () => {},

  calculateInterest: () => {},
});

export default CalculatorContext;
