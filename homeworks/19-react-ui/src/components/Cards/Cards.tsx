import { Avatar } from "../../App";
import Card from "../Card/Card";
import style from "./Cards.module.css";

type Cards = {
  cards: Avatar[];
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Cards({ cards, onClick }: Cards) {
  return (
    <div className={style.container}>
      {cards && cards.length
        ? cards.map((card) => card.id && <Card key={card.id} card={card} />)
        : null}

      <button className={style.customContent} onClick={onClick}>
        <p>+</p>
      </button>
    </div>
  );
}
