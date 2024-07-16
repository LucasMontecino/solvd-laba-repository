import style from "./Card.module.css";
import { Avatar } from "../../App";

type Card = {
  card: Avatar;
};

export default function Card({ card }: Card) {
  return (
    <div>
      <img className={style.img} src={card.url} alt={card.id + "-img"} />
    </div>
  );
}
