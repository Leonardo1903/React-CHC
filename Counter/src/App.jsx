import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  // let counter = 5;
  const addValue = () => {
    console.log("Value is increased", counter);
    setCounter(counter + 1);
  };
  const removeValue = () => {
    console.log("Value is decreased");
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter value : {counter}</h1>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <button onClick={removeValue}>Decrease value</button>
    </>
  );
}

export default App;
