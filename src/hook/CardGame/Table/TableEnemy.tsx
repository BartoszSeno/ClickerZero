import { useEffect, useState } from "react";
import { EnemyCard } from "../../../data/Card/Enemy";

function TableEnemy({ EnemyIdSelected }: { EnemyIdSelected: any }) {
  return (
    <>
      <div className="EnemyHandCard">
        <div className="scaleSize">
          {EnemyCard.map((data: any, index: any) => {
            if (EnemyIdSelected.includes(data.id)) {
              return (
                <div className="CardConteiner" key={index}>
                  <div
                    className="CardChar"
                    style={{
                      backgroundImage: `url(${data.img})`,
                      backgroundPositionY:
                        data.id === 1
                          ? "-30px"
                          : data.id === 2
                          ? "65px"
                          : data.id === 3
                          ? "47px"
                          : data.id === 4
                          ? "80px"
                          : data.id === 5
                          ? "55px"
                          : data.id === 6
                          ? "30px"
                          : data.id === 7
                          ? "65px"
                          : data.id === 8
                          ? "70px"
                          : data.id === 9
                          ? "67px"
                          : data.id === 10
                          ? "0px"
                          : data.id === 11
                          ? "15px"
                          : data.id === 12
                          ? "40px"
                          : data.id === 13
                          ? "65px"
                          : data.id === 14
                          ? "90px"
                          : data.id === 15
                          ? "70px"
                          : data.id === 16
                          ? "25px"
                          : data.id === 17
                          ? "50px"
                          : data.id === 18
                          ? "65px"
                          : data.id === 19
                          ? "50px"
                          : data.id === 20
                          ? "65px"
                          : data.id === 21
                          ? "32px"
                          : data.id === 22
                          ? "50px"
                          : "",
                      backgroundSize:
                        data.id === 1
                          ? "300px"
                          : data.id === 2
                          ? "120px"
                          : data.id === 3
                          ? "200px"
                          : data.id === 5
                          ? "160px"
                          : data.id === 6
                          ? "150px"
                          : data.id === 8
                          ? "200px"
                          : data.id === 10
                          ? "200px"
                          : data.id === 11
                          ? "250px"
                          : data.id === 12
                          ? "200px"
                          : data.id === 14
                          ? "100px"
                          : data.id === 15
                          ? "150px"
                          : data.id === 16
                          ? "200px"
                          : data.id === 17
                          ? "160px"
                          : data.id === 18
                          ? "160px"
                          : data.id === 19
                          ? "150px"
                          : data.id === 20
                          ? "180px"
                          : data.id === 21
                          ? "230px"
                          : "",
                      backgroundPositionX:
                        data.id === 1
                          ? "-25px"
                          : data.id === 4
                          ? "-25px"
                          : data.id === 15
                          ? "10px"
                          : data.id === 16
                          ? "30px"
                          : data.id === 20
                          ? "5px"
                          : data.id === 21
                          ? "-10px"
                          : "",
                    }}
                  ></div>
                  <div className="CardStats">
                    <div className="AtackPoints">{data.Atack}</div>
                    <div className="HpPoints">{data.Hp}</div>
                  </div>
                </div>
              );
            }
            return null; // Jeśli przedmiot nie został kliknięty, zwróć null (nie wyświetlaj karty)
          })}
        </div>
      </div>
    </>
  );
}

export default TableEnemy;
