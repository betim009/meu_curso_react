"use client"
import Header from "@/components/header"
import { useEffect, useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("Alberto")
  const [quantidade, setQuantidade] = useState(1)

  useEffect(() => {
    // Quando a pagina carregar, vai executar esse bloco aqui.

    alert("Ola")
  }, [])

  function handleChange({ target }: any) {
    const { value } = target;
    setNome(value)
  }

  function handleClick() {
    if (quantidade + 1 >= 10) {
      return null;
    }
    setQuantidade(quantidade + 1)
  }

  return (
    <>
      <Header />
      <h1>Ola {nome}</h1>
      <input
        type="text"
        value={nome}
        onChange={handleChange}
      />
      <p>{quantidade}</p>
      <button
        onClick={handleClick}>
        +
      </button>
    </>
  );
}
