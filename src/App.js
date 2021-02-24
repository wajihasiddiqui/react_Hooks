import { useState } from "react";

function App() {
  const [number, setCount] = useState(0);

  function addNumber() {
    setCount(number + 1);
  }

  return (
    <>
      <h1>React Hooks</h1>
      <h6>{number}</h6>
      <button onClick={addNumber}>CLICK ME</button>
    </>
  );
}

export default App;
