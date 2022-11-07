import { useState } from 'react';
import faceeswap from './assets/faceeswap.svg';
import './App.css';
import AutocompleteInput from './Components/UI/AutocompleteInput';

function App() {
  const [count, setCount] = useState(0);

  const changeHandler = (res) => console.log(res);

  return (
    <div className="App">
      <img src={faceeswap} className="logo" alt="faceeswap logo" />
      <div className="card">
        <AutocompleteInput onChange={changeHandler} />
        <AutocompleteInput onChange={changeHandler} />
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
