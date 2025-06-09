import { useForm } from "../../../hooks/useForm";

function MyInput() {
  const { text, handleChange } = useForm();

  return (
    <>
      <h2>{text}</h2>
      <input type="text" value={text} onChange={handleChange} />
    </>
  );
}

export default MyInput;
