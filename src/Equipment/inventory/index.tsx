/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
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
}) => {
  const allItemsFromArray = [
    ...mainWeaponData,
    ...HelmetData,
    ...ArmorData,
    ...ShoesData,
    ...GlovesData,
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
  console.log("fsa ", items);
  const inventorySlots = new Array(34).fill(null);

  useEffect(() => {
    const newBoughtItem = allItemsFromArray.find(
      (item: any) =>
        item.isBought === true &&
        item.isEquip === false &&
        !items.find((i: any) => i.id === item.id)
    );

    if (newBoughtItem) {
      let emptySlotIndex = inventorySlots.findIndex(
        (item, index) =>
          !item && index !== -1 && !items.some((i: any) => i.slot === index)
      );

      if (emptySlotIndex === -1) {
        if (
          items.some(
            (item: { slot: number }) =>
              item.slot > items[items.length - 1]?.slot
          )
        ) {
          emptySlotIndex = items[items.length - 1].slot + 1;
        } else {
          emptySlotIndex = items.length;
        }
      }

      if (emptySlotIndex <= 33) {
        const updatedItems = [...items];
        updatedItems.push({ ...newBoughtItem, slot: emptySlotIndex });
        setItems(updatedItems);
        inventorySlots[emptySlotIndex] = newBoughtItem;
        console.log(emptySlotIndex);
      } else {
        alert("Ekwipunek jest pełny!");
        console.log(emptySlotIndex);
      }
    }
  }, [allItemsFromArray, items, inventorySlots]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
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

  const handleContextMenu = (e: { preventDefault: () => void }, item: any) => {
    e.preventDefault();
    console.log("Clicked item:", item);
    if (item.type === "weapon") {
      GetIdPerClickMW(item.id);
    } else if (item.type === "helmet") {
      GetIdPerClickH(item.id);
    } else if (item.type === "Armor") {
      GetIdPerClickA(item.id);
    } else if (item.type === "Shoes") {
      GetIdPerClickS(item.id);
    } else if (item.type === "gloves") {
      //===============
      const newGlovesData = [...GlovesData];
      newGlovesData.forEach((glove, index) => {
        if (index === item.id) {
          glove.isEquip = true;
        } else {
          glove.isEquip = false;
        }
      });
      console.log(GlovesData);
      setGlovesData(newGlovesData);
      //===============
      GetIdPerClickG(item.id);
    } else if (item.type === "shield" || "dagger") {
      GetIdPerClickSW(item.id);
    }
  };
  console.log("tt ", GlovesData);

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
