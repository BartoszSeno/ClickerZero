/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import "../../assets/css/Normal/inventory/inventory.css";

// Components
import ItemSlot from "./Components/Slot";
import DragAndDropAPI from "./Components/DragAndDropAPI";

const Inventory = ({
  props,
  mainWeaponData,
  GetIdPerClickMW,
  HelmetData,
  GetIdPerClickH,
  ArmorData,
  GetIdPerClickA,
  ShoesData,
  GetIdPerClickS,
  GlovesData,
  GetIdPerClickG,
  ShieldAndDaggerData,
  GetIdPerClickSW,
  setGlovesData,
  setMainWeaponData,
  handleContextMenu,
}: {
  props: any;
  mainWeaponData: any;
  GetIdPerClickMW: any;
  HelmetData: any;
  GetIdPerClickH: any;
  ArmorData: any;
  GetIdPerClickA: any;
  ShoesData: any;
  GetIdPerClickS: any;
  GlovesData: any;
  GetIdPerClickG: any;
  ShieldAndDaggerData: any;
  GetIdPerClickSW: any;
  setGlovesData: any;
  setMainWeaponData: any;
  handleContextMenu: any;
}) => {
  const allItemsFromArray = [
    ...mainWeaponData,
    ...HelmetData,
    ...ArmorData,
    ...GlovesData,
    ...ShoesData,
    ...ShieldAndDaggerData,
  ];

  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      return JSON.parse(storedItems);
    }
    return allItemsFromArray
      .filter((item: any) => item.isBought === true && item.isEquip === false)
      .map((item: any, index: any) => ({ ...item, slot: index }));
  });

  console.log(items);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]); // Dodaj zapis do localStorage wewnątrz useEffect

  // Aktualizuj items na podstawie allItemsFromArray

  const inventorySlots = new Array(34).fill(null);
  //========================================================================================

  const prevItemsRef = useRef<any[]>([]);

  useEffect(() => {
    // Filter out items that are not bought in allItemsFromArray
    const updatedItems = allItemsFromArray
      .filter((item) => item.isBought === true && item.isEquip === false)
      .map((item) => {
        // Check if the item is already present in the current items state
        const existingItem = items.find((i: { id: any }) => i.id === item.id);
        if (existingItem) {
          // Preserve the current slot value for the existing item
          item.slot = existingItem.slot;
        } else {
          // Update the slot property for each item in updatedItems
          let emptySlotIndex = inventorySlots.findIndex(
            (item, index) =>
              !item && index !== -1 && !items.some((i: any) => i.slot === index)
          );
          if (emptySlotIndex !== -1) {
            // If there's an empty slot available, assign it
            item.slot = emptySlotIndex;
          } else {
            // Find the first available empty slot index after the last slot used in updatedItems
            const lastSlot = updatedItems.reduce((maxSlot, item) => {
              return item.slot > maxSlot ? item.slot : maxSlot;
            }, -1);
            item.slot = lastSlot + 1;
          }
        }
        return item;
      });

    if (updatedItems.length > 33) {
      alert("Ekwipunek jest pełny!");
      return;
    }

    // Compare prevItemsRef with current items to avoid infinite loop
    if (JSON.stringify(prevItemsRef.current) !== JSON.stringify(updatedItems)) {
      // Update state and local storage with updatedItems using functional update
      setItems(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));

      // Update prevItemsRef with the current items value
      prevItemsRef.current = updatedItems;
    }
  }, [allItemsFromArray, inventorySlots, items]);

  //========================================================================================

  const [draggingSlotId, setDraggingSlot] = useState(null);

  const getNumberOfSlots = () =>
    new Array(35).fill(null).map((_, index) => index);

  const getItemDataInSlot = (slot: number) =>
    items.find((item: { slot: number }) => item.slot === slot);

  const swapItemSlots = (oldSlot: number, newSlot: number) => {
    setItems((currentState: any) => {
      let newInventory = [...currentState];
      let oldIndex = -1,
        newIndex = -1;

      console.log(currentState);
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
    console.log(`move slot`, oldSlot, newSlot);

    setItems((currentState: any) => {
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
      swapItemSlots(oldSlot, newSlot);
    } else if (eventData.destination.type === "example-1") {
    }

    localStorage.setItem("items", JSON.stringify(items));
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
      <div className="app-container">
        <DragAndDropAPI
          activeDraggedSlot={draggingSlotId}
          setActiveDraggedSlot={setDraggingSlot}
        />
        <div className="inventory">
          {getNumberOfSlots().map((slot: number) => {
            const item = items.find(
              (item: { slot: number }) => item.slot === slot
            );
            const itemId = item ? item.id : null;

            return (
              <span
                onContextMenu={(e) => {
                  handleContextMenu(e, item);
                }}
                key={`item-slot-${slot}`}
              >
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
};

export default Inventory;
