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
}) {
  const handlePlaceClick = (placeIndex: number) => {
    if (selectedItemIdE !== null) {
      if (selectedItems[placeIndex] !== null) {
        // Miejsce jest już zajęte, więc nie dodawaj przedmiotu
        return;
      }

      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems[placeIndex] = selectedItemIdE - 1;
      setSelectedItems(updatedSelectedItems);
      setSelectedItemIdE(null);
      HandleUseCardE();
    }
  };

  //====
  const [EnemyAtack, setEnemyAtack] = useState<any>([]);

  useEffect(() => {
    setEnemyAtack(Array(selectedItems.length).fill(false));
  }, [selectedItems]);

  useEffect(() => {
    console.log(selectedCard);
    console.log("Wybrany przedmiot:", EnemyCard[selectedCard]);
  }, [selectedCard]);

  useEffect(() => {
    console.log(IndexSaveE);
  }, [IndexSaveE]);

  const handleHeck = (index: number) => {
    setIndexSaveE(index);

    if (RoundFor === "enemy") {
      if (selectedItems[index] !== null && !EnemyAtack[index]) {
        const selectedIndex = EnemyAtack.findIndex(
          (value: boolean) => value === true
        );

        setEnemyAtack((prevArray: any) => {
          const newArray = [...prevArray];
          if (selectedIndex !== -1) {
            newArray[selectedIndex] = false;
          }
          newArray[index] = true;
          if (newArray[index]) {
            setCanBeUse("EnemyAtackAlly");
          }
          return newArray;
        });

        setselectedCard(selectedItems[index]);
      }
    }
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
            handlePlaceClick(index);
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
                      : EnemyCard[itemId].id === 2
                      ? "65px"
                      : EnemyCard[itemId].id === 3
                      ? "47px"
                      : EnemyCard[itemId].id === 4
                      ? "80px"
                      : EnemyCard[itemId].id === 5
                      ? "55px"
                      : EnemyCard[itemId].id === 6
                      ? "30px"
                      : EnemyCard[itemId].id === 7
                      ? "65px"
                      : EnemyCard[itemId].id === 8
                      ? "70px"
                      : EnemyCard[itemId].id === 9
                      ? "67px"
                      : EnemyCard[itemId].id === 10
                      ? "0px"
                      : EnemyCard[itemId].id === 11
                      ? "15px"
                      : EnemyCard[itemId].id === 12
                      ? "40px"
                      : EnemyCard[itemId].id === 13
                      ? "65px"
                      : EnemyCard[itemId].id === 14
                      ? "90px"
                      : EnemyCard[itemId].id === 15
                      ? "70px"
                      : EnemyCard[itemId].id === 16
                      ? "25px"
                      : EnemyCard[itemId].id === 17
                      ? "50px"
                      : EnemyCard[itemId].id === 18
                      ? "65px"
                      : EnemyCard[itemId].id === 19
                      ? "50px"
                      : EnemyCard[itemId].id === 20
                      ? "65px"
                      : EnemyCard[itemId].id === 21
                      ? "32px"
                      : EnemyCard[itemId].id === 22
                      ? "50px"
                      : "",
                  backgroundSize:
                    EnemyCard[itemId].id === 1
                      ? "300px"
                      : EnemyCard[itemId].id === 2
                      ? "120px"
                      : EnemyCard[itemId].id === 3
                      ? "200px"
                      : EnemyCard[itemId].id === 5
                      ? "160px"
                      : EnemyCard[itemId].id === 6
                      ? "150px"
                      : EnemyCard[itemId].id === 8
                      ? "200px"
                      : EnemyCard[itemId].id === 10
                      ? "200px"
                      : EnemyCard[itemId].id === 11
                      ? "250px"
                      : EnemyCard[itemId].id === 12
                      ? "200px"
                      : EnemyCard[itemId].id === 14
                      ? "100px"
                      : EnemyCard[itemId].id === 15
                      ? "150px"
                      : EnemyCard[itemId].id === 16
                      ? "200px"
                      : EnemyCard[itemId].id === 17
                      ? "160px"
                      : EnemyCard[itemId].id === 18
                      ? "160px"
                      : EnemyCard[itemId].id === 19
                      ? "150px"
                      : EnemyCard[itemId].id === 20
                      ? "180px"
                      : EnemyCard[itemId].id === 21
                      ? "230px"
                      : "",
                  backgroundPositionX:
                    EnemyCard[itemId].id === 1
                      ? "-25px"
                      : EnemyCard[itemId].id === 4
                      ? "-25px"
                      : EnemyCard[itemId].id === 15
                      ? "10px"
                      : EnemyCard[itemId].id === 16
                      ? "30px"
                      : EnemyCard[itemId].id === 20
                      ? "5px"
                      : EnemyCard[itemId].id === 21
                      ? "-10px"
                      : "",
                }}
              ></div>
              <div className="CardStatsIG">
                <div className="AtackPoints">{EnemyCard[itemId].Atack}</div>
                <div className="HpPoints">{EnemyCard[itemId].Hp}</div>
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
