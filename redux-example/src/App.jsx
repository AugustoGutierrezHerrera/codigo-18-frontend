// import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setValue } from "./app/slices/counterSlice";
import Header from "./components/Header";

function App() {
  // const [count, setCount] = useState(0)
  // const counter = useSelector(function (state) {
  //   return state.counter.value;
  // });

  //Usando arrow functions
  const counter = useSelector((state) => state.counter.value);

  //para poder usar funcion creada en un slice debemos importar a usedispatch (hook)
  //useDispatch: Permite realizar la ejecucion de una funcion:
  // Nota: siempre

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(setValue(0))}>Resetear Valor</button>

        <button onClick={() => dispatch(decrement())}>decrement</button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
