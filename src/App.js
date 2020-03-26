import React, { useState } from 'react';
import Header from './Header';

function App() {

  const [counter, setCounter] = useState(0);
  //Retorna um array com duas posições [valor, função de atualização]

  //Incrementando um valor
  function increment() {
    setCounter(counter + 1);
  }

  //Decrementando um valor
  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default App;
