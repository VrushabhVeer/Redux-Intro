import { useState } from "react";
import "./App.css";
import { handleDec, handleInc } from "./Redux/Action";
import { store } from "./Redux/Store";

function App() {
  const { counter } = store.getState();
  const { dispatch } = store;
  const [state, setState] = useState(0);

  store.subscribe(() => {
    setState((prev) => prev - 1);
  });

  return (
    <div className="App">
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(handleInc())}>Increment</button>
      <button onClick={() => dispatch(handleDec())}>Decrement</button>
    </div>
  );
}

export default App;
