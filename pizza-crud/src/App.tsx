import './App.css'
import pizza from '/pizza.png'
import { useState } from 'react'
import { mockPizza } from './mockPizza'


function App() {
  const [data, setData] = useState(mockPizza);
  const [amount, setAmount] = useState(1);

  const handleCalc = (operation: number) => {
    // Calcula o novo valor de `amount`
    const newAmount = amount + operation;

    // Atualiza o estado de `amount`
    setAmount(newAmount);

    // Atualiza o preço com base no novo valor de `amount`
    const newPrice = mockPizza.price * newAmount; // Use o preço base da pizza
    setData({
      ...data, // Mantém os outros dados da pizza
      price: newPrice, // Atualiza apenas o preço
    });
  };

  return (
    <>
      <div>
        <img src={pizza} alt='img not found' />

        <div>
          <h2>{data.name}</h2>
          <p>{data.details}</p>
          <p>{data.piece} pedaços</p>
          <p>x{amount} | R$ {data.price}</p>
          <p>Sobre: {data.details}</p>

          <button onClick={() => handleCalc(1)}>+</button>
          <button
            onClick={() => handleCalc(-1)}
            disabled={amount === 1 ? true : false}
          >
            -
          </button>
          <button>Finalizar Compra</button>
        </div>
      </div>
    </>
  )
}

export default App
