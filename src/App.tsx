import { useState } from "react";
import Header from "./Layouts/Header";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";

function App() {
  const [repayWay, setRepayWay] = useState("원리금균등상환");
  const [amount, setAmount] = useState(1000000);
  const [yearlyInterest, setYearlyInterest] = useState(4);
  const [repayTerm, setRepayTerm] = useState(5);

  return (
    <div className="App">
      <Header />
      <Form
        repayWay={repayWay}
        amount={amount}
        yearlyInterest={yearlyInterest}
        repayTerm={repayTerm}
      />
      <Result />
    </div>
  );
}

export default App;
