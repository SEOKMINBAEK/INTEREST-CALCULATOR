export interface FormDataShape {
  repayWay: string;
  amount: string | number;
  yearlyInterest: string | number;
  repayTerm: string | number;
}

export interface ScheduleItemShape {
  [key: string]: number;
}

export interface ResultDataShape {
  schedule?: Array<ScheduleItemShape>;
  totalInterest?: number;
  averagePayment?: Array<number>;
  input?: FormDataShape;
}

/**
 *
 * 원리금균등상환
 *
 * PMT = P*r*(1+r)^N / (1+r)^N-1
 *
 * PMT - 균등 원리금
 * P - 대출 원금
 * r - 월 이자율 (yearlyInterest / 12)
 * n - 지불 횟수 (repayTerm / 12)
 */
export const equalPrincipalAndInterestRepayment = ({
  repayWay,
  amount,
  yearlyInterest,
  repayTerm,
}: FormDataShape) => {
  const P = +amount;
  const r = +yearlyInterest / 12 / 100;
  const n = +repayTerm * 12;

  const PMT = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  // monthly payment object
  const schedule: Array<ScheduleItemShape> = [];

  let balance = P;

  let totalInterest = 0;
  const averagePayment = [Math.round(PMT)];

  for (let i = 1; i <= n; i++) {
    const monthInterest = balance * r;
    const monthAmount = PMT - monthInterest;

    balance -= monthAmount;
    totalInterest += monthInterest;

    schedule.push({
      month: i,
      monthAmount: Math.round(monthAmount),
      monthInterest: Math.round(monthInterest),
      totalPayment: Math.round(PMT),
      balance: Math.round(balance),
    });
  }

  return {
    schedule,
    totalInterest: Math.round(totalInterest),
    averagePayment,
    input: { repayWay, amount, yearlyInterest, repayTerm },
  };
};

/**
 * 원금균등상환
 *
 * P - 대출 원금
 * r - 월 이자율 (yearlyInterest / 12)
 * n - 지불 횟수 (repayTerm / 12)
 */
export const equalPrincipalRepayment = ({
  repayWay,
  amount,
  yearlyInterest,
  repayTerm,
}: FormDataShape) => {
  const P = +amount;
  const r = +yearlyInterest / 12 / 100;
  const n = +repayTerm * 12;
  const monthAmount = P / n;

  // monthly payment object
  const schedule: Array<ScheduleItemShape> = [];

  let balance = P;
  let totalInterest = 0;
  const averagePayment = [];

  for (let i = 1; i <= n; i++) {
    const monthInterest = balance * r;
    balance -= monthAmount;
    totalInterest += monthInterest;

    if (i === 1 || i === Math.round(n / 2) || i === n) {
      averagePayment.push(Math.round(monthAmount + monthInterest));
    }

    schedule.push({
      month: i,
      monthAmount: Math.round(monthAmount),
      monthInterest: Math.round(monthInterest),
      totalPayment: Math.round(monthAmount + monthInterest),
      balance: Math.round(balance),
    });
  }

  return {
    schedule,
    totalInterest: Math.round(totalInterest),
    averagePayment,
    input: { repayWay, amount, yearlyInterest, repayTerm },
  };
};

/**
 * 만기일시상환
 *
 * P - 대출 원금
 * r - 월 이자율 (yearlyInterest / 12)
 * n - 지불 횟수 (repayTerm / 12)
 */
export const lumpSumRepayment = ({
  repayWay,
  amount,
  yearlyInterest,
  repayTerm,
}: FormDataShape) => {
  const P = +amount;
  const r = +yearlyInterest / 12 / 100;
  const n = +repayTerm * 12;

  // monthly payment object
  const schedule: Array<ScheduleItemShape> = [];

  let balance = P;
  let totalInterest = 0;
  const averagePayment = [];

  const monthInterest = P * r;

  for (let i = 1; i <= n; i++) {
    const monthAmount = i === n ? P : 0;

    balance -= monthAmount;
    totalInterest += monthInterest;

    if (i === 1 || i === n) {
      averagePayment.push(Math.round(monthAmount + monthInterest));
      console.log(averagePayment);
    }

    schedule.push({
      month: i,
      monthAmount: Math.round(monthAmount),
      monthInterest: Math.round(monthInterest),
      totalPayment: Math.round(monthAmount + monthInterest),
      balance: Math.round(balance),
    });
  }

  return {
    schedule,
    totalInterest: Math.round(totalInterest),
    averagePayment,
    input: { repayWay, amount, yearlyInterest, repayTerm },
  };
};
// limited to less than 1 trillion won(₩)
export const limitTwelveDigit = (value: string) => {
  return /^(?:[0-9]\d{0,11})?$/.test(value + "");
};

// Limited to less than 100%
export const limitTwoDecimal = (value: string) => {
  return /^\d{0,2}(\.\d{0,2})?$/.test(value + "");
};

// Limited to less than 100 years
export const limitTwoDigit = (value: string) => {
  return /^(?:[0-9]\d{0,1})?$/.test(value + "");
};

export const validateInputValue = (value: string, id: string) => {
  let isValid: boolean;

  switch (id) {
    case "amount":
      isValid = limitTwelveDigit(value);
      return isValid;
    case "yearly-interest":
      isValid = limitTwoDecimal(value);
      return isValid;
    default:
      isValid = limitTwoDigit(value);
      return isValid;
  }
};

export const convertAveragePaymentToString = (
  repayWay: string,
  averagePayment: Array<number>
) => {
  switch (repayWay) {
    case "원리금균등상환":
      return ` 매월 ${averagePayment[0]}씩`;
    case "원금균등상환":
      return ` 첫달 ${averagePayment[0]}, 중간달 ${averagePayment[1]}, 마지막달 ${averagePayment[2]}을`;
    default:
      return ` 첫달 ${averagePayment[0]}, 마지막달 ${averagePayment[1]}을`;
  }
};
