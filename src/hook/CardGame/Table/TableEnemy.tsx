/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { EnemyCard } from "../../../data/Card/Enemy";

function TableEnemy({
  selectedItemIdE,
  setSelectedItemIdE,
  HandleUseCardE,
  setGetEAP,
  setGetEHP,
  RoundFor,
  CanBeUse,
  setCanBeUse,
}: {
  selectedItemIdE: any;
  setSelectedItemIdE: any;
  HandleUseCardE: any;
  setGetEAP: any;
  setGetEHP: any;
  RoundFor: any;
  CanBeUse: any;
  setCanBeUse: any;
}) {
  const [selectedItems, setSelectedItems] = useState<(number | null)[]>([
    null,
    null,
    null,
    null,
  ]);

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
  const [selectedCard, setselectedCard] = useState<any>();
  const [IndexSave, setIndexSave] = useState<any>();

  useEffect(() => {
    setEnemyAtack(Array(selectedItems.length).fill(false));
  }, [selectedItems]);

  useEffect(() => {
    console.log(selectedCard);
    console.log("Wybrany przedmiot:", EnemyCard[selectedCard]);
  }, [selectedCard]);

  useEffect(() => {
    console.log(IndexSave);
  }, [IndexSave]);

  const handleHeck = (index: number) => {
    setIndexSave(index);

    if (RoundFor === "enemy") {
      if (EnemyAtack[index] !== undefined) {
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
            // Wykonaj funkcję, jeśli element jest ustawiony na true
            // Tu możesz dodać swoją własną funkcję
            setCanBeUse("EnemyAtackAlly");

            console.log("Wykonaj funkcję dla elementu o indeksie", index);
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

  useEffect(() => {
    if (CanBeUse === "AllyAtackEnemy") {
      if (AllyAtackEnemy[IndexSave] !== undefined) {
        const selectedIndex = AllyAtackEnemy.findIndex(
          (value: boolean) => value === true
        );

        setAllyAtackEnemy((prevArray: any) => {
          const newArray = [...prevArray];
          if (selectedIndex !== -1) {
            newArray[selectedIndex] = false;
          }
          newArray[IndexSave] = true;
          if (newArray[IndexSave]) {
            // Wykonaj funkcję, jeśli element jest ustawiony na true
            // Tu możesz dodać swoją własną funkcję
            console.log("wybierz przeciwnika", IndexSave);
          }
          console.log(newArray[IndexSave]);
          return newArray;
        });
      }
    }
    console.log("a");
  }, [IndexSave, CanBeUse]);

  useEffect(() => {
    if (RoundFor === "ally") {
      setEnemyAtack(Array(selectedItems.length).fill(false));
      setselectedCard(undefined);
      setCanBeUse("s");
      setAllyAtackEnemy(Array(selectedItems.length).fill(false));
      setIndexSave(-1);
    }
  }, [RoundFor]);

  return (
    <div className="Board">
      {selectedItems.map((itemId, index) => (
        <div
          className="CardOnBoard"
          key={index}
          onClick={() => {
            handlePlaceClick(index);
            handleHeck(index);
          }}
        >
          Miejsce {index + 1}:{" "}
          {itemId !== null ? (
            <div className="CardConteiner" key={itemId}>
              <div
                className="CardChar"
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
              <div className="CardName">{EnemyCard[itemId].Name}</div>
              <div className="CardStats">
                <div className="AtackPoints">{EnemyCard[itemId].Atack}</div>
                <div className="HpPoints">{EnemyCard[itemId].Hp}</div>
              </div>
            </div>
          ) : (
            "Puste"
          )}
        </div>
      ))}
    </div>
  );
}

export default TableEnemy;