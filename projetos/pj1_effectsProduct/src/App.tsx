import { useEffect, useState } from 'react'
import './App.css'

interface Data {
  id?: string;
  amount?: number;
  thumb?: string;
  name?: string;
}

function App() {
  const [data, setData] = useState<Data>({})

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const req = await fetch('https://681504bd225ff1af162adcf7.mockapi.io/shoes/1')
        const res = await req.json();
        setData(res);
        console.log(res)
      } catch (error) {
        console.log('error:', error)
      }
    }

    fetchAPI();
  }, [])



  return (
    <>
     {data.id ? (
      <div>
        <img src={data.thumb} alt="" />
        <h5>{data.name}</h5>

        <div>
          <button>+</button>
          <p>{data.amount}</p>
          <button>+</button>
        </div>
      </div>
     ) : 'nao'}
    </>
  )
}

export default App
