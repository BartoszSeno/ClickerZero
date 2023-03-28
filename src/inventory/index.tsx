import React, { useState, useEffect } from "react";
import "../assets/css/Normal/inventory/inventory.css";

// Components
import ItemSlot from "./Components/Slot";
import DragAndDropAPI from "./Components/DragAndDropAPI";

const Inventory = ({
  props,
  mainWeaponData,
  UpgradedNamesMainWeapon,
  handleItemSelect,
  GetIdPerClick,
}: {
  props: any;
  mainWeaponData: any;
  UpgradedNamesMainWeapon: any;
  handleItemSelect: any;
  GetIdPerClick: any;
}) => {
  const [items, setItems] = useState(
    mainWeaponData
      .filter((item: { isBought: boolean }) => item.isBought === true)
      .map((item: any, index: number) => ({ ...item, id: index }))
  );

  useEffect(() => {
    setItems(
      mainWeaponData
        .filter((item: { isBought: boolean }) => item.isBought === true)
        .map((item: any, index: number) => ({ ...item, id: index }))
    );
  }, [mainWeaponData]);
  //Let's assume this is the player's items.

  const itemsRef = React.useRef(props.items);

  const [draggingSlotId, setDraggingSlot] = useState(null);
  const getNumberOfSlots = () =>
    new Array(24).fill(null).map((_, index) => index);
  const getItemDataInSlot = (id: number) =>
    items.find((item: { id: number }) => item.id === id);

  const getInventorySlotIndex = (slotIndex: number) => {
    let id = itemsRef.current.filter(
      (item: { id: number }) => item.id === slotIndex
    )[0];
    return id ? itemsRef.current.indexOf(id) : null;
  };

  const swapItemSlots = (oldSlot: number, newSlot: number) => {
    setItems((currentState: any) => {
      let newInventory = [...currentState];
      let oldIndex = -1,
        newIndex = -1;

      // Finding the old ones..

      newInventory.forEach((item, index) => {
        if (item.id === oldSlot) {
          oldIndex = index;
        } else if (item.id === newSlot) {
          newIndex = index;
        }
      });

      // Replacing them

      newInventory[oldIndex] = { ...newInventory[oldIndex], id: newSlot };
      newInventory[newIndex] = { ...newInventory[newIndex], id: oldSlot };

      return [...newInventory];
    });
  };

  const moveItemToSlot = (oldSlot: number, newSlot: number) => {
    console.log(`move slot`, oldSlot, newSlot);

    setItems((currentState: any) => {
      let inventory = [...currentState];

      inventory.forEach((item, index) => {
        if (item.id === oldSlot) {
          inventory[index].id = newSlot;
        }
      });

      return inventory;
    });
  };

  const onInventoryItemDragged = ({ detail: eventData }: any) => {
    const oldSlot = parseInt(eventData.id),
      newSlot = parseInt(eventData.destination.id);

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
          {getNumberOfSlots().map((id) => (
            <ItemSlot id={id} data={getItemDataInSlot(id) || null} key={id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Inventory;
