import { useEffect, useState } from 'react'
import './App.css'

interface Data {
  id?: string;
  amount?: number;
  thumb?: string;
  name?: string;
  price?: number;
  total_price?: number;
}

function App() {
  const [data, setData] = useState<Data>({})
  const [btn, setBtn] = useState({
    plus: false,
    minus: true
  })

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const req = await fetch('https://681504bd225ff1af162adcf7.mockapi.io/shoes/1')
        const res = await req.json();
        setData(res);
      } catch (error) {
        console.log('error:', error)
      }
    }

    fetchAPI();
  }, [])

  useEffect(() => {
    if (!data.amount || !data.price) return;

    // Atualiza o total_price
    const totalPrice: number = data.price * data.amount;
    setData({ ...data, total_price: totalPrice });

    // Atualiza o controle dos botões
    setBtn({
      plus: data.amount >= 9,
      minus: data.amount <= 1
    });

  }, [data.amount, data.price]);

  const handleCart = (count: number) => {
    if (data.amount !== undefined) {
      setData({
        ...data,
        amount: data.amount + count //
      });
    }
  }

  return (
    <>
      {data.id ? (
        <div>
          <img src={data.thumb} alt="" />
          <h5>{data.name}</h5>

          <div>
            <button onClick={() => handleCart(-1)} disabled={btn.minus}>-</button>
            <p>{data.amount}</p>
            <button onClick={() => handleCart(1)} disabled={btn.plus}>+</button>
          </div>

          <div>
            <p>{data.total_price ?? data.price}</p>
            <button>Checkout</button>
          </div>
        </div>
      ) : 'Carregando...'}
    </>
  )
}

export default App
