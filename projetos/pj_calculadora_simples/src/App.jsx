import { useState } from 'react'
import './App.css'
import BtnNumber from './components/btnNumber'
import BtnOperador from './components/btnOperador'

function App() {
  const [display, setDisplay] = useState(0)
  const [resultado, setResultado] = useState([])

  const handleClick = ({ target }) => {
    if (display === 0) {
      return setDisplay(target.value)
    }
    setDisplay(`${display + target.value}`)
  }

  const handleClickOperador = ({ target }) => {
    const numeros = [...resultado, display]
    setResultado(numeros)
    setDisplay(0)

    if (target.value === "+") {
      if (numeros.length >= 2) {
        const somarNumeros = numeros.reduce((acc, el) => parseInt(acc) + parseInt(el), 0)
        console.log(somarNumeros)
      }
    }
  }

  return (
    <>
      <div>
        {display}
      </div>

      <div className='numeros'>
        <BtnNumber title={0} click={handleClick} />
        <BtnNumber title={1} click={handleClick} />
        <BtnNumber title={2} click={handleClick} />
        <BtnNumber title={3} click={handleClick} />
        <BtnNumber title={4} click={handleClick} />
        <BtnNumber title={5} click={handleClick} />
        <BtnNumber title={6} click={handleClick} />
        <BtnNumber title={7} click={handleClick} />
        <BtnNumber title={8} click={handleClick} />
        <BtnNumber title={9} click={handleClick} />
        <BtnOperador title={"+"} click={handleClickOperador} />
        <BtnOperador title={"-"} click={handleClickOperador} />
      </div>
    </>
  )
}

export default App
