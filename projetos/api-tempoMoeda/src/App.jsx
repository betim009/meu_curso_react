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
  const [searchInput, setSearchInput] = useState("");
  const [searchClima, setSearchClima] = useState("");

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

  function handleChange({ target }) {
    setSearchInput(target.value);
  }

  async function handleClick() {
    const getLocalizacao = `https://nominatim.openstreetmap.org/search?q=${searchInput}&format=json&limit=1`;
    const req = await fetch(getLocalizacao);
    const res = await req.json();

    console.log(res);

    const resultado = res[0];
    const { lat, lon } = resultado;

    const getClima = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
    const reqClima = await fetch(getClima);
    const resClima = await reqClima.json();

    const { daily } = resClima;
    setSearchClima(daily);

    console.log(resClima);
  }

  return (
    <>
      {usd && eur ? (
        <p>
          Dolar: {Number(usd).toFixed(2)} - Euro:{Number(eur).toFixed(2)}
        </p>
      ) : (
        <p>Loading</p>
      )}

      {spMax && rjMin ? (
        <div>
          <p>
            Maxima de SP: {spMax} - Min: {spMin}
          </p>
          <p>
            Maxima de RJ: {rjMax} - Min: {rjMin}
          </p>
        </div>
      ) : (
        <p>Loading</p>
      )}

      <input type="text" onChange={handleChange} value={searchInput} />
      <button onClick={handleClick}>BUSCAR</button>
      {searchClima ? (
        <p>
          Maxima de:{searchClima.temperature_2m_max[0]} e minima de:{" "}
          {searchClima.temperature_2m_min[0]}
        </p>
      ) : null}
    </>
  );
}

export default App;
