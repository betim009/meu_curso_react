# 📚 3 Tipos de `useEffect` no React

O `useEffect` é um Hook usado para **executar efeitos colaterais** (fetch de dados, eventos, timers, etc.) nos componentes.

Existem **três formas principais** de usá-lo:

---

## 🟢 1. `useEffect` com **array vazio** (`[]`)

```jsx
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    console.log('Executa apenas uma vez ao montar o componente');
  }, []);

  return <h1>Olá!</h1>;
}
```

### 📝 Explicação:
- O código dentro do `useEffect` **executa uma única vez**, quando o componente **aparece na tela**.
- É equivalente ao `componentDidMount` em componentes de classe.
- **Exemplo de uso**: Buscar dados da API, configurar eventos iniciais.

---

## 🟡 2. `useEffect` com **dependências** (`[variável]`)

```jsx
import { useState, useEffect } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`Executa sempre que contador muda: ${contador}`);
  }, [contador]);

  return (
    <>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </>
  );
}
```

### 📝 Explicação:
- O `useEffect` **roda toda vez que a variável do array de dependência muda**.
- Serve para reagir a mudanças específicas de estado ou props.
- **Exemplo de uso**: Atualizar a interface quando algo muda, fazer nova busca baseada numa palavra digitada.

---

## 🔴 3. `useEffect` com **função de retorno (limpeza)**

```jsx
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const intervalo = setInterval(() => {
      console.log('Rodando o intervalo...');
    }, 1000);

    return () => {
      console.log('Limpando o intervalo...');
      clearInterval(intervalo);
    };
  }, []);

  return <h1>Verificando intervalos...</h1>;
}
```

### 📝 Explicação:
- O `useEffect` pode retornar uma **função de limpeza**.
- Essa função é executada **antes do componente ser desmontado** ou **antes do próximo efeito** ser executado.
- **Exemplo de uso**: Limpar intervalos, timeouts, event listeners.

---

# 🔥 Resumo Visual

| Tipo | Array? | Return? | Executa quando? | Uso Comum |
|:----:|:------:|:-------:|:---------------:|:---------:|
| 1    | `[]`   | Não     | Só na montagem   | Buscar dados, config inicial |
| 2    | `[x]`  | Não     | Sempre que `x` mudar | Atualizar com base em estado |
| 3    | `[]` ou `[x]` | Sim | Antes da desmontagem ou nova execução | Limpar intervalos, eventos |

---

# 💬 Observação
- **O `return` é sempre usado para "desfazer" efeitos.**  
- Mesmo no `useEffect` com dependências (`[variável]`), você pode ter um `return` para limpar algo anterior antes de rodar de novo.