/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "../../assets/css/Normal/CardGame/CardGame.css";
import HandAlly from "./HandCard/HandAlly";
import HandEnemy from "./HandCard/HandEnemy";
import { EnemyCard } from "../../data/Card/Enemy";
import { AllyCard } from "../../data/Card/Ally";
import TableAlly from "./Table/TableAlly";
import TableEnemy from "./Table/TableEnemy";
import { CharacterSelectionStart } from "../../data/character/character";

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

  //=======================================
  const [MaxMana, setMaxMana] = useState<number>(3);
  const [CurrentMana, setCurrentMana] = useState<number>(1);
  //=======================================

  const itemCount = randomItemsE.length;

  //==============
  useEffect(() => {
    const initialIndexes = Array.from({ length: 7 }, (_, index) => index);
    setremainingItemsE(initialIndexes);
  }, []);

  useEffect(() => {
    if (clickCountE === 3) {
      setMaxMana(4);
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [7, 8, 9];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
    if (clickCountE === 5) {
      setMaxMana(5);
    }
    if (clickCountE === 6) {
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [10, 11, 12];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
    if (clickCountE === 7) {
      setMaxMana(6);
    }
    if (clickCountE === 9) {
      setMaxMana(7);
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [13, 14, 15];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
    if (clickCountE === 11) {
      setMaxMana(8);
    }
    if (clickCountE === 12) {
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [16, 17, 18];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
    if (clickCountE === 13) {
      setMaxMana(9);
    }
    if (clickCountE === 15) {
      setMaxMana(10);
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
      setMaxMana(4);
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [7, 8, 9];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
    if (clickCountE === 5) {
      setMaxMana(5);
    }
    if (clickCount === 6) {
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [10, 11, 12];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
    if (clickCountE === 7) {
      setMaxMana(6);
    }
    if (clickCount === 9) {
      setMaxMana(7);
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [13, 14, 15];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
    if (clickCountE === 11) {
      setMaxMana(8);
    }
    if (clickCount === 12) {
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [16, 17, 18];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
    if (clickCountE === 13) {
      setMaxMana(9);
    }
    if (clickCount === 15) {
      setMaxMana(10);
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

  //check than bot have turn
  const [hasCodeExecuted, setHasCodeExecuted] = useState<number>(0);
  const [wylosowanoLiczbe, setWylosowanoLiczbe] = useState(false); // Dodajemy stan do śledzenia, czy już wylosowano liczbę

  const addRandomItemWithoutRepetition = () => {
    const newItemE = getRandomItemE();
    if (newItemE) {
      if (RoundFor === "ally") {
        setTimeout(() => {
          assignRandomValueToNull();
        }, 300);
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
          setCurrentMana((prevCM) => (prevCM === MaxMana ? prevCM : MaxMana));
        }
      }
      setOneTimeAEA(Array(selectedItems.length).fill(true));
    }
    const newItem = getRandomItem();
    //================
    if (newItem) {
      if (RoundFor === "enemy") {
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
          setCurrentMana((prevCM) => (prevCM === MaxMana ? prevCM : MaxMana));
        }
      }
      setOneTimeAAE(Array(selectedItems.length).fill(true));
    }
    setAllayAtack(Array(selectedItemsA.length).fill(false));
    setEnemyAtack(Array(selectedItems.length).fill(false));
    setIndexSaveE(-1);
    setselectedCardA(undefined);
    setCanBeUse("s");
    setEnemyAtackAlly(Array(selectedItemsA.length).fill(false));
    setIndexSaveA(-1);
    setHasCodeExecuted(0);
    setWylosowanoLiczbe(false);
  };

  useEffect(() => {
    setCurrentMana((prevCM) => (prevCM === MaxMana ? prevCM : MaxMana));
  }, [MaxMana]);

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

  const [OneTimeAAE, setOneTimeAAE] = useState<any>([]);
  const [OneTimeAEA, setOneTimeAEA] = useState<any>([]);

  const hasNonNullValueE = selectedItems.some((item) => item !== null);

  const hasNonNullValueA = selectedItemsA.some((item) => item !== null);

  const HandleClickEnemyHp = () => {
    const CaedIdA = selectedItemsA[IndexSaveA];
    const AllyAtack = AllyCard[Number(CaedIdA)].Atack;

    if (CanBeUse === "AllyAtackEnemy") {
      if (ACA === true) {
        setOneTimeAAE((prevArray: any) => {
          const newArray = [...prevArray];
          newArray[IndexSaveA] = false;
          return newArray;
        });

        if (OneTimeAAE[IndexSaveA] !== false) {
          setEnemyHp((prevHp) => prevHp - AllyAtack);
        }
      }
    }
  };
  const HandleClickAllyHp = () => {
    const CaedIdE = selectedItems[IndexSaveE];
    const EnemyAtack = EnemyCard[Number(CaedIdE)].Atack;

    if (CanBeUse === "EnemyAtackAlly") {
      if (ECA === true) {
        setOneTimeAEA((prevArray: any) => {
          const newArray = [...prevArray];
          newArray[IndexSaveE] = false;
          return newArray;
        });
        if (OneTimeAEA[IndexSaveE] !== false) {
          setAllyHp((prevHp) => prevHp - EnemyAtack);
        }
      }
    }
  };

  useEffect(() => {
    if (EnemyHp <= 0) {
      console.log("Ally win");
    } else if (AllyHp <= 0) {
      console.log("Emeny win");
    } else {
    }
  }, [AllyHp, EnemyHp]);

  const [ACA, setACA] = useState<boolean>(false);
  const [ECA, setECA] = useState<boolean>(false);

  const Test = () => {
    setACA(false);
  };

  const EA = () => {
    setECA(false);
  };

  //=========bot

  const [BotSelectCard, setBotSelectCard] = useState<any>();
  const [EnemyAtack, setEnemyAtack] = useState<any>([]);

  const assignRandomValueToNull = () => {
    const minValue = 0;
    const maxValue = itemCount;
    const randomValueCard =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    const freeIndexes = selectedItems.reduce(
      (acc: any, item: any, index: any) => {
        if (item === null) acc.push(index);
        return acc;
      },
      []
    );

    if (freeIndexes.length === 0) {
      //console.log("Brak wolnych miejsc do przypisania.");
      return;
    }

    const randomIndex =
      freeIndexes[Math.floor(Math.random() * freeIndexes.length)];
    const updateArray = [...randomItemsE];
    let randomValue = updateArray[randomValueCard].id - 1;

    setBotSelectCard(randomValue);

    const updatedItems = [...selectedItems];
    updatedItems[randomIndex] = randomValue;
    setSelectedItems(updatedItems);
    //console.log(`Przypisano wartość ${randomValue} do indeksu ${randomIndex}.`);

    //console.log(randomItemsE[randomValueCard].id - 1);
    console.log(randomItemsE[randomValueCard].id + "T");
  };
  //========================================================
  const idToRemove = BotSelectCard + 1;

  // Szukamy indeksu elementu o podanym id
  const indexToRemove = randomItemsE.findIndex(
    (item: { id: number }) => item.id === idToRemove
  );

  // Jeśli znaleziono element o podanym id, usuwamy go z tablicy
  if (indexToRemove !== -1) {
    randomItemsE.splice(indexToRemove, 1);
  }

  //==== random number from ally table
  const [randomN, setRandomN] = useState<any>();

  // Funkcja, która wypisuje losową liczbę z dostępnych elementów tablicy.
  function wypiszLosowaLiczbeZTablicy(tablica: any[]) {
    // Generujemy losowy indeks od 0 do 4 (czyli długość tablicy minus 1).
    const losowyIndeksT = Math.floor(Math.random() * tablica.length);
    setRandomN(losowyIndeksT);
  }
  useEffect(() => {
    wypiszLosowaLiczbeZTablicy(selectedItemsA);
  }, [selectedItemsA]);

  //==== random number from enemy table
  const [randomNE, setRandomNE] = useState<any>();

  // Funkcja, która wypisuje losową liczbę z dostępnych elementów tablicy.
  function wypiszLosowaLiczbeZTablicyE(tablica: any[]) {
    // Generujemy losowy indeks od 0 do 4 (czyli długość tablicy minus 1).
    if (!wylosowanoLiczbe) {
      // Sprawdzamy, czy jeszcze nie wylosowano liczby
      const losowyIndeksE = Math.floor(Math.random() * tablica.length);
      setRandomNE(losowyIndeksE);
      setWylosowanoLiczbe(true); // Ustawiamy stan, że wylosowano liczbę
    }
  }

  const [numberForColor, setNumberForColor] = useState<number>();

  useEffect(() => {
    wypiszLosowaLiczbeZTablicyE(selectedItems);
    if (hasCodeExecuted < 1) {
      if (RoundFor === "enemy") {
        setNumberForColor(randomNE);
        if (selectedItems[randomNE] !== null && !EnemyAtack[randomNE]) {
          const selectedIndex = EnemyAtack.findIndex(
            (value: boolean) => value === true
          );

          setEnemyAtack((prevArray: any) => {
            const newArray = [...prevArray];
            if (selectedIndex !== -1) {
              newArray[selectedIndex] = false;
            }
            newArray[randomNE] = true;
            if (newArray[randomNE]) {
              setCanBeUse("EnemyAtackAlly");
              setECA(true);
            }
            BotAtackEnemy();
            console.log("trest");
            return newArray;
          });
          setselectedCard(selectedItems[randomNE]);
        }
      }
    }
  }, [RoundFor]);

  // bot atack enemy

  const [EnemyAtackAlly, setEnemyAtackAlly] = useState<any>([]);
  const [allayAtack, setAllayAtack] = useState<any>([]);

  const BotAtackEnemy = () => {
    const indexBotAllySelect = randomNE;
    console.log(CanBeUse);
    if (hasCodeExecuted < 2) {
      if (CanBeUse === "EnemyAtackAlly") {
        if (EnemyAtackAlly[indexBotAllySelect] !== undefined) {
          const selectedIndex = EnemyAtackAlly.findIndex(
            (value: boolean) => value === true
          );

          setEnemyAtackAlly((prevArray: any) => {
            const newArray = [...prevArray];
            if (selectedIndex !== -1) {
              newArray[selectedIndex] = false;
            }
            newArray[indexBotAllySelect] = true;
            if (newArray[indexBotAllySelect]) {
              const CaedIdA = selectedItemsA[indexBotAllySelect];
              console.log(
                EnemyCard[selectedCard].Name + AllyCard[indexBotAllySelect].Name
              );
              if (selectedItemsA[indexBotAllySelect] !== null) {
                EnemyCard[selectedCard].Hp -= AllyCard[Number(CaedIdA)].Atack;
                AllyCard[Number(CaedIdA)].Hp -= EnemyCard[selectedCard].Atack;
                //

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
                    newItems[indexBotAllySelect] = null;
                    return newItems;
                  });
                }
                setOneTimeAEA((prevArray: any) => {
                  const newArray = [...prevArray];
                  newArray[IndexSaveE] = false;
                  return newArray;
                });
              }
            }
            setHasCodeExecuted((prevCount) => prevCount + 1);
            return newArray;
          });
        }
      } else {
        return;
      }
    }
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
              setECA={setECA}
              setOneTimeAAE={setOneTimeAAE}
              setOneTimeAEA={setOneTimeAEA}
              EnemyIdSelected={EnemyIdSelected}
              CurrentMana={CurrentMana}
              setCurrentMana={setCurrentMana}
              setEnemyAtack={setEnemyAtack}
              EnemyAtack={EnemyAtack}
              randomNE={randomNE}
            />
            <div className="mainMenu">
              <div className="MainCharCon">
                <div className="mainCharacter Enem">
                  <div className="BorderMC">
                    <div className="MCHP">{EnemyHp}</div>
                  </div>
                  <button
                    className="buttonTest"
                    onClick={(e) => {
                      Test();
                      HandleClickEnemyHp();
                    }}
                    disabled={hasNonNullValueE === true && ACA === false}
                  >
                    tests
                  </button>
                  <div className="EnemyChar"></div>
                </div>
                <div className="mainCharacter All">
                  <div className="BorderMC">
                    <div className="MCHP">{AllyHp}</div>
                  </div>
                  <button
                    className="buttonTest"
                    onClick={(e) => {
                      EA();
                      HandleClickAllyHp();
                    }}
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
              <div>
                <div
                  className="Mana"
                  style={{
                    backgroundImage: `url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/CardGame/Crystal/${CurrentMana}on10.gif)`,
                  }}
                >
                  <button
                    className="NextRound"
                    onClick={(e) => {
                      addRandomItemWithoutRepetition();
                    }}
                  >
                    <p>Next</p>
                  </button>
                </div>
                <div className="crystal0"></div>
              </div>
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
              setACA={setACA}
              setOneTimeAAE={setOneTimeAAE}
              setOneTimeAEA={setOneTimeAEA}
              CurrentMana={CurrentMana}
              setCurrentMana={setCurrentMana}
              AllyIdSelected={AllyIdSelected}
              EnemyAtackAlly={EnemyAtackAlly}
              setEnemyAtackAlly={setEnemyAtackAlly}
              allayAtack={allayAtack}
              setAllayAtack={setAllayAtack}
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

// do zatrzymania funkcja jakas ktora powtarza wybrany przedmiot zawsze atakuje pierwszy wybrany
