import { useEffect } from "react";
import './usuario.css'
import { Link } from "react-router";

export default function Usuario() {
  useEffect(() => {
    // const getUsuarios = async () => {
    //     const endpoit = "";
    //     const req = await fetch();
    //     const res = await req.json();
    // }
  });

  return (
    <>
        <Link to="/produtos">Produtos</Link>

      <form className="form-usuario">
        <input type="text" placeholder="Nome do usuario" />
        <input type="email" placeholder="Email do usuario" />
        <input type="tel" placeholder="Telefone do usuario" />
        <input type="password" placeholder="Senha do usuario" />
        <select name="" id="">
          <option value="masculino">Masculino</option>
          <option value="masculino">Femunino</option>
        </select>
        <label htmlFor="">Data Nascimento: </label>
        <input type="date" name="" id="" />

        <button>Cadastrar</button>
      </form>


      <h2>Listagem dos usuarios</h2>
      <ol>
        <li>
            <p>Filipe Teixeira</p>
            <p>teixeira@email.com</p>
            <p>(11) 9999-8322</p>
            <p>Masculino</p>
            <p>13/05/1998</p>
            <button>Editar</button>
            <button>Excluir</button>
        </li>
       
      </ol>
    </>
  );
}
