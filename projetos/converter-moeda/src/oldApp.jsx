import { useState } from "react"

function App() {
  const [reais, setReais] = useState(0)
  const [dollar, setDollar] = useState(0)
  const [trocar, setTrocar] = useState("reais")


  const handleClick = () => {
    setDollar(reais / 6)
  }


  return (
    <>
      <div>
        <input 
          type="number" 
          placeholder="Digite o valor em R$" 
          onChange={({target}) => setReais(target.value)}
        />
        <div>
          <p>Valor em ${dollar}</p>
        </div>
        <button>TROCAR</button>
        <button onClick={handleClick}>CONVERTER</button>
      </div>
    </>
  )
}