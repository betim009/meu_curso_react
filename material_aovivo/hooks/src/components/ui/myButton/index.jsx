import "./myButton.css";

function MyButton({ infos }) {
  return (
    <button className={`myButton ${infos.color} ${infos.size}`}
        onClick={infos.handle}
    >
      {infos.title}
    </button>
  );
}

export default MyButton;
