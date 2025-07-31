import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [valor, setValor] = useState(0);

  // useEffect(() => {

  // }, [])
  useEffect(() => {
    async function getApi() {
      const url =
        "https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=USD&to=BRL&amount=10";

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3be01a29a9msh1147fa36f6934f8p13aa60jsn802d2dd1cc9f",
          "x-rapidapi-host":
            "currency-conversion-and-exchange-rates.p.rapidapi.com",
        },
      };

      const req = await fetch(url, options);
      const res = await req.json();
      console.log(res);
    }

    getApi();
  }, []);

  async function handleClick() {
    const url =
      `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=USD&to=BRL&amount=${valor}`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3be01a29a9msh1147fa36f6934f8p13aa60jsn802d2dd1cc9f",
        "x-rapidapi-host":
          "currency-conversion-and-exchange-rates.p.rapidapi.com",
      },
    };

    const req = await fetch(url, options);
    const res = await req.json();

    setValor(res.result)
  }

  return (
    <>
      <input value={valor} onChange={({ target }) => setValor(target.value)} />
      <p>${valor}</p>

      <button onClick={handleClick}>Converter</button>
    </>
  );
}

export default App;
