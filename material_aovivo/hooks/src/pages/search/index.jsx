import { useForm } from "../../hooks/useForm";

function Search() {
  const {handleClick} = useForm()


  return (
    <>
      <h2>Pagina Search</h2>

      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default Search;
