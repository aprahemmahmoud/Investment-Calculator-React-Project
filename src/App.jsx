import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [value,setValue] = useState();
  
  
  return (
    <>
      <Header />
      <UserInput />
      <Results />
    </>
  );
}

export default App;
