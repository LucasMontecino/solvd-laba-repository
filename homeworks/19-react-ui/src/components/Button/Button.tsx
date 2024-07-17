import style from "./Button.module.css";

type Button = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ text, onClick }: Button) {
  return (
    <button className={style.btn} onClick={onClick}>
      {text}
    </button>
  );
}
