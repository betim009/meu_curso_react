# 🧾 Material Didático: Carrinho de Compras com React + useEffect + useState

Este material explica passo a passo o funcionamento do código abaixo, onde criamos uma tela de carrinho de compras que:

* Busca dados de um produto na API.
* Permite aumentar e diminuir a quantidade.
* Calcula o valor total.
* Habilita e desabilita os botões conforme a quantidade.

---

# 🧾 Material Didático: Carrinho de Compras com React + useEffect + useState

---

## 🎯 Enunciado da Tarefa / Projeto

### 📝 Nome da Atividade

**Carrinho de Compras com React + Hooks**

### 🎯 Objetivo

Desenvolver uma aplicação simples de carrinho de compras utilizando React e os hooks `useState` e `useEffect`. O projeto simula a compra de um produto e permite ao usuário alterar a quantidade de itens, calcular o valor total e controlar os botões de adição e subtração.

### 📋 Requisitos

1. **Buscar os dados do produto** de uma API (mock ou real) utilizando `fetch` dentro do `useEffect`.

      ***Endpoint: `https://681504bd225ff1af162adcf7.mockapi.io/shoes/1`***

2. Armazenar os dados em um estado do tipo objeto com as propriedades:

   * `id`, `name`, `price`, `thumb`, `amount`, `total_price`
3. Exibir a imagem e o nome do produto.
4. Criar dois botões para:

   * Aumentar a quantidade (`+`)
   * Diminuir a quantidade (`-`)
5. Controlar os botões com base nas seguintes regras:

   * Desabilitar o botão `-` quando a quantidade for 1 ou menos
   * Desabilitar o botão `+` quando a quantidade for 9 ou mais
6. Calcular e exibir o valor total (preço unitário × quantidade)
7. Mostrar um botão de "Checkout" abaixo do total

---

##




## 🔹 Estrutura base

```tsx
import { useEffect, useState } from 'react'
import './App.css'
```

* Importa o React e os hooks `useEffect` e `useState`.
* Importa o arquivo de estilo `App.css`.

---

## 🔹 Interface do produto

```tsx
interface Data {
  id?: string;
  amount?: number;
  thumb?: string;
  name?: string;
  price?: number;
  total_price?: number;
}
```

* Define os tipos esperados do produto usando TypeScript.
* `?` significa que cada campo é opcional.

---

## 🔹 Componente principal

```tsx
function App() {
```

* Início do componente principal da aplicação.

---

## 🔹 Estados iniciais

```tsx
  const [data, setData] = useState<Data>({})
  const [btn, setBtn] = useState({
    plus: false,
    minus: true
  })
```

* `data`: armazena os dados do produto.
* `btn`: controla o estado dos botões de + e -.

---

## 🔹 Buscando o produto da API

```tsx
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const req = await fetch('https://681504bd225ff1af162adcf7.mockapi.io/shoes/1')
        const res = await req.json();
        setData(res);
      } catch (error) {
        console.log('error:', error)
      }
    }

    fetchAPI();
  }, [])
```

* Esse `useEffect` roda **apenas uma vez**, ao montar o componente.
* Busca os dados do produto usando `fetch`.
* Se tudo der certo, os dados são salvos no estado `data`.
* Se houver erro, mostra no console.

---

## 🔹 Atualiza o valor total e o controle dos botões

```tsx
  useEffect(() => {
    if (!data.amount || !data.price) return;

    const totalPrice: number = data.price * data.amount;
    setData({ ...data, total_price: totalPrice });

    setBtn({
      plus: data.amount >= 9,
      minus: data.amount <= 1
    });
  }, [data.amount, data.price]);
```

* Sempre que a quantidade (`amount`) ou o preço (`price`) mudar:

  * Calcula o novo `total_price`.
  * Atualiza o estado dos botões:

    * Desativa o botão `-` se tiver 1 unidade ou menos.
    * Desativa o botão `+` se tiver 9 ou mais.

---

## 🔹 Função de adicionar ou remover quantidade

```tsx
  const handleCart = (count: number) => {
    if (data.amount !== undefined) {
      setData({
        ...data,
        amount: data.amount + count
      });
    }
  }
```

* Essa função é usada quando o usuário clica em `+` ou `-`.
* Adiciona ou subtrai da quantidade.

---

## 🔹 JSX: Montagem da interface

```tsx
  return (
    <>
      {data.id ? (
        <div>
```

* Verifica se os dados foram carregados (`data.id`).
* Se sim, mostra o conteúdo do produto.
* Caso contrário, mostra "Carregando...".

---

## 🔹 Imagem e nome do produto

```tsx
          <img src={data.thumb} alt="" />
          <h5>{data.name}</h5>
```

* Exibe a imagem e o nome do produto.

---

## 🔹 Controles de quantidade

```tsx
          <div>
            <button onClick={() => handleCart(-1)} disabled={btn.minus}>-</button>
            <p>{data.amount}</p>
            <button onClick={() => handleCart(1)} disabled={btn.plus}>+</button>
          </div>
```

* Botão `-`: chama `handleCart(-1)` e desativa se `btn.minus` for `true`.
* Botão `+`: chama `handleCart(1)` e desativa se `btn.plus` for `true`.
* No meio mostra a quantidade atual.

---

## 🔹 Valor total e botão de checkout

```tsx
          <div>
            <p>{data.total_price ?? data.price}</p>
            <button>Checkout</button>
          </div>
```

* Exibe o valor total. Se ainda não tiver sido calculado, mostra o preço unitário.
* Botão para simular finalização da compra.

---

## 🔚 Fim do componente

```tsx
        </div>
      ) : 'Carregando...'}
    </>
  )
}

export default App
```

* Fecha todos os blocos.
* Exporta o componente `App` para ser usado no React.

---

Se quiser, posso criar um desafio para praticar isso com outro produto, quer? 😄
