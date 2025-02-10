import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="count-box">{count}</div> 
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
