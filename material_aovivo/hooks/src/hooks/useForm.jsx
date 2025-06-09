import { useState } from "react";

export function useForm() {
  const [text, setText] = useState("");

  function handleChange({ target }) {
    console.log(target.value)
    setText(target.value)
  }

  function handleClick() {
    alert("Oi");
  }


  return {
    text,
    handleChange,
    handleClick
  }
}
