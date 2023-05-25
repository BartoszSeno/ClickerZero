/* eslint-disable @typescript-eslint/no-unused-vars */
import { AllyCard } from "../../data/Card/Ally";
import { EnemyCard } from "../../data/Card/Enemy";

function CardList() {
  return (
    <div className="deckC">
      {AllyCard.map((data: any) => (
        <div className="CardConteiner">
          <div className="ManaC">
            <div className="ManaPoints">{data.Mana}</div>
          </div>
          <div
            className="CardChar"
            style={{
              backgroundImage: `url(${data.img})`,
            }}
          ></div>
          <div className="CardName">{data.Name}</div>
          <div className="CardStats">
            <div className="AtackPoints">{data.Atack}</div>
            <div className="HpPoints">{data.Hp}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
