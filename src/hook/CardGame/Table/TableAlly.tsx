import { useEffect, useState } from "react";
import { AllyCard } from "../../../data/Card/Ally";

function TableAlly({
  selectedItemId,
  setSelectedItemId,
  HandleUseCard,
  setGetAP,
  setGetHP,
  RoundFor,
}: {
  selectedItemId: any;
  setSelectedItemId: any;
  HandleUseCard: any;
  setGetAP: any;
  setGetHP: any;
  RoundFor: any;
}) {
  const [selectedItems, setSelectedItems] = useState<(number | null)[]>([
    null,
    null,
    null,
    null,
  ]);

  const handlePlaceClick = (placeIndex: number) => {
    if (selectedItemId !== null) {
      if (selectedItems[placeIndex] !== null) {
        // Miejsce jest już zajęte, więc nie dodawaj przedmiotu
        return;
      }

      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems[placeIndex] = selectedItemId - 1;
      setSelectedItems(updatedSelectedItems);
      setSelectedItemId(null);
      HandleUseCard();
    }
  };

  const handleGetAP = (Ap: number) => {
    console.log(Ap);
    setGetAP(Ap);
  };

  const handleGetHP = (Hp: number) => {
    console.log(Hp);
    setGetHP(Hp);
  };
  const [allayAtack, setAllayAtack] = useState<any>([]);
  const [selectedCard, setselectedCard] = useState<any>();

  useEffect(() => {
    setAllayAtack(Array(selectedItems.length).fill(false));
  }, [selectedItems]);

  useEffect(() => {
    console.log(selectedCard);
    console.log("Wybrany przedmiot:", AllyCard[selectedCard]);
  }, [selectedCard]);

  const handleHeck = (index: number) => {
    if (allayAtack[index] !== undefined) {
      const selectedIndex = allayAtack.findIndex(
        (value: boolean) => value === true
      );

      if (selectedIndex !== -1) {
        setAllayAtack((prevArray: any) => {
          const newArray = [...prevArray];
          newArray[selectedIndex] = false;
          newArray[index] = true;
          return newArray;
        });
        setselectedCard(selectedItems[index]);
      } else {
        setAllayAtack((prevArray: any) => {
          const newArray = [...prevArray];
          newArray[index] = true;
          return newArray;
        });
        setselectedCard(selectedItems[index]);
      }
    }
  };

  return (
    <div className="Board">
      {selectedItems.map((itemId, index) => (
        <div
          className="CardOnBoard"
          key={index}
          onClick={() => {
            handlePlaceClick(index);
            handleGetAP(AllyCard[index].Atack);
            handleGetHP(AllyCard[index].Hp);
            handleHeck(index);
          }}
        >
          Miejsce {index + 1}:{" "}
          {itemId !== null ? (
            <div className="CardConteiner" key={itemId}>
              <div
                className="CardChar"
                style={{
                  backgroundColor: allayAtack[index] ? "green" : "red",
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
              <div className="CardName">{AllyCard[itemId].Name}</div>
              <div className="CardStats">
                <div className="AtackPoints">{AllyCard[itemId].Atack}</div>
                <div className="HpPoints">{AllyCard[itemId].Hp}</div>
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

export default TableAlly;
