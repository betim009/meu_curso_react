import { useState } from "react";
import "./App.css";
import Anuncios from "./components/Anuncios";
import Usuarios from "./components/Usuarios";

function App() {
  const [display, setDisplay] = useState("Anuncios");

  return (
    <>
      <div>
        <button onClick={() => setDisplay("Anuncios")}>Config. Anuncios</button>
        <button onClick={() => setDisplay("Usuarios")}>Config. Usuarios</button>
      </div>

      {display === "Anuncios" ? <Anuncios /> : null}
      {display === "Usuarios" ? <Usuarios /> : null}
    </>
  );
}

export default App;
