import { useState } from "react"

function App() {
  const [moeda, setMoeda] = useState("")
  const [resultado, setResultado] = useState("")
  const [trocar, setTrocar] = useState("reais")


  const handleClick = () => {
    if (trocar === "reais") {
      setResultado((moeda / 6).toFixed(2))
    } else {
      setResultado((moeda * 6).toFixed(2))
    }
  }

  const handleClickTrocar = () => {
    if (trocar === "reais") {
      setTrocar("dollar")
    } else {
      setTrocar("reais")
    }
  }

  const handleClickLimpar = () => {
    setMoeda("")
    setResultado(0)
    setTrocar("reais")
  }


  return (
    <>
      <div>
        <input 
          type="number" 
          placeholder={trocar === "reais" ? "Digite o valor em R$" : "Digite o valor em $"}
          value={moeda}
          onChange={({target}) => setMoeda(target.value)}
        />
        <div>
          <p>{trocar === "reais" ? "Valor em $" : "Valor em R$"}{resultado}</p>
        </div>
        <button onClick={handleClickTrocar}>TROCAR</button>
        <button onClick={handleClick}>CONVERTER</button>
        <button onClick={handleClickLimpar}>LIMPAR</button>
      </div>
    </>
  )
}

export default App