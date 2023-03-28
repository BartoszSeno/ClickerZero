import React, { useState, useEffect } from "react";
import "../assets/css/Normal/inventory/inventory.css";

// Components
import ItemSlot from "./Components/Slot";
import DragAndDropAPI from "./Components/DragAndDropAPI";

const Inventory = (props: any) => {
  const [items, setItems] = useState([
    {
      slot: 5,
      title: "Sword",
      img: "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Weapon/TextureGreen/1.png",
    },
    {
      slot: 3,
      title: "Gun",
      img: "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Weapon/TextureGreen/2.png",
    },
  ]); //Let's assume this is the player's items.

  const itemsRef = React.useRef(props.items);

  const [draggingSlotId, setDraggingSlot] = useState(null);
  const getNumberOfSlots = () =>
    new Array(24).fill(null).map((_, index) => index);
  const getItemDataInSlot = (slot: number) =>
    items.find((item) => item.slot === slot);

  const getInventorySlotIndex = (slotIndex: number) => {
    let slot = itemsRef.current.filter(
      (item: { slot: number }) => item.slot === slotIndex
    )[0];
    return slot ? itemsRef.current.indexOf(slot) : null;
  };

  const swapItemSlots = (oldSlot: number, newSlot: number) => {
    setItems((currentState) => {
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

    setItems((currentState) => {
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

  return (
    <>
      <div id="inventoryContainer">
        <DragAndDropAPI
          activeDraggedSlot={draggingSlotId}
          setActiveDraggedSlot={setDraggingSlot}
        />
        <div className="inventory">
          {getNumberOfSlots().map((slot) => (
            <ItemSlot
              slot={slot}
              data={getItemDataInSlot(slot) || null}
              key={slot}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Inventory;
