import { useEffect, useRef, useState } from "react";
import { ChessBlack } from "../../../data/Chess/Black/Black";
import { ChessWhite } from "../../../data/Chess/White/White";
import DragAndDropAPI from "./Components/DragAndDropAPI";
import ItemSlot from "./Components/Slot";

function BoardChess() {
  const [WhiteChessData, setWhiteChessData] = useState<any>(
    JSON.parse(localStorage.getItem("ChessWhite") || JSON.stringify(ChessWhite))
  );
  const [BlackChessData, setBlackChessData] = useState<any>(
    JSON.parse(localStorage.getItem("ChessBlack") || JSON.stringify(ChessBlack))
  );

  const allchessFromArray = [...WhiteChessData, ...BlackChessData];

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

  useEffect(() => {
    // Filter out chess that are not bought in allchessFromArray
    const updatedchess = allchessFromArray.map((item) => {
      // Check if the item is already present in the current chess state
      const existingItem = chess.find((i: { id: any }) => i.id === item.id);
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
      return item;
    });

    if (updatedchess.length >= 64) {
    }

    // Compare prevchessRef with current chess to avoid infinite loop
    if (JSON.stringify(prevchessRef.current) !== JSON.stringify(updatedchess)) {
      // Update state and local storage with updatedchess using functional update
      setchess(updatedchess);
      localStorage.setItem("chess", JSON.stringify(updatedchess));

      // Update prevchessRef with the current chess value
      prevchessRef.current = updatedchess;
    }
  }, [allchessFromArray, inventorySlots, chess]);

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

  const moveItemToSlot = (oldSlot: number, newSlot: number) => {
    setchess((currentState: any) => {
      let inventory = [...currentState];

      inventory.forEach((item, index) => {
        if (item.slot === oldSlot) {
          inventory[index].slot = newSlot;
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
