# Hooks Customizados no React

## O que são Hooks Customizados?

Hooks customizados são funções JavaScript que começam com o prefixo "use" e permitem extrair lógica de componentes React para unidades reutilizáveis. Eles ajudam a organizar código, evitar duplicação e compartilhar funcionalidades entre diferentes componentes.

## Por que usar Hooks Customizados?

- **Reutilização de lógica**: Evita duplicação de código entre componentes
- **Separação de responsabilidades**: Mantém componentes mais limpos e focados na renderização
- **Composição**: Permite combinar múltiplos hooks para criar funcionalidades complexas
- **Testabilidade**: Facilita testar lógicas de negócio isoladamente

## Exemplo Prático: useHook

Vamos analisar um hook customizado que gerencia um contador:

```typescript
import { useState } from "react";

export function useHook(init = 1) {
    const [count, setCount] = useState(init);

    const handlePlus = () => {
        setCount(count + 1)
        console.log(count)
    }

    const handleMinus = () => {
        setCount(count - 1)
        console.log(count)
    }

    return {
        handlePlus,
        handleMinus,
        count
    }
}
```

### Estrutura do Hook

1. **Nome**: Começa com "use" (convenção do React)
2. **Parâmetros**: Aceita um valor inicial (`init = 1`)
3. **Estado interno**: Usa `useState` para gerenciar o contador
4. **Funções**: Define métodos para incrementar e decrementar o contador
5. **Retorno**: Expõe o estado e as funções necessárias

## Como usar o Hook Customizado

O hook pode ser usado em diferentes componentes conforme necessário:

### Uso no Componente App

```jsx
function App() {
  const { count, handleMinus, handlePlus } = useHook();

  return (
    <>
      <h2>Hello World</h2>
      <Button config={{
        title: "+",
        handle: handlePlus
      }} />
      {count}
      <Button config={{
        title: "-",
        handle: handleMinus
      }} />

      <Buttons />
    </>
  )
}
```

### Uso no Componente Buttons

```jsx
export default function Buttons() {
    const {count, handleMinus, handlePlus} = useHook(4);

    return (
        <>
            <button onClick={handlePlus}>+</button>
            {count}
            <button onClick={handleMinus}>-</button>
        </>
    )
}
```

## Vantagens do Uso Neste Exemplo

1. **Reusabilidade**: O mesmo hook é usado em dois componentes diferentes
2. **Customização**: O valor inicial pode ser ajustado (padrão é 1, mas em `Buttons` usamos 4)
3. **Encapsulamento**: A lógica de estado e manipulação está separada da renderização
4. **Consistência**: Mesma interface para manipular o contador em diferentes lugares

## Boas Práticas para Hooks Customizados

1. **Sempre comece com "use"**: Isso é uma convenção e permite que o React verifique as regras dos hooks
2. **Mantenha-os simples**: Cada hook deve ter uma responsabilidade bem definida
3. **Documente o retorno**: Deixe claro o que seu hook retorna para facilitar o uso
4. **Parâmetros opcionais**: Use valores padrão quando possível para facilitar o uso
5. **Considere efeitos colaterais**: Use `useEffect` para lidar com side effects dentro do hook

## Casos de Uso Comuns para Hooks Customizados

- Gerenciamento de formulários (`useForm`)
- Chamadas à API (`useFetch`, `useApi`)
- Animações (`useAnimation`)
- Gerenciamento de viewport e media queries (`useViewport`, `useMediaQuery`)
- Persistência de dados (`useLocalStorage`, `useSessionStorage`)
- Temporizadores e intervalos (`useInterval`, `useTimeout`)

## Conclusão

Hooks customizados são uma ferramenta poderosa para melhorar a organização, reutilização e manutenção do código em aplicações React. No exemplo analisado, o `useHook` demonstra como podemos extrair lógica de estado e comportamento para uma unidade isolada e reutilizável.

Este padrão permite manter os componentes mais enxutos e focados na renderização, enquanto a lógica de negócio fica encapsulada em hooks especializados, facilitando testes e manutenção.