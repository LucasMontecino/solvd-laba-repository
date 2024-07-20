import style from "./Card.module.css";
import { Avatar } from "../../App";
import { IoReload } from "react-icons/io5";

type CardProps = {
  card: Avatar;
  onRefresh: (id: string | number) => void;
};

export default function Card({ card, onRefresh }: CardProps) {
  return (
    <div className={style.card} onClick={() => onRefresh(card.id)}>
      <img className={style.img} src={card.url} alt={card.id + "-img"} />
      <div className={style.middle}>
        <IoReload className={style.reload} size={"6em"} />
      </div>
    </div>
  );
}
