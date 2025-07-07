function BtnNumber({ title, click }) {

    return (
        <button onClick={click} value={title}>{title}</button>
    )
}

export default BtnNumber    