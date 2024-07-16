import style from "./Button.module.css";

type Button = {
  text: string;
};

export default function Button({ text }: Button) {
  return <button className={style.btn}>{text}</button>;
}
