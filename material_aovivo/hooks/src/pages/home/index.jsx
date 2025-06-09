import MyButton from "../../components/ui/myButton";
import MyInput from "../../components/ui/myInput";
import { useForm } from "../../hooks/useForm";

function Home() {
    const {handleClick} = useForm()

  return (
    <>
      <h2>Pagina Home</h2>

      

      <MyButton
        infos={{
          color: "myButtonPrimary",
          title: "Send",
        }}
      />

      <MyButton
        infos={{
          color: "myButtonSecondary",
          title: "Send",
          handle: handleClick,
        }}
      />

      <MyButton
        infos={{
          color: "myButtonSecondary",
          title: "Send message to me",
          size: "myButtonLarge",
          handle: handleClick,
        }}
      />

      <MyInput />
      <MyInput />
    </>
  );
}

export default Home;
