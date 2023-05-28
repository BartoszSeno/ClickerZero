import { useEffect, useState } from "react";
import "../../assets/css/Normal/CardGame/CardGame.css";
import HandAlly from "./HandCard/HandAlly";
import HandEnemy from "./HandCard/HandEnemy";
import { EnemyCard } from "../../data/Card/Enemy";
import { AllyCard } from "../../data/Card/Ally";
import TableAlly from "./Table/TableAlly";
import TableEnemy from "./Table/TableEnemy";

function CardGame({
  OpenCardGame,
  setOpenCardGame,
}: {
  OpenCardGame: boolean;
  setOpenCardGame: any;
}) {
  const [CardGameIsOpen, setCardGameIsOpen] = useState<boolean>(true);

  function CloseCardGame() {
    setOpenCardGame(false);
  }
  //=====================
  const [randomItemsE, setrandomItemsE] = useState<any>([]);
  const [remainingItemsE, setremainingItemsE] = useState<number[]>([]);
  const [clickCountE, setclickCountE] = useState<number>(0);

  useEffect(() => {
    const initialIndexes = Array.from({ length: 7 }, (_, index) => index);
    setremainingItemsE(initialIndexes);
  }, []);

  useEffect(() => {
    if (clickCountE === 3) {
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [7, 8, 9];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
    if (clickCountE === 6) {
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [10, 11, 12];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
    if (clickCountE === 9) {
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [13, 14, 15];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
    if (clickCountE === 12) {
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [16, 17, 18];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
    if (clickCountE === 15) {
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [19, 20, 21];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
  }, [clickCountE]);

  // Sprawdzenie, czy przedmiot już został wylosowany
  const isItemAlreadySelectedE = (item: any): boolean => {
    return randomItemsE.includes(item);
  };

  // Losowanie przedmiotu bez powtórzeń z ograniczonym zakresem
  const getRandomItemE = (): any | undefined => {
    const availableIndexes = remainingItemsE.filter(
      (index) => !isItemAlreadySelectedE(EnemyCard[index])
    );
    if (availableIndexes.length === 0) {
      console.log("Brak dostępnych przedmiotów.");
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * availableIndexes.length);
    const index = availableIndexes[randomIndex];
    return EnemyCard[index];
  };

  //=====================
  const [randomItems, setRandomItems] = useState<any>([]);
  const [remainingItems, setRemainingItems] = useState<number[]>([]);
  const [clickCount, setClickCount] = useState<number>(0);

  useEffect(() => {
    const allyCardItems = AllyCard;
    const initialIndexes = Array.from({ length: 7 }, (_, index) => index);
    setRemainingItems(initialIndexes);
  }, []);

  useEffect(() => {
    if (clickCount === 3) {
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [7, 8, 9];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
    if (clickCount === 6) {
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [10, 11, 12];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
    if (clickCount === 9) {
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [13, 14, 15];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
    if (clickCount === 12) {
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [16, 17, 18];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
    if (clickCount === 15) {
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [19, 20, 21];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
  }, [clickCount]);

  // Sprawdzenie, czy przedmiot już został wylosowany
  const isItemAlreadySelected = (item: any): boolean => {
    return randomItems.includes(item);
  };

  // Losowanie przedmiotu bez powtórzeń z ograniczonym zakresem
  const getRandomItem = (): any | undefined => {
    const availableIndexes = remainingItems.filter(
      (index) => !isItemAlreadySelected(AllyCard[index])
    );
    if (availableIndexes.length === 0) {
      console.log("Brak dostępnych przedmiotów.");
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * availableIndexes.length);
    const index = availableIndexes[randomIndex];
    return AllyCard[index];
  };

  const addRandomItemWithoutRepetition = () => {
    const newItemE = getRandomItemE();
    if (newItemE) {
      setrandomItemsE((prevItems: any) => [...prevItems, newItemE]);
      setremainingItemsE((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        const itemIndex = EnemyCard.findIndex((item) => item === newItemE);
        if (itemIndex !== -1) {
          const remainingIndex = newIndexes.findIndex(
            (index) => index === itemIndex
          );
          if (remainingIndex !== -1) {
            newIndexes.splice(remainingIndex, 1);
          }
        }
        return newIndexes;
      });
      setclickCountE((prevCount) => prevCount + 1);
    }
    const newItem = getRandomItem();
    //================
    if (newItem) {
      setRandomItems((prevItems: any) => [...prevItems, newItem]);
      setRemainingItems((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        const itemIndex = AllyCard.findIndex((item) => item === newItem);
        if (itemIndex !== -1) {
          const remainingIndex = newIndexes.findIndex(
            (index) => index === itemIndex
          );
          if (remainingIndex !== -1) {
            newIndexes.splice(remainingIndex, 1);
          }
        }
        return newIndexes;
      });
      setClickCount((prevCount) => prevCount + 1);
    }
  };
  //=======================================

  const [AllyIdSelected, setAllyIdSelected] = useState<number>(0);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const HandleItemClick = (itemId: number) => {
    setAllyIdSelected(itemId);
    setSelectedItemId(itemId);
  };

  const HandleUseCard = (itemId: number) => {
    const updatedRandomItems = randomItems.filter(
      (item: any) => item.id !== selectedItemId
    );
    setRandomItems(updatedRandomItems);
  };
  //==========
  const [EnemyIdSelected, setEnemyIdSelected] = useState<number>(0);
  const [selectedItemIdE, setSelectedItemIdE] = useState<number | null>(null);

  const HandleItemClickE = (itemId: number) => {
    setAllyIdSelected(itemId);
    setSelectedItemIdE(itemId);
  };

  const HandleUseCardE = (itemId: number) => {
    const updatedRandomItems = randomItemsE.filter(
      (item: any) => item.id !== selectedItemIdE
    );
    setrandomItemsE(updatedRandomItems);
  };
  return (
    <>
      <div
        id="CardGame"
        style={{ display: OpenCardGame ? "flex" : "none" }}
        onClick={(e) => {
          e.stopPropagation();
          CloseCardGame();
        }}
      >
        <div
          className="CardGameG"
          style={{ display: CardGameIsOpen ? "flex" : "none" }}
          onClick={(e) => {
            e.stopPropagation();
            setCardGameIsOpen(true);
          }}
        >
          <div className="CloseGameP">
            <button
              className="CloseGame"
              onClick={(e) => {
                e.stopPropagation();
                CloseCardGame();
              }}
            >
              X
            </button>
          </div>
          <div className="GameCP">
            <HandEnemy
              randomItemsE={randomItemsE}
              setEnemyIdSelected={setEnemyIdSelected}
              HandleItemClickE={HandleItemClickE}
            />
            <TableEnemy
              selectedItemIdE={selectedItemIdE}
              setSelectedItemIdE={setSelectedItemIdE}
              HandleUseCardE={HandleUseCardE}
            />

            <button onClick={addRandomItemWithoutRepetition}>Next Round</button>

            <TableAlly
              selectedItemId={selectedItemId}
              setSelectedItemId={setSelectedItemId}
              HandleUseCard={HandleUseCard}
            />
            <HandAlly
              HandleItemClick={HandleItemClick}
              randomItems={randomItems}
              setAllyIdSelected={setAllyIdSelected}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardGame;
