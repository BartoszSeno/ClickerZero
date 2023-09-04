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
  setIndexSaveA,
  selectedCardA,
  setselectedCardA,
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
  setEnemyAttack,
  EnemyAttack,
  setUsedIndexSaveAValues,
  usedIndexSaveAValues,
  setEnemyIndexForAnimation,
  AllyIndexForAnimation,
  SelectedIndexBTM,
  AllyCanBeAttack,
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
  setIndexSaveA: any;
  selectedCardA: any;
  setselectedCardA: any;
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
  setEnemyAttack: any;
  EnemyAttack: any;
  setUsedIndexSaveAValues: any;
  usedIndexSaveAValues: any;
  setEnemyIndexForAnimation: any;
  AllyIndexForAnimation: any;
  SelectedIndexBTM: any;
  AllyCanBeAttack: any;
}) {
  //====

  useEffect(() => {
    setEnemyAttack(Array(selectedItems.length).fill(false));
  }, [selectedItems]);

  useEffect(() => {
    // console.log(IndexSaveE);
  }, [IndexSaveE]);

  const handleHeck = (index: number) => {
    setIndexSaveE(index);
  };

  const [AllyAttackEnemy, setAllyAttackEnemy] = useState<any>([]);
  useEffect(() => {
    setAllyAttackEnemy(Array(selectedItems.length).fill(false));
  }, [selectedItems]);
  //do podswietlania przeciwnika

  function isIndexSaveAUsed(value: any) {
    return usedIndexSaveAValues.includes(value);
  }

  useEffect(() => {
    setTimeout(() => {
      if (CanBeUse === "AllyAttackEnemy") {
        if (IndexSaveA !== undefined) {
          if (!isIndexSaveAUsed(AllyCard[selectedCardA])) {
            if (AllyAttackEnemy[IndexSaveE] !== undefined) {
              const selectedIndex = AllyAttackEnemy.findIndex(
                (value: boolean) => value === true
              );

              setAllyAttackEnemy((prevArray: any) => {
                const newArray = [...prevArray];
                if (selectedIndex !== -1) {
                  newArray[selectedIndex] = false;
                }
                newArray[IndexSaveE] = true;
                if (newArray[IndexSaveE]) {
                  const CaedIdE = selectedItems[IndexSaveE];
                  if (selectedItems[IndexSaveE] !== null) {
                    EnemyCard[Number(CaedIdE)].Hp -=
                      AllyCard[selectedCardA].Attack;
                    AllyCard[selectedCardA].Hp -=
                      EnemyCard[Number(CaedIdE)].Attack;
                    //
                    setEnemyAttack(Array(selectedItems.length).fill(false));
                    setselectedCard(undefined);
                    setAllyAttackEnemy(Array(selectedItems.length).fill(false));
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
                setIndexSaveA(undefined);
                setselectedCardA(undefined);
                setUsedIndexSaveAValues([
                  ...usedIndexSaveAValues,
                  AllyCard[selectedCardA],
                ]);
                return newArray;
              });
            }
          } else {
            return;
          }
        }
      }
    }, 500);
  }, [IndexSaveE, CanBeUse, selectedItems]);

  useEffect(() => {
    if (RoundFor === "ally") {
      setEnemyAttack(Array(selectedItems.length).fill(false));
      setselectedCard(undefined);
      setCanBeUse("s");
      setAllyAttackEnemy(Array(selectedItems.length).fill(false));
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
            if (IndexSaveA !== undefined) {
              if (!isIndexSaveAUsed(AllyCard[selectedCardA])) {
                handleHeck(index);
                setEnemyIndexForAnimation(index);
              }
            }
            setTimeout(() => {
              setEnemyIndexForAnimation(null);
            }, 2000);
          }}
        >
          {itemId !== null ? (
            <div
              className="CardConteiner"
              key={itemId}
              id={`Slot${index}AttackSlot${AllyIndexForAnimation}Enemy${
                index === SelectedIndexBTM && RoundFor === "enemy"
                  ? "Active"
                  : "inactive"
              }${AllyCanBeAttack ? "AllyCanBeAttack" : ""}`}
            >
              <div className="InGameCard"></div>
              <div
                className="CardCharIG"
                style={{
                  backgroundColor:
                    index === SelectedIndexBTM && RoundFor === "enemy"
                      ? "green"
                      : CanBeUse === "AllyAttackEnemy" && AllyAttackEnemy[index]
                      ? "blue"
                      : "",
                  backgroundImage: `url(${EnemyCard[itemId].img})`,
                  backgroundPositionY:
                    EnemyCard[itemId].id === 1
                      ? "-30px"
                      : EnemyCard[itemId].id === 2
                      ? "0px"
                      : EnemyCard[itemId].id === 3
                      ? "65px"
                      : EnemyCard[itemId].id === 4
                      ? "47px"
                      : EnemyCard[itemId].id === 5
                      ? "80px"
                      : EnemyCard[itemId].id === 6
                      ? "55px"
                      : EnemyCard[itemId].id === 7
                      ? "30px"
                      : EnemyCard[itemId].id === 8
                      ? "30px"
                      : EnemyCard[itemId].id === 9
                      ? "40px"
                      : EnemyCard[itemId].id === 10
                      ? "60px"
                      : EnemyCard[itemId].id === 11
                      ? "67px"
                      : EnemyCard[itemId].id === 12
                      ? "57px"
                      : EnemyCard[itemId].id === 13
                      ? "50px"
                      : EnemyCard[itemId].id === 14
                      ? "15px"
                      : EnemyCard[itemId].id === 15
                      ? "20px"
                      : EnemyCard[itemId].id === 16
                      ? "45px"
                      : EnemyCard[itemId].id === 17
                      ? "30px"
                      : EnemyCard[itemId].id === 18
                      ? "70px"
                      : EnemyCard[itemId].id === 19
                      ? "50px"
                      : EnemyCard[itemId].id === 20
                      ? "50px"
                      : EnemyCard[itemId].id === 21
                      ? "50px"
                      : EnemyCard[itemId].id === 22
                      ? "20px"
                      : EnemyCard[itemId].id === 23
                      ? "50px"
                      : EnemyCard[itemId].id === 24
                      ? "40px"
                      : EnemyCard[itemId].id === 25
                      ? "65px"
                      : EnemyCard[itemId].id === 26
                      ? "32px"
                      : EnemyCard[itemId].id === 27
                      ? "50px"
                      : EnemyCard[itemId].id === 28
                      ? "20px"
                      : EnemyCard[itemId].id === 29
                      ? "60px"
                      : EnemyCard[itemId].id === 30
                      ? "40px"
                      : "",
                  backgroundSize:
                    EnemyCard[itemId].id === 1
                      ? "300px"
                      : EnemyCard[itemId].id === 2
                      ? "300px"
                      : EnemyCard[itemId].id === 3
                      ? "120px"
                      : EnemyCard[itemId].id === 4
                      ? "200px"
                      : EnemyCard[itemId].id === 6
                      ? "160px"
                      : EnemyCard[itemId].id === 7
                      ? "200px"
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
                      ? "160px"
                      : EnemyCard[itemId].id === 28
                      ? "230px"
                      : EnemyCard[itemId].id === 29
                      ? "130px"
                      : "",
                  backgroundPositionX:
                    EnemyCard[itemId].id === 1
                      ? "-25px"
                      : EnemyCard[itemId].id === 2
                      ? "-55px"
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
                      ? "10px"
                      : EnemyCard[itemId].id === 28
                      ? "-10px"
                      : EnemyCard[itemId].id === 29
                      ? "21px"
                      : "",
                }}
              ></div>
              <div className="CardStatsIG">
                <div className="AttackPoints">{EnemyCard[itemId].Attack}</div>
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
