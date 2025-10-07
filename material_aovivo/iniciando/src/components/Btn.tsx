type BtnType = {
    title: string,
    nameClass: string,
    type: string
}

export default function Btn({ title, nameClass, type }: BtnType) {
    if (type === "text") {
        return <button className={nameClass}>{title}</button>
    }

    if (type === "token") {
        return <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
        </select>
    }
}