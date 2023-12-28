interface FormDataShape {
  repayWay: string;
  amount: number;
  yearlyInterest: number;
  repayTerm: number;
}

/**
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
  const P = amount;
  const r = yearlyInterest / 12 / 100;
  const n = repayTerm * 12;

  const PMT = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  // monthly payment object
  const schedule = [];

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
