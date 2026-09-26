import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [value,setValue] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
  });

  function valueChange(objName, objValue) {
    setValue((prevValue) => ({...prevValue,[objName]: objValue}));
  }
  
  return (
    <>
      <Header/>

      <UserInput values={value} enevtHandler={valueChange} />

      <Results values={value} />
    </>
  );
}

export default App;
