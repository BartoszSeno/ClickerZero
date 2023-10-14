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
  const [RoundForNew, setRoundForNew] = useState<string>("enemy");
  const [ButtonIsDisabled, setButtonIsDisabled] = useState<boolean>(false);

  //=======================================

  const [randomItemsE, setrandomItemsE] = useState<any>([]);
  const [remainingItemsE, setremainingItemsE] = useState<number[]>([]);
  const [clickCountE, setclickCountE] = useState<number>(0);

  //=======================================
  const [MaxMana, setMaxMana] = useState<number>(3);
  const [CurrentMana, setCurrentMana] = useState<number>(1);
  //=======================================

  //for block move the same card multiple times
  const [SelectedIndexBTM, setSelectedIndexBTM] = useState<any>();
  const [usedIndexSaveAValues, setUsedIndexSaveAValues] = useState<any>([]);
  const [usedIndexSaveEValues, setUsedIndexSaveEValues] = useState<
    (boolean | null)[]
  >([null, null, null, null, null]);

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
  const [BotAtackAgain, setBotAtackAgain] = useState(false);
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
            }
            return newIndexes;
          });
        } else {
        }
        setBotAttackAllay(false);

        setclickCountE((prevCount) => prevCount + 1);
        if (RoundFor === "ally") {
          setRoundFor("enemy");
          setRoundForNew("enemy");
          setButtonIsDisabled(true);
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
          setSelectedIndexBTM(undefined);
          setRoundFor("ally");
          setRoundForNew("ally");
          setCurrentMana((prevCM) => (prevCM === MaxMana ? prevCM : MaxMana));
          setButtonIsDisabled(false);
        }
      }
      setOneTimeAAE(Array(selectedItems.length).fill(true));
    }
    setAllayAttack(Array(selectedItemsA.length).fill(false));
    setEnemyAttack(Array(selectedItems.length).fill(false));
    setClickedItems(Array(clickedItems.length).fill(false));
    setSelectedIndexBTM(null);
    setIndexSaveE(-1);
    setselectedCardA(undefined);
    setCanBeUse("s");
    setEnemyAttackAlly(Array(selectedItemsA.length).fill(false));
    setIndexSaveA(-1);
    setHasCodeExecuted(0);
    setWylosowanoLiczbe(false);
    setUsedIndexSaveAValues([]);

    const updatedUsedIndexSaveEValues = usedIndexSaveEValues.map(
      (value, index) => {
        if (selectedItems[index] === null) {
          return null;
        } else if (selectedItems[index] !== null) {
          return false;
        }
        return value;
      }
    );
    setUsedIndexSaveEValues(updatedUsedIndexSaveEValues);
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
    const AllyAttack = AllyCard[Number(CaedIdA)].Attack;

    if (CanBeUse === "AllyAttackEnemy") {
      if (ACA === true) {
        setOneTimeAAE((prevArray: any) => {
          const newArray = [...prevArray];
          newArray[IndexSaveA] = false;
          return newArray;
        });

        if (OneTimeAAE[IndexSaveA] !== false) {
          setEnemyHp((prevHp) => prevHp - AllyAttack);
        }
      }
    }
  };

  const HandleClickAllyHp = () => {
    const indexBotEnemySelect = SelectedIndexBTM;
    const cardIdE = selectedItems[indexBotEnemySelect];
    const EnemyAttack = EnemyCard[Number(cardIdE)].Attack;

    if (CanBeUse === "EnemyAttackAlly") {
      if (ECA === true) {
        // Sprawdź, czy wartość dla konkretnego indeksu jest równa false lub null
        if (
          usedIndexSaveEValues[SelectedIndexBTM] === false ||
          usedIndexSaveEValues[SelectedIndexBTM] === null
        ) {
          // Stwórz nową kopię tablicy usedIndexSaveEValues
          const updatedValues = [...usedIndexSaveEValues];
          // Ustaw wartość na true tylko dla wybranego indeksu
          updatedValues[SelectedIndexBTM] = true;
          // Zaktualizuj stan komponentu za pomocą setUsedIndexSaveEValues
          setUsedIndexSaveEValues(updatedValues);
          setAllyHp((prevHp) => prevHp - EnemyAttack);
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

  const [clickedItems, setClickedItems] = useState<any>(
    selectedItemsA.map((item) => item !== null)
  );

  const [EnemyIndexForAnimation, setEnemyIndexForAnimation] =
    useState<number>();

  useEffect(() => {
    if (typeof EnemyIndexForAnimation === "number") {
      // Tworzymy kopię tablicy clickedItems, aby nie modyfikować jej bezpośrednio
      const updatedClickedItems = [...clickedItems];

      // Ustawiamy wartość dla danego elementu na true
      updatedClickedItems[IndexSaveA] = true;

      // Uaktualniamy stan clickedItems
      setClickedItems(updatedClickedItems);
    }
  }, [IndexSaveA, EnemyIndexForAnimation]);

  useEffect(() => {
    const updatedClickedItems = [...clickedItems];

    const updatedSelectedItemsA = updatedClickedItems.map((value, index) => {
      if (selectedItemsA[index] === null) {
        return false;
      }
      return value;
    });
    setClickedItems(updatedSelectedItemsA);
  }, [selectedItemsA]);

  //=========bot

  const [BotSelectCard, setBotSelectCard] = useState<any>();
  const [EnemyAttack, setEnemyAttack] = useState<any>([]);
  const [NoMana, setNoMana] = useState(true);
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [IniciateBotMove, setIniciateBotMove] = useState(false);

  useEffect(() => {
    setButtonClickCount(buttonClickCount + 1);
  }, [IniciateBotMove]);

  useEffect(() => {
    const dostepneIndeksy = selectedItems
      .map((element, index) =>
        element !== null && !usedIndexSaveEValues[index] ? index : null
      )
      .filter((index) => index !== null) as number[];

    if (dostepneIndeksy.length > 0) {
      const losowyIndeks =
        dostepneIndeksy[Math.floor(Math.random() * dostepneIndeksy.length)];
      setSelectedIndexBTM(losowyIndeks);
    } else {
      setSelectedIndexBTM(null);
    }
  }, [buttonClickCount]);

  const assignRandomValueToNull = () => {
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

    if (RoundForNew === "enemy") {
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

        const updatedValues = [...usedIndexSaveEValues];
        // Ustaw wartość na false tylko dla wybranego indeksu
        updatedValues[randomIndex] = false;
        // Zaktualizuj stan komponentu za pomocą setUsedIndexSaveEValues
        setUsedIndexSaveEValues(updatedValues);

        setCurrentMana((prevCM: number) => prevCM - randomItem.Mana);
        setSelectedItems(updatedItems);
        setNoMana(false);
      }
    }
  };
  //========================================================
  const idToRemove = BotSelectCard + 1;

  useEffect(() => {
    if (RoundFor === "enemy") {
      setTimeout(() => {
        assignRandomValueToNull();
      }, 300);
    }
  }, [RoundFor, BotAtackAgain, selectedItems]);

  const [StopSecoundAtack, setStopSecoundAtack] = useState<boolean>(false);

  useEffect(() => {
    if (usedIndexSaveEValues.some((value) => value === false)) {
      console.log(
        "ruch moze jeszcze jakiś być",
        usedIndexSaveEValues[SelectedIndexBTM] === false,
        usedIndexSaveEValues
      );
      if (usedIndexSaveEValues[SelectedIndexBTM] === false) {
        setStopSecoundAtack(true);
        FirstMove();
        setTimeout(() => {
          setStopSecoundAtack(false);
        }, 100);
      } else {
        setTimeout(() => {
          setIniciateBotMove(!IniciateBotMove);
        }, 1000);
      }
    } else {
    }
  }, [usedIndexSaveEValues, SelectedIndexBTM]);

  useEffect(() => {
    if (
      usedIndexSaveEValues.every((value) => value === true || value === null)
    ) {
      console.log("brak ruchux2");
      setTimeout(() => {
        addRandomItemWithoutRepetition();
      }, 1000);
    }
  }, [usedIndexSaveEValues.every((value) => value === true || value === null)]);
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

  const [BotAttackAllay, setBotAttackAllay] = useState<boolean>(false);

  //==== random number from enemy table

  useEffect(() => {
    setTimeout(() => {
      const allNull = selectedItemsA.every((item) => item === null);
      if (hasCodeExecuted < 1) {
        if (RoundFor === "enemy") {
          if (
            selectedItems[SelectedIndexBTM] !== null &&
            !EnemyAttack[SelectedIndexBTM]
          ) {
            const selectedIndex = EnemyAttack.findIndex(
              (value: boolean) => value === true
            );

            setEnemyAttack((prevArray: any) => {
              const newArray = [...prevArray];
              if (selectedIndex !== -1) {
                newArray[selectedIndex] = false;
              }
              newArray[SelectedIndexBTM] = true;
              if (newArray[SelectedIndexBTM]) {
                setCanBeUse("EnemyAttackAlly");
                setECA(true);
                setselectedCard(selectedItems[SelectedIndexBTM]);
                setBotAttackAllay(true);
              }
              return newArray;
            });
          }
          if (allNull) {
          }
        }
      }
    }, 600);
  }, [RoundFor, BotAtackAgain]);

  // bot Attack enemy

  const [EnemyAttackAlly, setEnemyAttackAlly] = useState<any>([]);
  const [allayAttack, setAllayAttack] = useState<any>([]);

  // block bot move

  useEffect(() => {
    const allNull = selectedItemsA.every((item) => item === null);

    if (RoundFor === "enemy") {
      if (allNull) {
        setTimeout(() => {
          HandleClickAllyHp();
          setAllyCanBeAttack(true);
          setTimeout(() => {
            setAllyCanBeAttack(false);
          }, 1200);
        }, 600);
      }
    }
  }, [RoundFor, CanBeUse]);

  useEffect(() => {
    const indexBotAllySelect = randomIndex;
    const indexBotEnemySelect = SelectedIndexBTM;
    const CaedIdA = selectedItemsA[indexBotAllySelect];
    const cardIdE = selectedItems[indexBotEnemySelect];
    setAllyIndexForAnimation(indexBotAllySelect);
    setTimeout(() => {
      if (selectedItemsA.some((item) => item !== null)) {
        if (RoundFor === "enemy") {
          if (StopSecoundAtack === true) {
            if (indexBotEnemySelect !== undefined) {
              if (
                usedIndexSaveEValues[SelectedIndexBTM] === false ||
                usedIndexSaveEValues[SelectedIndexBTM] === null
              ) {
                if (EnemyAttack[indexBotEnemySelect] !== undefined) {
                  // Stwórz nową kopię tablicy usedIndexSaveEValues
                  setUsedIndexSaveEValues((prevValues) => {
                    const updatedValues = [...prevValues];
                    // Ustaw wartość na true tylko dla wybranego indeksu
                    updatedValues[SelectedIndexBTM] = true;
                    // Zaktualizuj stan komponentu za pomocą setUsedIndexSaveEValues
                    return updatedValues;
                  });

                  const selectedIndex = EnemyAttack.findIndex(
                    (value: boolean) => value === true
                  );

                  setEnemyAttack((prevArray: any) => {
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
                          AllyCard[Number(CaedIdA)].Attack / 2;
                        AllyCard[Number(CaedIdA)].Hp -=
                          EnemyCard[Number(cardIdE)].Attack / 2;

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
                    setBotAttackAllay(false);
                    setselectedCard(undefined);
                    setIndexSaveE(undefined);
                    setSelectedIndexBTM(undefined);
                    setTimeout(() => {
                      setAllyIndexForAnimation(undefined);
                    }, 630);
                    return newArray;
                  });
                } else {
                }
              } else {
                return;
              }
            }
          }
        }
      }
    }, 1000);
  }, [BotAtackAgain]);

  const [AllyIndexForAnimation, setAllyIndexForAnimation] = useState<number>();

  // enemy char
  const allNullChar = selectedItems.every((item) => item === null);
  const allNullCharE = selectedItemsA.every((item) => item === null);

  const [EnemyCanBeAttack, setEnemyCanBeAttack] = useState<boolean>(false);
  const [AllyCanBeAttack, setAllyCanBeAttack] = useState<boolean>(false);

  //========================================================================

  function FirstMove() {
    if (RoundForNew === "enemy") {
      setBotAtackAgain(true);
      setTimeout(() => {
        setBotAtackAgain(false);
      }, 630);
      setAllayAttack(Array(selectedItemsA.length).fill(false));
      setEnemyAttack(Array(selectedItems.length).fill(false));
      setClickedItems(Array(clickedItems.length).fill(false));
      setIndexSaveE(-1);
      setCanBeUse("s");
      setEnemyAttackAlly(Array(selectedItemsA.length).fill(false));
      setIndexSaveA(-1);
      setHasCodeExecuted(0);
      setWylosowanoLiczbe(false);
      setUsedIndexSaveAValues([]);
    }
  }

  console.log(clickedItems);
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
              setEnemyAttack={setEnemyAttack}
              EnemyAttack={EnemyAttack}
              setUsedIndexSaveAValues={setUsedIndexSaveAValues}
              usedIndexSaveAValues={usedIndexSaveAValues}
              setEnemyIndexForAnimation={setEnemyIndexForAnimation}
              AllyIndexForAnimation={AllyIndexForAnimation}
              SelectedIndexBTM={SelectedIndexBTM}
              AllyCanBeAttack={AllyCanBeAttack}
            />
            <div className="mainMenu">
              <div className="MainCharCon">
                <div
                  className="mainCharacter Enem"
                  id={EnemyCanBeAttack ? "EnemyCanBeAttack" : ""}
                  style={{
                    animationName: allNullChar ? "CanAttack" : "",
                    animationDuration: allNullChar ? "2s" : "",
                    animationIterationCount: allNullChar ? "infinite" : "",
                  }}
                >
                  <div className="BorderMC">
                    <div className="MCHP">{EnemyHp}</div>
                  </div>
                  <button
                    className="AttackEnemyMC"
                    onClick={(e) => {
                      if (hasNonNullValueE === true) {
                        console.log("2");
                      } else {
                        console.log("1");
                        HandleClickEnemyHp();
                        setEnemyCanBeAttack(true);
                        setTimeout(() => {
                          setEnemyCanBeAttack(false);
                        }, 2000);
                      }
                    }}
                    disabled={hasNonNullValueE === true && ACA === false}
                  ></button>
                  <div className="EnemyChar"></div>
                </div>
                <div
                  className="mainCharacter All"
                  id={AllyCanBeAttack ? "EnemyCanBeAttack" : ""}
                  style={{
                    animationName: allNullCharE ? "CanAttack" : "",
                    animationDuration: allNullCharE ? "2s" : "",
                    animationIterationCount: allNullCharE ? "infinite" : "",
                  }}
                >
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
                    disabled={ButtonIsDisabled}
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
              EnemyAttackAlly={EnemyAttackAlly}
              setEnemyAttackAlly={setEnemyAttackAlly}
              allayAttack={allayAttack}
              setAllayAttack={setAllayAttack}
              EnemyIndexForAnimation={EnemyIndexForAnimation}
              setAllyIndexForAnimation={setAllyIndexForAnimation}
              EnemyCanBeAttack={EnemyCanBeAttack}
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

function isEqual(selectedItemsA: (number | null)[], prevSelectedItemsA: any) {
  throw new Error("Function not implemented.");
}
// tabliczke wygrana / przegrana
// dodać nagrody za wygraną
