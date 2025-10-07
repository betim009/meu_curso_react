"use client";

import { useState } from "react";

export default function Home() {
  const [tarefas, setTarefas] = useState<string[]>([]); // Guarda todas as tarefas
  const [nomeTarefa, setNomeTarefa] = useState(""); // Guarda o nome de uma tarefa digitada
  const [encontrarTarefa, setEncontrarTarefa] = useState(""); // Guarda o nome de uma tarefa digitada
  const [alterarTarefa, setAlterarTarefa] = useState(""); // Guarda o nome de uma tarefa digitada

  const handleChangeNovaTarefa = ({ target }: any) => {
    // console.log("Valor target: ", target);
    // console.log("Valor target value: ", target.value);
    setNomeTarefa(target.value);
  };

  const handleChangeEncontrarTarefa = ({ target }: any) => {
    // console.log("Valor target: ", target);
    // console.log("Valor target value: ", target.value);
    setEncontrarTarefa(target.value);
  };

  const handleChangeAlterarTarefa = ({ target }: any) => {
    // console.log("Valor target: ", target);
    // console.log("Valor target value: ", target.value);
    setAlterarTarefa(target.value);
  };

  const handleAdicionar = () => {
    setTarefas([...tarefas, nomeTarefa])
    console.log(tarefas)
  };

  const handleAlterar = () => {
    const resultadoFind = tarefas.findIndex((tarefa) => tarefa === encontrarTarefa); // Encontramos a posicao
    tarefas[resultadoFind] = alterarTarefa; // acessamos a lista tarefas pela posicao, e passamos o novo valor

    setTarefas([...tarefas]) // Atualizamos o estado para alterar em tela
  };

  return (
    <>
      <input
        type="text"
        placeholder="nome tarefa"
        onChange={handleChangeNovaTarefa}
      />

      <button onClick={handleAdicionar}>adicionar</button>

      <h2>Lista de Tarefas</h2>
      <ol>
        {tarefas.map(tarefa => (
          <li>{tarefa}</li>
        ))}
      </ol>

      <input
        type="text"
        placeholder="encontrar tarefa"
        onChange={handleChangeEncontrarTarefa}
      />

      <input
        type="text" 
        placeholder="alterar tarefa" 
        onChange={handleChangeAlterarTarefa} 
      />

      <button onClick={handleAlterar}>alterar</button>
    </>
  );
}
