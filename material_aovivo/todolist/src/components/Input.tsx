interface InputType {
    type: string;
}

export default function Input({ type }: InputType) {
    switch (type) {
        case "date":
            return <input type="date" className="inpDate" />
        default:
            break
    }

    return (
        <>
            <input className="inp" type={type} />
        </>
    );
}