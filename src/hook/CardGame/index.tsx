import { useEffect, useState } from "react";
import "../../assets/css/Normal/CardGame/CardGame.css";
import HandAlly from "./HandCard/HandAlly";
import HandEnemy from "./HandCard/HandEnemy";
import { EnemyCard } from "../../data/Card/Enemy";
import { AllyCard } from "../../data/Card/Ally";
import TableAlly from "./Table/TableAlly";
import TableEnemy from "./Table/TableEnemy";
import { CharacterSelectionStart } from "../../data/character/character";
import { Console } from "console";

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

  //=======================================
  const [RoundFor, setRoundFor] = useState<string>("enemy");
  //=======================================

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
      if (RoundFor === "ally") {
        setRoundFor("enemy");
      }
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
      if (RoundFor === "enemy") {
        setRoundFor("ally");
      }
    }
  };

  const [AllyIdSelected, setAllyIdSelected] = useState<number>(0);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [selectedAllyItemId, setSelectedAllyItemId] = useState<number | null>(
    null
  );

  const [getAP, setGetAP] = useState<number>(0);
  const [getHP, setGetHP] = useState<number>(0);

  const HandleItemClick = (itemId: number) => {
    if (RoundFor === "ally") {
      setAllyIdSelected(itemId);
      setSelectedItemId(itemId);
    }
  };

  const HandleUseCard = (itemId: number) => {
    if (RoundFor === "ally") {
      const updatedRandomItems = randomItems.filter(
        (item: any) => item.id !== selectedItemId
      );
      setRandomItems(updatedRandomItems);
    }
  };
  //==========
  const [EnemyIdSelected, setEnemyIdSelected] = useState<number>(0);
  const [selectedItemIdE, setSelectedItemIdE] = useState<number | null>(null);
  const [selectedEnemyItemId, setSelectedEnemyItemId] = useState<number | null>(
    null
  );

  const [getEAP, setGetEAP] = useState<number>(0);
  const [getEHP, setGetEHP] = useState<number>(0);

  const HandleItemClickE = (itemId: number) => {
    if (RoundFor === "enemy") {
      setAllyIdSelected(itemId);
      setSelectedItemIdE(itemId);
    }
  };

  const HandleUseCardE = (itemId: number) => {
    if (RoundFor === "enemy") {
      const updatedRandomItems = randomItemsE.filter(
        (item: any) => item.id !== selectedItemIdE
      );
      setrandomItemsE(updatedRandomItems);
    }
  };

  //=============================================

  const [CanBeUse, setCanBeUse] = useState<any>();

  const [IdCardA, setIdCardA] = useState<any>();
  //======
  const [selectedItemsA, setselectedItemsA] = useState<(number | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ]);
  const [IndexSaveA, setIndexSaveA] = useState<any>();
  const [selectedCardA, setselectedCardA] = useState<any>();

  //====
  const [selectedItems, setSelectedItems] = useState<(number | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ]);
  const [IndexSaveE, setIndexSaveE] = useState<any>();
  const [selectedCard, setselectedCard] = useState<any>();

  const savedIdCharacter = localStorage.getItem("selectedCharacterID");

  //==========
  const [EnemyHp, setEnemyHp] = useState<number>(20);
  const [AllyHp, setAllyHp] = useState<number>(20);

  const hasNonNullValueE = selectedItems.some((item) => item !== null);

  const hasNonNullValueA = selectedItemsA.some((item) => item !== null);

  const HandleClickEnemyHp = () => {
    const CaedIdA = selectedItemsA[IndexSaveA];
    const AllyAtack = AllyCard[Number(CaedIdA)].Atack;

    setEnemyHp((prevHp) => prevHp - AllyAtack);
  };

  const HandleClickAllyHp = () => {
    const CaedIdE = selectedItems[IndexSaveE];
    const EnemyAtack = EnemyCard[Number(CaedIdE)].Atack;

    setAllyHp((prevHp) => prevHp - EnemyAtack);
  };

  useEffect(() => {
    if (EnemyHp <= 0) {
      console.log("Ally win");
    } else if (AllyHp <= 0) {
      console.log("Emeny win");
    } else {
    }
  }, [AllyHp, EnemyHp]);

  //========
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
              setGetEAP={setGetEAP}
              setGetEHP={setGetEHP}
              RoundFor={RoundFor}
              CanBeUse={CanBeUse}
              setCanBeUse={setCanBeUse}
              IdCardA={IdCardA}
              setselectedItemsA={setselectedItemsA}
              IndexSaveA={IndexSaveA}
              selectedCardA={selectedCardA}
              setSelectedItems={setSelectedItems}
              selectedItems={selectedItems}
              setIndexSaveE={setIndexSaveE}
              IndexSaveE={IndexSaveE}
              setselectedCard={setselectedCard}
              selectedCard={selectedCard}
            />
            <div className="mainMenu">
              <div className="MainCharCon">
                <div className="mainCharacter Enem">
                  <div className="BorderMC">
                    <div className="MCHP">{EnemyHp}</div>
                  </div>
                  <button
                    className="buttonTest"
                    onClick={HandleClickEnemyHp}
                    disabled={hasNonNullValueE === true}
                  >
                    test
                  </button>
                  <div className="EnemyChar"></div>
                </div>
                <div className="mainCharacter All">
                  <div className="BorderMC">
                    <div className="MCHP">{AllyHp}</div>
                  </div>
                  <button
                    className="buttonTest"
                    onClick={HandleClickAllyHp}
                    disabled={hasNonNullValueA === true}
                  >
                    test
                  </button>

                  {CharacterSelectionStart.filter(
                    (data: any) => data.id === Number(savedIdCharacter)
                  ).map((data: any) => (
                    <div className="CharCGBox">
                      <div
                        className="CharacterImgEqCG"
                        style={{
                          backgroundImage: `url(${data.image})`,
                          backgroundSize:
                            data.name === "Joanna"
                              ? "400px"
                              : data.name === "Zephyr"
                              ? "400px"
                              : data.name === "Nightfall"
                              ? "300px"
                              : data.name === "Merlin"
                              ? "300px"
                              : data.name === "Luna"
                              ? "300px"
                              : data.name === "Takeshi"
                              ? "280px"
                              : "",
                          backgroundPositionY:
                            data.name === "Joanna"
                              ? "-20px"
                              : data.name === "Zephyr"
                              ? "30px"
                              : data.name === "Merlin"
                              ? "20px"
                              : data.name === "Takeshi"
                              ? "20px"
                              : "",
                          backgroundPositionX:
                            data.name === "Takeshi" ? "-80px" : "",
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="NextRound"
                onClick={addRandomItemWithoutRepetition}
              >
                Next Round Move for:{RoundFor}
              </button>
            </div>

            <TableAlly
              selectedItemId={selectedItemId}
              setSelectedItemId={setSelectedItemId}
              HandleUseCard={HandleUseCard}
              setGetAP={setGetAP}
              setGetHP={setGetHP}
              RoundFor={RoundFor}
              CanBeUse={CanBeUse}
              setCanBeUse={setCanBeUse}
              setIdCardA={setIdCardA}
              selectedItemsA={selectedItemsA}
              setselectedItemsA={setselectedItemsA}
              setIndexSaveA={setIndexSaveA}
              IndexSaveA={IndexSaveA}
              setselectedCardA={setselectedCardA}
              selectedCardA={selectedCardA}
              setSelectedItems={setSelectedItems}
              selectedItems={selectedItems}
              IndexSaveE={IndexSaveE}
              selectedCard={selectedCard}
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
