import { Avatar } from "../../App";
import Card from "../Card/Card";
import style from "./Cards.module.css";

type CardProps = {
  cards: Avatar[];
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onRefresh: (id: string | number) => void;
};

export default function Cards({ cards, onClick, onRefresh }: CardProps) {
  return (
    <div className={style.container}>
      {cards && cards.length
        ? cards.map(
            (card) =>
              card.id && (
                <Card key={card.id} card={card} onRefresh={onRefresh} />
              )
          )
        : null}

      <button className={style.customContent} onClick={onClick}>
        <p>+</p>
      </button>
    </div>
  );
}
