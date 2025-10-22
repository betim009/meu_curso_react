import { Routes, Route } from "react-router";
import "./App.css";
import Usuario from "./pages/Usuario";
import Produtos from "./pages/Produtos";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Usuario />}/>
        <Route path="/produtos" element={<Produtos />}/>
      </Routes>
    </>
  );
}

export default App;
