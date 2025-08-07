import { useEffect, useState } from "react";
import "./App.css";
import { urlClimaRJ, urlClimaSP, urlEUR, urlUSD } from "./endpoints";

function App() {
  const [usd, setUsd] = useState("");
  const [eur, setEur] = useState("");
  const [spMax, setSpMax] = useState("");
  const [rjMax, setRjMax] = useState("");
  const [spMin, setSpMin] = useState("");
  const [rjMin, setRjMin] = useState("");

  useEffect(() => {
    async function getAPIS() {
      const auth = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3be01a29a9msh1147fa36f6934f8p13aa60jsn802d2dd1cc9f",
          "x-rapidapi-host":
            "currency-conversion-and-exchange-rates.p.rapidapi.com",
        },
      };

      const reqUSD = await fetch(urlUSD, auth);
      const reqEUR = await fetch(urlEUR, auth);

      const reqClimaSp = await fetch(urlClimaSP);
      const reqClimaRj = await fetch(urlClimaRJ);

      const resUSD = await reqUSD.json();
      const resEUR = await reqEUR.json();

      const resClimaSp = await reqClimaSp.json();
      const resClimaRj = await reqClimaRj.json();

      const dataUSD = resUSD["end_date"]; // 2025-01-02
      const dataEUR = resEUR["end_date"]; // 2025-01-02

      // console.log(resUSD.rates[dataUSD].BRL)

      setUsd(resUSD.rates[dataUSD].BRL);
      setEur(resEUR.rates[dataEUR].BRL);
      setSpMax(resClimaSp.daily.temperature_2m_max[0]);
      setRjMax(resClimaRj.daily.temperature_2m_max[0]);
      setSpMin(resClimaSp.daily.temperature_2m_min[0]);
      setRjMin(resClimaRj.daily.temperature_2m_min[0]);
    }

    getAPIS();
  }, []);

  return (
    <>
      <p>Valor do DOLAR: {usd.toFixed(2)}</p>
      <p>Valor do EURO: {eur.toFixed(2)}</p>

      <p>Maxima de SP: {spMax} - Min: {spMin}</p>
      <p>Maxima de RJ: {rjMax} - Min: {rjMin}</p>
    </>
  );
}

export default App;
