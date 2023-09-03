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
  setOneTimeAAE,
  setOneTimeAEA,
  CurrentMana,
  setCurrentMana,
  AllyIdSelected,
  EnemyAtackAlly,
  setEnemyAtackAlly,
  allayAtack,
  setAllayAtack,
  EnemyIndexForAnimation,
  setAllyIndexForAnimation,
  EnemyCanBeAttack,
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
  setOneTimeAAE: any;
  setOneTimeAEA: any;
  CurrentMana: any;
  setCurrentMana: any;
  AllyIdSelected: any;
  EnemyAtackAlly: any;
  setEnemyAtackAlly: any;
  allayAtack: any;
  setAllayAtack: any;
  EnemyIndexForAnimation: any;
  setAllyIndexForAnimation: any;
  EnemyCanBeAttack: any;
}) {
  const handlePlaceClick = (placeIndex: number) => {
    if (selectedItemId !== null) {
      if (CurrentMana >= AllyCard[AllyIdSelected - 1].Mana) {
        if (selectedItemsA[placeIndex] !== null) {
          // Miejsce jest już zajęte, więc nie dodawaj przedmiotu
          return;
        }

        const updatedselectedItemsA = [...selectedItemsA];
        updatedselectedItemsA[placeIndex] = selectedItemId - 1;
        setselectedItemsA(updatedselectedItemsA);
        setSelectedItemId(null);
        HandleUseCard();
        setCurrentMana(
          (prevCM: number) => prevCM - AllyCard[AllyIdSelected - 1].Mana
        );
      }
    }
  };

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
  const HandleTestClick = (index: number) => {
    if (selectedItemId !== null) {
      if (selectedItemsA[index] !== null) {
        // Miejsce jest już zajęte, więc nie dodawaj przedmiotu
        return;
      }

      setOneTimeAAE((prevArray: any) => {
        const newArray = [...prevArray];
        newArray[index] = true;
        return newArray;
      });
    }
  };
  //=======

  useEffect(() => {
    setEnemyAtackAlly(Array(selectedItemsA.length).fill(false));
  }, [selectedItemsA]);

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
            HandleTestClick(index);
          }}
        >
          {itemId !== null ? (
            <div
              className="CardConteiner"
              key={itemId}
              id={`Slot${index}AtackSlot${EnemyIndexForAnimation}Ally${
                allayAtack[index] &&
                selectedItems[EnemyIndexForAnimation] != null
                  ? "Active"
                  : allayAtack[index] && EnemyCanBeAttack
                  ? "Active"
                  : "inactive"
              }${EnemyCanBeAttack ? "EnemyCanBeAttack" : ""}`}
            >
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
                      ? "40px"
                      : AllyCard[itemId].id === 4
                      ? "35px"
                      : AllyCard[itemId].id === 5
                      ? "45px"
                      : AllyCard[itemId].id === 6
                      ? "30px"
                      : AllyCard[itemId].id === 7
                      ? "40px"
                      : AllyCard[itemId].id === 8
                      ? "50px"
                      : AllyCard[itemId].id === 10
                      ? "50px"
                      : AllyCard[itemId].id === 11
                      ? "50px"
                      : AllyCard[itemId].id === 12
                      ? "60px"
                      : AllyCard[itemId].id === 13
                      ? "60px"
                      : AllyCard[itemId].id === 14
                      ? "67px"
                      : AllyCard[itemId].id === 15
                      ? "40px"
                      : AllyCard[itemId].id === 16
                      ? "40px"
                      : AllyCard[itemId].id === 17
                      ? "40px"
                      : AllyCard[itemId].id === 18
                      ? "65px"
                      : AllyCard[itemId].id === 19
                      ? "28px"
                      : AllyCard[itemId].id === 20
                      ? "50px"
                      : AllyCard[itemId].id === 21
                      ? "30px"
                      : AllyCard[itemId].id === 22
                      ? "25px"
                      : AllyCard[itemId].id === 23
                      ? "50px"
                      : AllyCard[itemId].id === 24
                      ? "-19px"
                      : AllyCard[itemId].id === 25
                      ? "15px"
                      : AllyCard[itemId].id === 26
                      ? "40px"
                      : AllyCard[itemId].id === 27
                      ? "65px"
                      : AllyCard[itemId].id === 28
                      ? "62px"
                      : AllyCard[itemId].id === 29
                      ? "42px"
                      : AllyCard[itemId].id === 30
                      ? "30px"
                      : "",
                  backgroundSize:
                    AllyCard[itemId].id === 1
                      ? "200px"
                      : AllyCard[itemId].id === 2
                      ? "200px"
                      : AllyCard[itemId].id === 3
                      ? "100px"
                      : AllyCard[itemId].id === 4
                      ? "200px"
                      : AllyCard[itemId].id === 6
                      ? "150px"
                      : AllyCard[itemId].id === 7
                      ? "250px"
                      : AllyCard[itemId].id === 8
                      ? "120px"
                      : AllyCard[itemId].id === 9
                      ? "200px"
                      : AllyCard[itemId].id === 11
                      ? "100px"
                      : AllyCard[itemId].id === 12
                      ? "200px"
                      : AllyCard[itemId].id === 14
                      ? "200px"
                      : AllyCard[itemId].id === 16
                      ? "170px"
                      : AllyCard[itemId].id === 17
                      ? "180px"
                      : AllyCard[itemId].id === 18
                      ? "150px"
                      : AllyCard[itemId].id === 19
                      ? "130px"
                      : AllyCard[itemId].id === 20
                      ? "180px"
                      : AllyCard[itemId].id === 21
                      ? "250px"
                      : AllyCard[itemId].id === 22
                      ? "140px"
                      : AllyCard[itemId].id === 25
                      ? "220px"
                      : AllyCard[itemId].id === 26
                      ? "220px"
                      : AllyCard[itemId].id === 28
                      ? "130px"
                      : "",
                  backgroundPositionX:
                    AllyCard[itemId].id === 1
                      ? "25px"
                      : AllyCard[itemId].id === 7
                      ? "-20px"
                      : AllyCard[itemId].id === 21
                      ? "-20px"
                      : AllyCard[itemId].id === 26
                      ? "-25px"
                      : AllyCard[itemId].id === 27
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
