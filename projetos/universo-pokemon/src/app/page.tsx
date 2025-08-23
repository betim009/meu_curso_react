"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const req = await fetch("https://68a9db5ab115e67576ec4851.mockapi.io/pokemons")
        const res = await req.json()

        console.log(res);
        setPokemons(res)
      } catch (error) {

      }
    }

    fetchApi()
  }, [])

  return (
    <>
      {pokemons.map(e => (
        <div key={e.nome}>
          <h2>{e.nome}</h2>
          <img src={e.urlImg} alt="" />
          <div dangerouslySetInnerHTML={{ __html: e.sprite }} />
        </div>
      ))}
    </>
  );
}
