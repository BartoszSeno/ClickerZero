/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { AllyCard } from "../../../data/Card/Ally";
import { EnemyCard } from "../../../data/Card/Enemy";

function TableAlly({
  selectedItemId,
  setSelectedItemId,
  HandleUseCard,
  setGetAP,
  setGetHP,
  RoundFor,
  setCanBeUse,
  CanBeUse,
  setIdCardA,
  selectedItemsA,
  setselectedItemsA,
  setIndexSaveA,
  IndexSaveA,
  setselectedCardA,
  selectedCardA,
  setSelectedItems,
  selectedItems,
  IndexSaveE,
  selectedCard,
  setACA,
}: {
  selectedItemId: any;
  setSelectedItemId: any;
  HandleUseCard: any;
  setGetAP: any;
  setGetHP: any;
  RoundFor: any;
  setCanBeUse: any;
  CanBeUse: any;
  setIdCardA: any;
  selectedItemsA: any;
  setselectedItemsA: any;
  setIndexSaveA: any;
  IndexSaveA: any;
  setselectedCardA: any;
  selectedCardA: any;
  setSelectedItems: any;
  selectedItems: any;
  IndexSaveE: any;
  selectedCard: any;
  setACA: any;
}) {
  const handlePlaceClick = (placeIndex: number) => {
    if (selectedItemId !== null) {
      if (selectedItemsA[placeIndex] !== null) {
        // Miejsce jest już zajęte, więc nie dodawaj przedmiotu
        return;
      }

      const updatedselectedItemsA = [...selectedItemsA];
      updatedselectedItemsA[placeIndex] = selectedItemId - 1;
      setselectedItemsA(updatedselectedItemsA);
      setSelectedItemId(null);
      HandleUseCard();
    }
  };

  const [allayAtack, setAllayAtack] = useState<any>([]);
  useEffect(() => {
    setAllayAtack(Array(selectedItemsA.length).fill(false));
  }, [selectedItemsA]);

  const handleHeck = (index: number) => {
    setIndexSaveA(index);

    if (RoundFor === "ally") {
      if (selectedItemsA[index] !== null && !allayAtack[index]) {
        const selectedIndex = allayAtack.findIndex(
          (value: boolean) => value === true
        );
        setAllayAtack((prevArray: any) => {
          const newArray = [...prevArray];
          if (selectedIndex !== -1) {
            newArray[selectedIndex] = false;
          }

          newArray[index] = true;

          if (newArray[index]) {
            setACA(true);
            setCanBeUse("AllyAtackEnemy");
          }
          return newArray;
        });
        setIdCardA(selectedItemsA[index]);
        setselectedCardA(selectedItemsA[index]);
      }
    }
  };

  //====

  //=======

  const [EnemyAtackAlly, setEnemyAtackAlly] = useState<any>([]);

  useEffect(() => {
    setEnemyAtackAlly(Array(selectedItemsA.length).fill(false));
  }, [selectedItemsA]);

  //do podswietlania przeciwnika
  useEffect(() => {
    if (CanBeUse === "EnemyAtackAlly") {
      if (EnemyAtackAlly[IndexSaveA] !== undefined) {
        const selectedIndex = EnemyAtackAlly.findIndex(
          (value: boolean) => value === true
        );

        setEnemyAtackAlly((prevArray: any) => {
          const newArray = [...prevArray];
          if (selectedIndex !== -1) {
            newArray[selectedIndex] = false;
          }
          newArray[IndexSaveA] = true;
          if (newArray[IndexSaveA]) {
            const CaedIdA = selectedItemsA[IndexSaveA];

            if (selectedItemsA[IndexSaveA] !== null) {
              EnemyCard[selectedCard].Hp -= AllyCard[Number(CaedIdA)].Atack;
              AllyCard[Number(CaedIdA)].Hp -= EnemyCard[selectedCard].Atack;
              //
              setAllayAtack(Array(selectedItemsA.length).fill(false));
              setselectedCardA(undefined);
              setEnemyAtackAlly(Array(selectedItemsA.length).fill(false));
              setIndexSaveA(-1);
              //
              if (EnemyCard[selectedCard].Hp <= 0) {
                setSelectedItems((prevItems: any[]) => {
                  const newItems = [...prevItems];
                  newItems[IndexSaveE] = null;
                  return newItems;
                });
              }
              if (AllyCard[Number(CaedIdA)].Hp <= 0) {
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
  }, [IndexSaveA, CanBeUse]);
  //=======
  useEffect(() => {
    if (RoundFor === "enemy") {
      setAllayAtack(Array(selectedItemsA.length).fill(false));
      setselectedCardA(undefined);
      setCanBeUse("s");
      setEnemyAtackAlly(Array(selectedItemsA.length).fill(false));
      setIndexSaveA(-1);
    }
  }, [RoundFor]);

  return (
    <div className="Board">
      {selectedItemsA.map((itemId: any, index: any) => (
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
                  backgroundColor: allayAtack[index]
                    ? "green"
                    : CanBeUse === "EnemyAtackAlly" && EnemyAtackAlly[index]
                    ? "blue"
                    : "",
                  backgroundImage: `url(${AllyCard[itemId].img})`,
                  backgroundPositionY:
                    AllyCard[itemId].id === 1
                      ? "10px"
                      : AllyCard[itemId].id === 2
                      ? "30px"
                      : AllyCard[itemId].id === 3
                      ? "35px"
                      : AllyCard[itemId].id === 4
                      ? "30px"
                      : AllyCard[itemId].id === 5
                      ? "55px"
                      : AllyCard[itemId].id === 6
                      ? "-40px"
                      : AllyCard[itemId].id === 7
                      ? "50px"
                      : AllyCard[itemId].id === 8
                      ? "70px"
                      : AllyCard[itemId].id === 9
                      ? "67px"
                      : AllyCard[itemId].id === 10
                      ? "70px"
                      : AllyCard[itemId].id === 11
                      ? "55px"
                      : AllyCard[itemId].id === 12
                      ? "40px"
                      : AllyCard[itemId].id === 13
                      ? "65px"
                      : AllyCard[itemId].id === 14
                      ? "50px"
                      : AllyCard[itemId].id === 15
                      ? "30px"
                      : AllyCard[itemId].id === 16
                      ? "25px"
                      : AllyCard[itemId].id === 17
                      ? "50px"
                      : AllyCard[itemId].id === 18
                      ? "15px"
                      : AllyCard[itemId].id === 19
                      ? "50px"
                      : AllyCard[itemId].id === 20
                      ? "65px"
                      : AllyCard[itemId].id === 21
                      ? "62px"
                      : AllyCard[itemId].id === 22
                      ? "30px"
                      : "",
                  backgroundSize:
                    AllyCard[itemId].id === 1
                      ? "200px"
                      : AllyCard[itemId].id === 2
                      ? "200px"
                      : AllyCard[itemId].id === 3
                      ? "200px"
                      : AllyCard[itemId].id === 5
                      ? "230px"
                      : AllyCard[itemId].id === 6
                      ? "250px"
                      : AllyCard[itemId].id === 8
                      ? "200px"
                      : AllyCard[itemId].id === 10
                      ? "100px"
                      : AllyCard[itemId].id === 12
                      ? "200px"
                      : AllyCard[itemId].id === 14
                      ? "200px"
                      : AllyCard[itemId].id === 15
                      ? "260px"
                      : AllyCard[itemId].id === 16
                      ? "150px"
                      : AllyCard[itemId].id === 17
                      ? "120px"
                      : AllyCard[itemId].id === 18
                      ? "250px"
                      : AllyCard[itemId].id === 19
                      ? "220px"
                      : "",
                  backgroundPositionX:
                    AllyCard[itemId].id === 1
                      ? "25px"
                      : AllyCard[itemId].id === 15
                      ? "-20px"
                      : AllyCard[itemId].id === 20
                      ? "25px"
                      : "",
                }}
              ></div>
              <div className="CardStatsIG">
                <div className="AtackPoints">{AllyCard[itemId].Atack}</div>
                <div className="HpPoints">{AllyCard[itemId].Hp}</div>
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

export default TableAlly;
