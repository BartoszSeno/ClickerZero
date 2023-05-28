import { useEffect, useState } from "react";
import { AllyCard } from "../../../data/Card/Ally";

function TableAlly({ AllyIdSelected }: { AllyIdSelected: any }) {
  return (
    <>
      <div className="AllyHandCard">
        <div className="scaleSize">
          {AllyCard.map((data: any, index: any) => {
            if (AllyIdSelected.includes(data.id)) {
              return (
                <div className="CardConteiner" key={index}>
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
                          ? "35px"
                          : data.id === 4
                          ? "30px"
                          : data.id === 5
                          ? "55px"
                          : data.id === 6
                          ? "-40px"
                          : data.id === 7
                          ? "50px"
                          : data.id === 8
                          ? "70px"
                          : data.id === 9
                          ? "67px"
                          : data.id === 10
                          ? "70px"
                          : data.id === 11
                          ? "55px"
                          : data.id === 12
                          ? "40px"
                          : data.id === 13
                          ? "65px"
                          : data.id === 14
                          ? "50px"
                          : data.id === 15
                          ? "30px"
                          : data.id === 16
                          ? "25px"
                          : data.id === 17
                          ? "50px"
                          : data.id === 18
                          ? "15px"
                          : data.id === 19
                          ? "50px"
                          : data.id === 20
                          ? "65px"
                          : data.id === 21
                          ? "62px"
                          : data.id === 22
                          ? "30px"
                          : "",
                      backgroundSize:
                        data.id === 1
                          ? "200px"
                          : data.id === 2
                          ? "200px"
                          : data.id === 3
                          ? "200px"
                          : data.id === 5
                          ? "230px"
                          : data.id === 6
                          ? "250px"
                          : data.id === 8
                          ? "200px"
                          : data.id === 10
                          ? "100px"
                          : data.id === 12
                          ? "200px"
                          : data.id === 14
                          ? "200px"
                          : data.id === 15
                          ? "260px"
                          : data.id === 16
                          ? "150px"
                          : data.id === 17
                          ? "120px"
                          : data.id === 18
                          ? "250px"
                          : data.id === 19
                          ? "220px"
                          : "",
                      backgroundPositionX:
                        data.id === 1
                          ? "25px"
                          : data.id === 15
                          ? "-20px"
                          : data.id === 20
                          ? "25px"
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

export default TableAlly;
