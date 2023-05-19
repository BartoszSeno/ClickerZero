/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { ChessBlack } from "../../../data/Chess/Black/Black";
import { ChessWhite } from "../../../data/Chess/White/White";
import DragAndDropAPI from "./Components/DragAndDropAPI";
import ItemSlot from "./Components/Slot";

function BoardChess() {
  const [itsWhite, setitsWhite] = useState<boolean>(true);
  const [itsBlack, setitsBlack] = useState<boolean>(false);

  const [WhiteChessData, setWhiteChessData] = useState<any>(
    JSON.parse(localStorage.getItem("ChessWhite") || JSON.stringify(ChessWhite))
  );
  const [BlackChessData, setBlackChessData] = useState<any>(
    JSON.parse(localStorage.getItem("ChessBlack") || JSON.stringify(ChessBlack))
  );

  const allchessFromArray = [...BlackChessData, ...WhiteChessData];

  const [chess, setchess] = useState(() => {
    const storedchess = localStorage.getItem("chess");
    if (storedchess) {
      return JSON.parse(storedchess);
    }
    return allchessFromArray.map((item: any, index: any) => ({
      ...item,
      slot: index,
    }));
  });

  useEffect(() => {
    localStorage.setItem("chess", JSON.stringify(chess));
  }, [chess]); // Dodaj zapis do localStorage wewnątrz useEffect

  // Aktualizuj chess na podstawie allchessFromArray

  const inventorySlots = new Array(64).fill(null);
  //========================================================================================

  const prevchessRef = useRef<any[]>([]);
  const [initialPositioningApplied, setInitialPositioningApplied] =
    useState(false);

  useEffect(() => {
    // Filter out chess that are not bought in allchessFromArray
    const updatedchess = allchessFromArray.map((item) => {
      // Check if the item is already present in the current chess state
      const existingItem = chess.find((i: any) => i.id === item.id);
      if (existingItem) {
        // Preserve the current slot value for the existing item
        item.slot = existingItem.slot;
      } else {
        // Update the slot property for each item in updatedchess
        let emptySlotIndex = inventorySlots.findIndex(
          (item, index) =>
            !item && index !== -1 && !chess.some((i: any) => i.slot === index)
        );
        if (emptySlotIndex !== -1) {
          // If there's an empty slot available, assign it
          item.slot = emptySlotIndex;
        } else {
          // Find the first available empty slot index after the last slot used in updatedchess
          const lastSlot = updatedchess.reduce((maxSlot, item) => {
            return item.slot > maxSlot ? item.slot : maxSlot;
          }, -1);
          item.slot = lastSlot + 1;
        }
      }
      interface Moves {
        [key: number]: number;
      }

      // Check if the item should be moved to a different slot
      const moves: Moves = {
        // ID: NewSlot
        10001: 56,
        10002: 57,
        10003: 58,
        10004: 59,
        10005: 60,
        10006: 61,
        10007: 62,
        10008: 63,
        //black
        20001: 0,
        20002: 1,
        20003: 2,
        20004: 4,
        20005: 3,
        20006: 5,
        20007: 6,
        20008: 7,

        //Pawn White Position
        10009: 48,
        10010: 49,
        10011: 50,
        10012: 51,
        10013: 52,
        10014: 53,
        10015: 54,
        10016: 55,
        //black
        20009: 8,
        20010: 9,
        20011: 10,
        20012: 11,
        20013: 12,
        20014: 13,
        20015: 14,
        20016: 15,
      };

      if (!initialPositioningApplied && item.id in moves) {
        item.slot = moves[item.id];
      }

      return item;
    });

    if (updatedchess.length >= 64) {
      // Handle the case when the number of chess items reaches the maximum limit
    }

    // Compare prevchessRef with current chess to avoid infinite loop
    if (JSON.stringify(prevchessRef.current) !== JSON.stringify(updatedchess)) {
      // Update state and local storage with updatedchess using functional update
      setchess(updatedchess);
      localStorage.setItem("chess", JSON.stringify(updatedchess));

      // Update prevchessRef with the current chess value
      prevchessRef.current = updatedchess;
    }
    setInitialPositioningApplied(true);
  }, [allchessFromArray, inventorySlots, chess, initialPositioningApplied]);

  //========================================================================================

  const [draggingSlotId, setDraggingSlot] = useState(null);

  const getNumberOfSlots = () =>
    new Array(64).fill(null).map((_, index) => index);

  const getItemDataInSlot = (slot: number) =>
    chess.find((item: { slot: number }) => item.slot === slot);

  const swapchesslots = (oldSlot: number, newSlot: number) => {
    setchess((currentState: any) => {
      let newInventory = [...currentState];
      let oldIndex = -1,
        newIndex = -1;

      // Finding the old ones..

      newInventory.forEach((item, index) => {
        if (item.slot === oldSlot) {
          oldIndex = index;
        } else if (item.slot === newSlot) {
          newIndex = index;
        }
      });

      // Replacing them

      newInventory[oldIndex] = { ...newInventory[oldIndex], slot: newSlot };
      newInventory[newIndex] = { ...newInventory[newIndex], slot: oldSlot };

      return [...newInventory];
    });
  };

  const isFirstMoveMap = new Map();
  isFirstMoveMap.set(10009, true);
  isFirstMoveMap.set(10010, true);
  isFirstMoveMap.set(10011, true);
  isFirstMoveMap.set(10012, true);
  isFirstMoveMap.set(10013, true);
  isFirstMoveMap.set(10014, true);
  isFirstMoveMap.set(10015, true);
  isFirstMoveMap.set(10016, true);

  const isFirstMoveMapBlack = new Map();
  isFirstMoveMapBlack.set(20009, true);
  isFirstMoveMapBlack.set(20010, true);
  isFirstMoveMapBlack.set(20011, true);
  isFirstMoveMapBlack.set(20012, true);
  isFirstMoveMapBlack.set(20013, true);
  isFirstMoveMapBlack.set(20014, true);
  isFirstMoveMapBlack.set(20015, true);
  isFirstMoveMapBlack.set(20016, true);
  const isMoveInStraightLine = (
    oldSlot: number,
    newSlot: number,
    itemId: number
  ) => {
    const oldRow = Math.floor(oldSlot / 8);
    const oldColumn = oldSlot % 8;
    const newRow = Math.floor(newSlot / 8);
    const newColumn = newSlot % 8;

    let maxDistance = 1;

    //BISHOP
    if (itemId === 10006 || itemId === 10003) {
      const rowDiff = Math.abs(newRow - oldRow);
      const columnDiff = Math.abs(newColumn - oldColumn);

      return rowDiff === columnDiff; // Ruch w linii ukośnej
      //ROCK
    } else if (itemId === 10008 || itemId === 10001) {
      return (
        oldRow === newRow || // Ruch w linii poziomej
        oldColumn === newColumn // Ruch w linii pionowej
      );
      //QUEEN
    } else if (itemId === 10004) {
      return (
        oldRow === newRow || // Ruch w linii poziomej
        oldColumn === newColumn || // Ruch w linii pionowej
        Math.abs(oldRow - newRow) === Math.abs(oldColumn - newColumn) // Ruch w linii ukośnej
      );
      //KING
    } else if (itemId === 10005) {
      const rowDiff = Math.abs(newRow - oldRow);
      const columnDiff = Math.abs(newColumn - oldColumn);

      return rowDiff <= 1 && columnDiff <= 1; // Ruch o jedno miejsce w dowolnym kierunku
      //PAWN
    } else if (isFirstMoveMap.has(itemId)) {
      let isFirstMove = isFirstMoveMap.get(itemId);

      const rowDiff = Math.abs(newRow - oldRow);
      const columnDiff = Math.abs(newColumn - oldColumn);

      if (isFirstMove && (rowDiff === 2 || 1) && columnDiff === 0) {
        maxDistance = 2 || 1;
        isFirstMove = false;
        isFirstMoveMap.set(itemId, isFirstMove); // Zaktualizuj wartość isFirstMove dla itemId w mapie
      } else if (!isFirstMove && rowDiff === 1 && columnDiff === 0) {
        maxDistance = 1;
      } else {
        return false;
      }

      return (
        oldColumn === newColumn && newRow < oldRow && rowDiff <= maxDistance
      );
    } else if (itemId === 10007 || itemId === 10002) {
      const rowDiff = Math.abs(newRow - oldRow);
      const columnDiff = Math.abs(newColumn - oldColumn);

      return (
        (rowDiff === 2 && columnDiff === 1) || // Ruch o 2 pola w pionie i 1 pole w poziomie
        (rowDiff === 1 && columnDiff === 2) // Ruch o 2 pola w poziomie i 1 pole w pionie
      );
    }

    return false; // Przedmiot o innym ID, ruch niedozwolony
  };
  ///=========

  const isMoveInStraightLineBlack = (
    oldSlot: number,
    newSlot: number,
    itemId: number
  ) => {
    const oldRow = Math.floor(oldSlot / 8);
    const oldColumn = oldSlot % 8;
    const newRow = Math.floor(newSlot / 8);
    const newColumn = newSlot % 8;

    let maxDistance = 1;

    //BISHOP
    if (itemId === 20006 || itemId === 20003) {
      const rowDiff = Math.abs(newRow - oldRow);
      const columnDiff = Math.abs(newColumn - oldColumn);

      return rowDiff === columnDiff; // Ruch w linii ukośnej
      //ROCK
    } else if (itemId === 20008 || itemId === 20001) {
      return (
        oldRow === newRow || // Ruch w linii poziomej
        oldColumn === newColumn // Ruch w linii pionowej
      );
      //QUEEN
    } else if (itemId === 20004) {
      return (
        oldRow === newRow || // Ruch w linii poziomej
        oldColumn === newColumn || // Ruch w linii pionowej
        Math.abs(oldRow - newRow) === Math.abs(oldColumn - newColumn) // Ruch w linii ukośnej
      );
      //KING
    } else if (itemId === 20005) {
      const rowDiff = Math.abs(newRow - oldRow);
      const columnDiff = Math.abs(newColumn - oldColumn);

      return rowDiff <= 1 && columnDiff <= 1; // Ruch o jedno miejsce w dowolnym kierunku
      //PAWN
    } else if (isFirstMoveMapBlack.has(itemId)) {
      let isFirstMoveBlack = isFirstMoveMapBlack.get(itemId);

      const rowDiff = Math.abs(newRow - oldRow);
      const columnDiff = Math.abs(newColumn - oldColumn);

      if (isFirstMoveBlack && (rowDiff === 2 || 1) && columnDiff === 0) {
        maxDistance = 2 || 1;
        isFirstMoveBlack = false;
        isFirstMoveMapBlack.set(itemId, isFirstMoveBlack); // Zaktualizuj wartość isFirstMove dla itemId w mapie
      } else if (!isFirstMoveBlack && rowDiff === 1 && columnDiff === 0) {
        maxDistance = 1;
      } else {
        return false;
      }

      return (
        oldColumn === newColumn && newRow > oldRow && rowDiff <= maxDistance
      );
    } else if (itemId === 20007 || itemId === 20002) {
      const rowDiff = Math.abs(newRow - oldRow);
      const columnDiff = Math.abs(newColumn - oldColumn);

      return (
        (rowDiff === 2 && columnDiff === 1) || // Ruch o 2 pola w pionie i 1 pole w poziomie
        (rowDiff === 1 && columnDiff === 2) // Ruch o 2 pola w poziomie i 1 pole w pionie
      );
    }

    return false; // Przedmiot o innym ID, ruch niedozwolony
  };
  let currentMoveValidator = isMoveInStraightLine; // Początkowo ustawiamy na isMoveInStraightLine

  const moveItemToSlot = (oldSlot: number, newSlot: number) => {
    setchess((currentState: any) => {
      let inventory = [...currentState];

      inventory.forEach((item, index) => {
        if (item.slot === oldSlot) {
          const isMoveValid = currentMoveValidator;

          if (!isMoveValid(oldSlot, newSlot, item.id)) {
            // Jeśli ruch jest niedozwolony dla danego przedmiotu, zakończ funkcję
            return;
          }

          inventory[index].slot = newSlot;

          // Przełącz między isMoveInStraightLine a isMoveInStraightLineBlack
          currentMoveValidator =
            currentMoveValidator === isMoveInStraightLine
              ? isMoveInStraightLineBlack
              : isMoveInStraightLine;
        }
      });

      return inventory;
    });
  };
  const onInventoryItemDragged = ({ detail: eventData }: any) => {
    const oldSlot = parseInt(eventData.slot),
      newSlot = parseInt(eventData.destination.slot);

    if (eventData.destination.type === "empty-slot") {
      moveItemToSlot(oldSlot, newSlot);
    } else if (eventData.destination.type === "item") {
      swapchesslots(oldSlot, newSlot);
    } else if (eventData.destination.type === "example-1") {
    }

    localStorage.setItem("chess", JSON.stringify(chess));
  };

  useEffect(() => {
    document.addEventListener("inventoryItemDragged", onInventoryItemDragged);
    return () => {
      document.removeEventListener(
        "inventoryItemDragged",
        onInventoryItemDragged
      );
    };
    // eslint-disable-next-line
  }, []);

  const inventoryElement = document.querySelector(".inventory");
  if (inventoryElement) {
    inventoryElement.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      return false;
    });
  }
  return (
    <>
      <div className="Chess-container">
        <DragAndDropAPI
          activeDraggedSlot={draggingSlotId}
          setActiveDraggedSlot={setDraggingSlot}
        />
        <div className="ChessBoardGame">
          {getNumberOfSlots().map((slot: number) => {
            const item = chess.find(
              (item: { slot: number }) => item.slot === slot
            );
            const itemId = item ? item.id : null;

            return (
              <span key={`item-slot-${slot}`}>
                <ItemSlot
                  slot={slot}
                  data={getItemDataInSlot(slot) || null}
                  key={slot}
                  itemId={itemId}
                />
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BoardChess;
