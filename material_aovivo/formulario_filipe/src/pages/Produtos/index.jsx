import { useEffect } from "react";
import './produtos.css'
import { Link } from "react-router";

export default function Produtos() {
  useEffect(() => {
    // const getUsuarios = async () => {
    //     const endpoit = "";
    //     const req = await fetch();
    //     const res = await req.json();
    // }
  });

  return (
    <>
        <Link to="/">Usuarios</Link>

      <form className="form-produtos">
        <input type="text" placeholder="Nome do Produto" />
        <input type="number" placeholder="Preco do produto" />
        <select name="" id="">
          <option value="promocao">Promocao</option>
          <option value="normal">Normal</option>
        </select>
        <label htmlFor="">Data Compra: </label>
        <input type="date" name="" id="" />

        <button>Cadastrar</button>
      </form>


      <h2>Listagem dos usuarios</h2>
      <ol>
        <li>
            <p>SSD 250</p>
            <p>190,00</p>
            <p>Promocao</p>
            <button>Editar</button>
            <button>Excluir</button>
        </li>
       
      </ol>
    </>
  );
}
