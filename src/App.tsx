import CalculatorProvider from "./store/CalculatorProvider";
import Header from "./Layouts/Header";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";

function App() {
  return (
    <CalculatorProvider>
      <Header />
      <Form />
      <Result />
    </CalculatorProvider>
  );
}

export default App;
