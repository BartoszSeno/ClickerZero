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

  //for block move the same card multiple times
  const [usedIndexSaveAValues, setUsedIndexSaveAValues] = useState<any>([]);
  const [usedIndexSaveEValues, setUsedIndexSaveEValues] = useState<any>([]);

  const itemCount = randomItemsE.length;

  //==============
  useEffect(() => {
    const initialIndexes = Array.from({ length: 9 }, (_, index) => index);
    setremainingItemsE(initialIndexes);
  }, []);

  useEffect(() => {
    if (clickCountE === 5) {
      setMaxMana(4);
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [9, 10, 11, 12, 13];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
    if (clickCountE === 7) {
      setMaxMana(5);
    }
    if (clickCountE === 9) {
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [14, 15, 16, 17];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
    if (clickCountE === 11) {
      setMaxMana(6);
    }
    if (clickCountE === 13) {
      setMaxMana(7);
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [18, 19, 20];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
    if (clickCountE === 15) {
      setMaxMana(8);
    }
    if (clickCountE === 17) {
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [21, 22, 23];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
    if (clickCountE === 18) {
      setMaxMana(9);
    }
    if (clickCountE === 20) {
      setMaxMana(10);
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [24, 25, 26];
        return [...prevremainingItemsE, ...additionalIndexes];
      });
    }
    if (clickCountE === 16) {
      setremainingItemsE((prevremainingItemsE) => {
        const additionalIndexes = [27, 28, 29, 30];
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
    const initialIndexes = Array.from({ length: 9 }, (_, index) => index);
    setRemainingItems(initialIndexes);
  }, []);

  useEffect(() => {
    if (clickCount === 3) {
      setMaxMana(4);
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [9, 10, 11, 12, 13];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
    if (clickCountE === 5) {
      setMaxMana(5);
    }
    if (clickCount === 6) {
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [14, 15, 16, 17];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
    if (clickCountE === 7) {
      setMaxMana(6);
    }
    if (clickCount === 9) {
      setMaxMana(7);
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [18, 19, 20];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
    if (clickCountE === 11) {
      setMaxMana(8);
    }
    if (clickCount === 12) {
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [21, 22, 23];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
    if (clickCountE === 13) {
      setMaxMana(9);
    }
    if (clickCount === 15) {
      setMaxMana(10);
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [24, 25, 26];
        return [...prevRemainingItems, ...additionalIndexes];
      });
    }
    if (clickCount === 16) {
      setRemainingItems((prevRemainingItems) => {
        const additionalIndexes = [27, 28, 29, 30];
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
      //rounnd for Enemy
      if (RoundFor === "ally") {
        if (randomItemsE.length <= 5) {
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
              console.log(remainingIndex, "Sss");
            }
            return newIndexes;
          });
        } else {
        }
        setBotAtackAllay(false);

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
    //Round for ally
    if (newItem) {
      if (RoundFor === "enemy") {
        if (randomItems.length <= 5) {
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
        } else {
        }

        setClickCount((prevCount) => prevCount + 1);
        if (RoundFor === "enemy") {
          setRandomIndexEnemy(undefined);
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
    setUsedIndexSaveAValues([]);
    setUsedIndexSaveEValues([]);
  };

  useEffect(() => {
    if (RoundFor === "enemy") {
      setTimeout(() => {
        assignRandomValueToNull();
      }, 300);
    }
  }, [RoundFor]);

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
    const CaedIdE = EnemyCard[randomIndexEnemy].id - 1;
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
  const [NoMana, setNoMana] = useState(true);

  const assignRandomValueToNull = () => {
    const minValue = 0;
    const maxValue = itemCount;
    const randomValueCard =
      Math.floor(Math.random() * (maxValue - minValue)) + minValue;

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

    // Create deep copies of updateArray and randomItemsE
    const updateArray = [...randomItemsE.map((item: any) => ({ ...item }))];

    // Sprawdź, czy istnieją przedmioty w updateArray z wystarczającą ilością Many
    const itemsWithEnoughMana = updateArray.filter(
      (item) => item.Mana <= CurrentMana
    );

    if (itemsWithEnoughMana.length > 0) {
      // Jeśli są dostępne przedmioty z wystarczającą ilością Many
      const randomItem =
        itemsWithEnoughMana[
          Math.floor(Math.random() * itemsWithEnoughMana.length)
        ];

      const randomValue = randomItem.id - 1;

      setBotSelectCard(randomValue);

      const updatedItems = [...selectedItems];
      updatedItems[randomIndex] = randomValue;

      setCurrentMana((prevCM: number) => prevCM - randomItem.Mana);
      setSelectedItems(updatedItems);
      setNoMana(false);
    } else {
      setNoMana(true);
      console.log("brak many");
    }
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
  const [randomIndex, setRandomIndex] = useState<any>();

  // Funkcja, która wypisuje losowy indeks dostępnego elementu z tablicy.
  function wypiszLosowyIndeksZTablicy(tablica: any[]) {
    // Filtrujemy tablicę, aby uzyskać indeksy dostępnych elementów (nie-null).
    const dostepneIndeksy = tablica
      .map((element, index) => (element !== null ? index : null))
      .filter((index) => index !== null) as number[];

    if (dostepneIndeksy.length > 0) {
      // Generujemy losowy indeks z dostępnych indeksów.
      const losowyIndeks =
        dostepneIndeksy[Math.floor(Math.random() * dostepneIndeksy.length)];
      setRandomIndex(losowyIndeks);
    } else {
      //tutaj dodac funkcje ktora atakuje główną postać
      setRandomIndex(null); // W przypadku, gdy nie ma dostępnych elementów.
    }
  }

  useEffect(() => {
    wypiszLosowyIndeksZTablicy(selectedItemsA);
  }, [selectedItemsA]);

  const [numberForColor, setNumberForColor] = useState<number>();

  const [BotAtackAllay, setBotAtackAllay] = useState<boolean>(false);

  const [randomIndexEnemy, setRandomIndexEnemy] = useState<any>(); // bot index

  //==== random number from enemy table

  function wypiszLosowyIndeksZTablicyEnemy(tablica: any[]) {
    // Filtrujemy tablicę, aby uzyskać indeksy dostępnych elementów (nie-null).
    const dostepneIndeksy = tablica
      .map((element, index) => (element !== null ? index : null))
      .filter((index) => index !== null) as number[];

    if (dostepneIndeksy.length > 0) {
      // Generujemy losowy indeks z dostępnych indeksów.
      const losowyIndeks =
        dostepneIndeksy[Math.floor(Math.random() * dostepneIndeksy.length)];
      setRandomIndexEnemy(losowyIndeks);
    } else {
      //tutaj dodac funkcje ktora atakuje główną postać
      setRandomIndexEnemy(null); // W przypadku, gdy nie ma dostępnych elementów.
    }
  }
  useEffect(() => {
    wypiszLosowyIndeksZTablicyEnemy(selectedItems);
  }, [RoundFor === "enemy"]);

  useEffect(() => {
    setTimeout(() => {
      const allNull = selectedItemsA.every((item) => item === null);
      if (hasCodeExecuted < 1) {
        if (RoundFor === "enemy") {
          setNumberForColor(randomIndexEnemy);
          if (
            selectedItems[randomIndexEnemy] !== null &&
            !EnemyAtack[randomIndexEnemy]
          ) {
            const selectedIndex = EnemyAtack.findIndex(
              (value: boolean) => value === true
            );

            setEnemyAtack((prevArray: any) => {
              const newArray = [...prevArray];
              if (selectedIndex !== -1) {
                newArray[selectedIndex] = false;
              }
              newArray[randomIndexEnemy] = true;
              if (newArray[randomIndexEnemy]) {
                setCanBeUse("EnemyAtackAlly");
                setECA(true);
                setselectedCard(selectedItems[randomIndexEnemy]);
                setBotAtackAllay(true);
              }
              return newArray;
            });
          }
          if (allNull) {
            //tutaj jedna z opcji atakowania
          }
        }
      }
    }, 500);
  }, [RoundFor]);

  // bot atack enemy

  const [EnemyAtackAlly, setEnemyAtackAlly] = useState<any>([]);
  const [allayAtack, setAllayAtack] = useState<any>([]);

  // block bot move

  function isIndexSaveEUsed(value: any) {
    return usedIndexSaveEValues.includes(value);
  }

  useEffect(() => {
    const allNull = selectedItemsA.every((item) => item === null);

    if (RoundFor === "enemy") {
      if (allNull) {
        setTimeout(() => {
          HandleClickAllyHp();
        }, 1000);
      }
    }
  }, [RoundFor, CanBeUse]);

  const [itsFirstRoudn, setItsFirstRound] = useState<boolean>(true);

  useEffect(() => {
    const indexBotAllySelect = randomIndex;
    const indexBotEnemySelect = randomIndexEnemy;
    const CaedIdA = selectedItemsA[indexBotAllySelect];
    const cardIdE = selectedItems[indexBotEnemySelect];
    setAllyIndexForAnimation(indexBotAllySelect);

    setTimeout(() => {
      if (selectedItemsA.some((item) => item !== null)) {
        if (CanBeUse === "EnemyAtackAlly") {
          if (itsFirstRoudn === false) {
            if (indexBotEnemySelect !== undefined) {
              if (!isIndexSaveEUsed(EnemyCard[Number(cardIdE)])) {
                if (EnemyAtack[indexBotEnemySelect] !== undefined) {
                  const selectedIndex = EnemyAtack.findIndex(
                    (value: boolean) => value === true
                  );

                  setEnemyAtack((prevArray: any) => {
                    const newArray = [...prevArray];
                    if (selectedIndex !== -1) {
                      newArray[selectedIndex] = false;
                    }
                    newArray[indexBotAllySelect] = true;
                    if (newArray[indexBotAllySelect]) {
                      //

                      //
                      if (selectedItemsA[indexBotAllySelect] !== null) {
                        EnemyCard[Number(cardIdE)].Hp -=
                          AllyCard[Number(CaedIdA)].Atack;
                        AllyCard[Number(CaedIdA)].Hp -=
                          EnemyCard[Number(cardIdE)].Atack;

                        if (EnemyCard[Number(cardIdE)].Hp <= 0) {
                          setSelectedItems((prevItems: any[]) => {
                            const newItemsE = [...prevItems];
                            newItemsE[indexBotEnemySelect] = null;
                            return newItemsE;
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
                          newArray[indexBotEnemySelect] = false;
                          return newArray;
                        });
                      }
                    }
                    setHasCodeExecuted((prevCount) => prevCount + 1);
                    if (hasCodeExecuted <= 5) {
                      NextMoveBot();
                      setHasCodeExecuted(0);
                    }
                    setBotAtackAllay(false);
                    setselectedCard(undefined);
                    setIndexSaveE(undefined);
                    setRandomIndexEnemy(undefined);
                    setTimeout(() => {
                      setAllyIndexForAnimation(undefined);
                    }, 2000);
                    return newArray;
                  });
                } else {
                }
              } else {
                return;
              }
            }
          }
          setItsFirstRound(false);
        }
      }
    }, 500);
  }, [BotAtackAllay]);

  useEffect(() => {
    NextMoveBot();
  }, [NoMana]);

  function NextMoveBot() {
    setTimeout(() => {
      if (NoMana === false) {
        assignRandomValueToNull();
        setBotAtackAllay(!BotAtackAllay);
      }
    }, 1000);
  }

  const [EnemyIndexForAnimation, setEnemyIndexForAnimation] =
    useState<number>();

  const [AllyIndexForAnimation, setAllyIndexForAnimation] = useState<number>();

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
              setIndexSaveA={setIndexSaveA}
              selectedCardA={selectedCardA}
              setselectedCardA={setselectedCardA}
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
              setUsedIndexSaveAValues={setUsedIndexSaveAValues}
              usedIndexSaveAValues={usedIndexSaveAValues}
              setEnemyIndexForAnimation={setEnemyIndexForAnimation}
              AllyIndexForAnimation={AllyIndexForAnimation}
              randomIndexEnemy={randomIndexEnemy}
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

                  {CharacterSelectionStart.filter(
                    (data: any) => data.id === Number(savedIdCharacter)
                  ).map((data: any) => (
                    <div className="CharCGBox" key={data.id}>
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
              EnemyIndexForAnimation={EnemyIndexForAnimation}
              setAllyIndexForAnimation={setAllyIndexForAnimation}
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

// do naprawy złe odejmowanie hp
// dodać atakowanie głownej postaci
// tabliczke wygrana / przegrana
// dodać nagrody za wygraną
