# Setup do REACT VITE - CONTEXT PROVIDER
Lembre-se de criar a pasta context dentro de src, e os arquivos Context.jsx e Provider.jsx

**Context.jsx** 
```js
  import { createContext } from 'react';

  const Context = createContext({});

  export default Context;
```

**Provider.jsx**
```js
  import Context from './Context';
  import { useState } from "react";

  function Provider({ children }) {
      const [valorGlobal, setValorGlobal] = useState("tipo de dado que você quiser");



      const contextValue = {
        valorGlobal,
        setValorGlobal
      };


      return (
          <Context.Provider value={contextValue}>
              {children}
          </Context.Provider>
      )
  }


  export default Provider;
```


**Exemplo de como ficaria o seu main.jsx**
```js
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Provider from './context/Provider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
)

```

**Exemplo em uma página**
```js
import { useContext } from "react"
import Context from "../context/Context";

export default function Home() {
    const {valorGlobal, setValorGlobal} = useContext(Context);

    return (
        <>
            <h2>Home</h2>
            <p>Valor do estado: {valorGlobal}</p>
        </>
    )
}
```

## SAÍDA
![image](https://gist.github.com/user-attachments/assets/6b698461-6a2e-466b-bfdf-95a1ccd85687)
