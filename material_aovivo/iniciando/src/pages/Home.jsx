import Btn from "../components/Btn"
import Title from "../components/Title"

function Home() {
    return (
        <>
            <Title>Bem vindo</Title>
            <Btn type={"text"} title="Enviar" nameClass=".btnPrimary" />
            <Btn type={"token"} title="Cadastrar" nameClass=".btnPrimary" />
        </>
    )
}

export default Home