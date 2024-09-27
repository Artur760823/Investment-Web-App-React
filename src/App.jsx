import React, { useState } from 'react';
import Header from "./components/Header";
import UserInputsContainer from "./components/UserInputsContainer";
import ResultTable from "./components/ResultTable";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration > 0;

  function changeInvestmentData(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      };
    })
  }


  return (
    <>
      <Header />
      <UserInputsContainer ochangeUserData={changeInvestmentData} userInput={userInput} />
      {inputIsValid ? <ResultTable userData={userInput} /> : <p className='center'>Duration should be greater than 0</p>}
    </>
  )
}

export default App
