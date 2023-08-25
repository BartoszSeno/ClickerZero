/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { EnemyCard } from "../../../data/Card/Enemy";
import { AllyCard } from "../../../data/Card/Ally";

function TableEnemy({
  selectedItemIdE,
  setSelectedItemIdE,
  HandleUseCardE,
  setGetEAP,
  setGetEHP,
  RoundFor,
  CanBeUse,
  setCanBeUse,
  IdCardA,
  setselectedItemsA,
  IndexSaveA,
  selectedCardA,
  setSelectedItems,
  selectedItems,
  setIndexSaveE,
  IndexSaveE,
  setselectedCard,
  selectedCard,
  setECA,
  setOneTimeAAE,
  setOneTimeAEA,
  CurrentMana,
  setCurrentMana,
  EnemyIdSelected,
  setEnemyAtack,
  EnemyAtack,
}: {
  selectedItemIdE: any;
  setSelectedItemIdE: any;
  HandleUseCardE: any;
  setGetEAP: any;
  setGetEHP: any;
  RoundFor: any;
  CanBeUse: any;
  setCanBeUse: any;
  IdCardA: any;
  setselectedItemsA: any;
  IndexSaveA: any;
  selectedCardA: any;
  setSelectedItems: any;
  selectedItems: any;
  setIndexSaveE: any;
  IndexSaveE: any;
  setselectedCard: any;
  selectedCard: any;
  setECA: any;
  setOneTimeAAE: any;
  setOneTimeAEA: any;
  CurrentMana: any;
  setCurrentMana: any;
  EnemyIdSelected: any;
  setEnemyAtack: any;
  EnemyAtack: any;
}) {
  //====

  useEffect(() => {
    setEnemyAtack(Array(selectedItems.length).fill(false));
  }, [selectedItems]);
  useEffect(() => {
    console.log("Wybrany przedmiot:", EnemyCard[selectedCard]);
  }, [selectedCard]);
  useEffect(() => {
    // console.log(IndexSaveE);
  }, [IndexSaveE]);

  const handleHeck = (index: number) => {
    setIndexSaveE(index);
  };

  const [AllyAtackEnemy, setAllyAtackEnemy] = useState<any>([]);
  useEffect(() => {
    setAllyAtackEnemy(Array(selectedItems.length).fill(false));
  }, [selectedItems]);
  //do podswietlania przeciwnika
  useEffect(() => {
    if (CanBeUse === "AllyAtackEnemy") {
      if (AllyAtackEnemy[IndexSaveE] !== undefined) {
        const selectedIndex = AllyAtackEnemy.findIndex(
          (value: boolean) => value === true
        );
        setAllyAtackEnemy((prevArray: any) => {
          const newArray = [...prevArray];
          if (selectedIndex !== -1) {
            newArray[selectedIndex] = false;
          }
          newArray[IndexSaveE] = true;
          if (newArray[IndexSaveE]) {
            const CaedIdE = selectedItems[IndexSaveE];
            if (selectedItems[IndexSaveE] !== null) {
              EnemyCard[Number(CaedIdE)].Hp -= AllyCard[selectedCardA].Atack;
              AllyCard[selectedCardA].Hp -= EnemyCard[Number(CaedIdE)].Atack;
              //
              setEnemyAtack(Array(selectedItems.length).fill(false));
              setselectedCard(undefined);
              setAllyAtackEnemy(Array(selectedItems.length).fill(false));
              setIndexSaveE(-1);
              //
              if (EnemyCard[Number(CaedIdE)].Hp <= 0) {
                setSelectedItems((prevItems: any[]) => {
                  const newItems = [...prevItems];
                  newItems[IndexSaveE] = null;
                  return newItems;
                });
              }
              if (AllyCard[selectedCardA].Hp <= 0) {
                setselectedItemsA((prevItems: any[]) => {
                  const newItems = [...prevItems];
                  newItems[IndexSaveA] = null;
                  return newItems;
                });
              }
            }
            setOneTimeAAE((prevArray: any) => {
              const newArray = [...prevArray];
              newArray[IndexSaveA] = false;
              return newArray;
            });
          }
          return newArray;
        });
      }
    } else {
      return;
    }
  }, [IndexSaveE, CanBeUse, selectedItems]);
  useEffect(() => {
    if (RoundFor === "ally") {
      setEnemyAtack(Array(selectedItems.length).fill(false));
      setselectedCard(undefined);
      setCanBeUse("s");
      setAllyAtackEnemy(Array(selectedItems.length).fill(false));
      setIndexSaveE(-1);
    }
  }, [RoundFor]);

  return (
    <div className="Board">
      {selectedItems.map((itemId: any, index: any) => (
        <div
          className="CardOnBoard"
          key={index}
          onClick={() => {
            handleHeck(index);
          }}
        >
          {itemId !== null ? (
            <div className="CardConteiner" key={itemId}>
              <div className="InGameCard"></div>
              <div
                className="CardCharIG"
                style={{
                  backgroundColor: EnemyAtack[index]
                    ? "green"
                    : CanBeUse === "AllyAtackEnemy" && AllyAtackEnemy[index]
                    ? "blue"
                    : "",
                  backgroundImage: `url(${EnemyCard[itemId].img})`,
                  backgroundPositionY:
                    EnemyCard[itemId].id === 1
                      ? "-30px"
                      : EnemyCard[itemId].id === 3
                      ? "65px"
                      : EnemyCard[itemId].id === 4
                      ? "47px"
                      : EnemyCard[itemId].id === 5
                      ? "80px"
                      : EnemyCard[itemId].id === 6
                      ? "55px"
                      : EnemyCard[itemId].id === 8
                      ? "30px"
                      : EnemyCard[itemId].id === 9
                      ? "40px"
                      : EnemyCard[itemId].id === 10
                      ? "70px"
                      : EnemyCard[itemId].id === 11
                      ? "67px"
                      : EnemyCard[itemId].id === 13
                      ? "50px"
                      : EnemyCard[itemId].id === 14
                      ? "15px"
                      : EnemyCard[itemId].id === 15
                      ? "20px"
                      : EnemyCard[itemId].id === 16
                      ? "65px"
                      : EnemyCard[itemId].id === 17
                      ? "30px"
                      : EnemyCard[itemId].id === 18
                      ? "70px"
                      : EnemyCard[itemId].id === 19
                      ? "50px"
                      : EnemyCard[itemId].id === 21
                      ? "50px"
                      : EnemyCard[itemId].id === 22
                      ? "20px"
                      : EnemyCard[itemId].id === 23
                      ? "50px"
                      : EnemyCard[itemId].id === 25
                      ? "65px"
                      : EnemyCard[itemId].id === 26
                      ? "32px"
                      : EnemyCard[itemId].id === 27
                      ? "50px"
                      : "",
                  backgroundSize:
                    EnemyCard[itemId].id === 1
                      ? "300px"
                      : EnemyCard[itemId].id === 3
                      ? "120px"
                      : EnemyCard[itemId].id === 4
                      ? "200px"
                      : EnemyCard[itemId].id === 6
                      ? "160px"
                      : EnemyCard[itemId].id === 8
                      ? "150px"
                      : EnemyCard[itemId].id === 9
                      ? "200px"
                      : EnemyCard[itemId].id === 11
                      ? "200px"
                      : EnemyCard[itemId].id === 13
                      ? "200px"
                      : EnemyCard[itemId].id === 14
                      ? "200px"
                      : EnemyCard[itemId].id === 15
                      ? "250px"
                      : EnemyCard[itemId].id === 16
                      ? "150px"
                      : EnemyCard[itemId].id === 17
                      ? "200px"
                      : EnemyCard[itemId].id === 18
                      ? "160px"
                      : EnemyCard[itemId].id === 19
                      ? "130px"
                      : EnemyCard[itemId].id === 21
                      ? "150px"
                      : EnemyCard[itemId].id === 22
                      ? "180px"
                      : EnemyCard[itemId].id === 23
                      ? "230px"
                      : "",
                  backgroundPositionX:
                    EnemyCard[itemId].id === 1
                      ? "-25px"
                      : EnemyCard[itemId].id === 5
                      ? "-25px"
                      : EnemyCard[itemId].id === 18
                      ? "10px"
                      : EnemyCard[itemId].id === 19
                      ? "10px"
                      : EnemyCard[itemId].id === 22
                      ? "20px"
                      : EnemyCard[itemId].id === 24
                      ? "5px"
                      : EnemyCard[itemId].id === 25
                      ? "-10px"
                      : "",
                }}
              ></div>
              <div className="CardStatsIG">
                <div className="AtackPoints">{EnemyCard[itemId].Atack}</div>
                <div className="HpPoints">{EnemyCard[itemId].Hp}</div>
                <div>{EnemyCard[itemId].id}</div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}

export default TableEnemy;
