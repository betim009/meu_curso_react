# Como usar React Router com Vite + React (JavaScript)

## 🧠 O que é React Router?

React Router é uma biblioteca que permite criar navegação entre **páginas diferentes**
dentro de um app feito com React, **sem recarregar a página inteira**.

Imagine um site com as páginas "Início", "Sobre", "Contato"...
O React Router ajuda a trocar de uma para outra só mudando o conteúdo da tela.

---

## 🤔 Por que usar?

- Para **evitar o recarregamento da página**.
- Para organizar seu projeto com **várias páginas separadas**.
- Para fazer **rotas dinâmicas**, como `produto/123`, `user/alberto`, etc.

---

## ⏱️ Quando usar?

Use o React Router sempre que você quiser que seu app tenha mais de uma "página".

Por exemplo:
- Um site com menu de navegação.
- Um painel com várias telas.
- Um blog com várias postagens.

---

## ⚙️ Instalação

Abra o terminal na pasta do seu projeto e digite:

```
npm install react-router-dom
```

---

## 🧱 Estrutura básica

Aqui está um exemplo simples de como montar as rotas no seu projeto React com Vite.

### 📁 main.jsx

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

> Em vez de `<React.StrictMode>`, usamos `<BrowserRouter>` para ativar as rotas.

---

### 📁 App.jsx

```jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Erro from './pages/Erro';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="*" element={<Erro />} />
    </Routes>
  );
}

export default App;
```

---

### 📁 pages/Home.jsx

```jsx
function Home() {
  return <h1>Página Inicial</h1>;
}

export default Home;
```

---

### 📁 pages/Sobre.jsx

```jsx
function Sobre() {
  return <h1>Sobre nós</h1>;
}

export default Sobre;
```

---

### 📁 pages/Erro.jsx

```jsx
function Erro() {
  return <h1>Erro 404 - Página não encontrada</h1>;
}

export default Erro;
```

---

### 🔗 Navegando entre as páginas

Para navegar, usamos o componente `<Link>` ao invés de `<a>`.

```jsx
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <Link to="/">Início</Link> |
      <Link to="/sobre">Sobre</Link>
    </nav>
  );
}

export default Menu;
```

---

## ⚠️ Dicas e Cuidados

- Sempre use `<Link>` no lugar de `<a>` pra evitar recarregar a página.
- O caminho `/` deve ser declarado por último se usar `exact` (React Router v5).
- Em rotas dinâmicas, use `:id`, por exemplo: `/produto/:id`.

---

Se quiser, posso continuar com um exemplo de rota dinâmica (como `/user/:id`) ou como proteger rotas com autenticação. Me avisa aí! 🚀
