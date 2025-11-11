import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Criar um arquivo que contenha uma funcao(pasta service), para substituir o codigo abaixo.
    const url = "https://dummyjson.com/products";
    fetch(url)
      .then((req) => req.json())
      .then((req) => {
        console.log(req);
        setData(req.products);
      });
  }, []);

  return (
    <>
      {/* Desafio é criar um component para substituir o map abaixo*/}
      {data.map(e => {
        const { title, id, thumbnail, price, description } = e;

        return (
          <div key={id}>
            <h2>{title}</h2>
            <img src={thumbnail} alt="" />
            <p>{description}</p>
            <p>{price}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
