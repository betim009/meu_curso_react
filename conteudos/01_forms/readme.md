# 📚 Entendendo Desestruturação e Inputs no React

## Introdução

Ao trabalhar com **inputs** no React, usamos eventos (`event`) para capturar as informações inseridas pelo usuário.  
Uma técnica muito útil que facilita a manipulação desses eventos é a **desestruturação**.

Este material irá explicar:

- Como capturar valores de inputs no React.
- Como usar a **desestruturação** para simplificar o acesso aos dados.
- Como organizar os estados de múltiplos inputs.

---

## 🌟 Exemplo Básico: Capturando o Valor de um Input

```tsx
<input type="text" onChange={(event) => console.log(event.target.value)} />
```

- `event` é o objeto que representa o evento.
- Dentro de `event`, o `target` é o input em si.
- `target.value` é o que o usuário digitou.

---

## ✨ Simplificando com Desestruturação

Podemos extrair (`desestruturar`) diretamente o `target`:

```tsx
<input type="text" onChange={({ target }) => console.log(target.value)} />
```

Assim evitamos escrever `event.target.value` e usamos diretamente `target.value`.

---

## 🧹 Criando Funções para `onChange`

### Sem desestruturação

```tsx
function handleChange(event: any) {
  console.log(event.target.value);
}
```

### Com desestruturação

```tsx
function handleChange2({ target }: any) {
  console.log(target.value);
}
```

### Desestruturando ainda mais (pegando só o `value`)

```tsx
function handleChange3({ target }: any) {
  const { value } = target;
  console.log(value);
}
```

---

## 🧐 Controlando o Valor do Input

Ao adicionar um estado ao input, conseguimos **controlar** o que está escrito nele.

```tsx
const [input, setInput] = useState("Fabio");
```

Input controlado:

```tsx
<input type="text" value={input} onChange={({ target }) => setInput(target.value)} />
```

Ou de forma tradicional:

```tsx
<input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
```

---

# 🛠️ Inputs Múltiplos: Organizando Estados com Objetos

Quando temos vários inputs (nome, sobrenome, cidade...), podemos armazenar tudo em um **único estado**:

```tsx
const [form, setForm] = useState({
  nome: "",
  sobrenome: "",
  cidade: ""
});
```

## ✍️ Atualizando os Campos

Função para atualizar qualquer campo dinamicamente:

```tsx
function handleChange({ target }: any) {
  const { name, value } = target;

  setForm({
    ...form,       // mantém os outros campos
    [name]: value  // atualiza o campo correto
  });

  console.log(form);
}
```

- `[name]` usa o valor do atributo `name` do input para decidir qual campo do objeto deve ser atualizado.

---

## 🔎 Inputs no Formulário

```tsx
<>
  {form.cidade} {form.nome} {form.sobrenome}

  <input
    type="text"
    placeholder="nome"
    name="nome"
    value={form.nome}
    onChange={handleChange}
  />

  <input
    type="text"
    placeholder="sobrenome"
    name="sobrenome"
    value={form.sobrenome}
    onChange={handleChange}
  />

  <input
    type="text"
    placeholder="cidade"
    name="cidade"
    value={form.cidade}
    onChange={handleChange}
  />
</>
```

Cada input:

- Tem um `name` correspondente ao campo no objeto `form`.
- Usa `value` para ser um **input controlado**.
- Usa `onChange` para atualizar o campo correto.

---

# 📋 Resumo Final

| Conceito                  | O que é                                                              |
|:---------------------------|:---------------------------------------------------------------------|
| `event`                    | Objeto do evento.                                                    |
| `target`                   | Elemento HTML que disparou o evento.                                 |
| `target.value`             | Valor digitado no input.                                             |
| Desestruturação            | Extração direta de `target` e `value` para simplificar o código.     |
| Estado com objeto          | Guardar vários inputs em um único `useState`.                        |
| Atualização dinâmica       | Usar `[name]: value` para atualizar campos com o mesmo `handleChange`.|
