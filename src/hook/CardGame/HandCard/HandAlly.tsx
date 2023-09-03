import { useEffect, useState } from "react";
import { AllyCard } from "../../../data/Card/Ally";

function HandAlly({
  randomItems,
  setAllyIdSelected,
  HandleItemClick,
}: {
  randomItems: any;
  setAllyIdSelected: any;
  HandleItemClick: any;
}) {
  return (
    <>
      <div className="AllyHandCard">
        <div className="scaleSize">
          {randomItems.map((data: any, index: any) => (
            <div
              className="CardConteiner"
              key={index}
              onClick={() => HandleItemClick(data.id)}
            >
              <div className="imgCardAb"></div>
              <div className="ManaC">
                <div className="ManaPoints">{data.Mana}</div>
              </div>
              <div
                className="CardChar"
                style={{
                  backgroundImage: `url(${data.img})`,
                  backgroundPositionY:
                    data.id === 1
                      ? "10px"
                      : data.id === 2
                      ? "30px"
                      : data.id === 3
                      ? "40px"
                      : data.id === 4
                      ? "35px"
                      : data.id === 5
                      ? "45px"
                      : data.id === 6
                      ? "30px"
                      : data.id === 7
                      ? "40px"
                      : data.id === 8
                      ? "50px"
                      : data.id === 10
                      ? "50px"
                      : data.id === 11
                      ? "50px"
                      : data.id === 12
                      ? "60px"
                      : data.id === 13
                      ? "60px"
                      : data.id === 14
                      ? "67px"
                      : data.id === 15
                      ? "40px"
                      : data.id === 16
                      ? "40px"
                      : data.id === 17
                      ? "40px"
                      : data.id === 18
                      ? "65px"
                      : data.id === 19
                      ? "28px"
                      : data.id === 20
                      ? "50px"
                      : data.id === 21
                      ? "30px"
                      : data.id === 22
                      ? "25px"
                      : data.id === 23
                      ? "50px"
                      : data.id === 24
                      ? "-19px"
                      : data.id === 25
                      ? "15px"
                      : data.id === 26
                      ? "40px"
                      : data.id === 27
                      ? "65px"
                      : data.id === 28
                      ? "62px"
                      : data.id === 29
                      ? "42px"
                      : data.id === 30
                      ? "30px"
                      : "",
                  backgroundSize:
                    data.id === 1
                      ? "200px"
                      : data.id === 2
                      ? "200px"
                      : data.id === 3
                      ? "100px"
                      : data.id === 4
                      ? "200px"
                      : data.id === 6
                      ? "150px"
                      : data.id === 7
                      ? "250px"
                      : data.id === 8
                      ? "120px"
                      : data.id === 9
                      ? "200px"
                      : data.id === 11
                      ? "100px"
                      : data.id === 12
                      ? "200px"
                      : data.id === 14
                      ? "200px"
                      : data.id === 16
                      ? "170px"
                      : data.id === 17
                      ? "180px"
                      : data.id === 18
                      ? "150px"
                      : data.id === 19
                      ? "130px"
                      : data.id === 20
                      ? "180px"
                      : data.id === 21
                      ? "250px"
                      : data.id === 22
                      ? "140px"
                      : data.id === 25
                      ? "220px"
                      : data.id === 26
                      ? "220px"
                      : data.id === 28
                      ? "130px"
                      : "",
                  backgroundPositionX:
                    data.id === 1
                      ? "25px"
                      : data.id === 7
                      ? "-20px"
                      : data.id === 21
                      ? "-20px"
                      : data.id === 26
                      ? "-25px"
                      : data.id === 27
                      ? "25px"
                      : "",
                }}
              ></div>
              <div className="CardName">{data.Name}</div>
              <div className="CardStats">
                <div className="AttackPoints">{data.Attack}</div>
                <div className="HpPoints">{data.Hp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HandAlly;
