import React, { useState, useEffect } from "react";
import "../assets/css/Normal/inventory/inventory.css";

// Components
import ItemSlot from "./Components/Slot";
import DragAndDropAPI from "./Components/DragAndDropAPI";

const Inventory = ({
  props,
  mainWeaponData,
  handleItemClick,
  GetIdPerClick,
}: {
  props: any;
  mainWeaponData: any;
  handleItemClick: any;
  GetIdPerClick: any;
}) => {
  const getBoughtItems = (items: any[]) => {
    return items.filter((item) => item.isBought === true);
  };

  const [items, setItems] = useState(() => {
    const localItems = localStorage.getItem("items");
    const parsedItems = localItems ? JSON.parse(localItems) : mainWeaponData;

    // Add an `order` property to each item based on its index in the array
    const itemsWithOrder = parsedItems.map((item: any, index: any) => ({
      ...item,
      order: index,
    }));

    const boughtItems = getBoughtItems(itemsWithOrder);

    const itemsWithSlots = boughtItems.map((item, index) => {
      const savedSlot = localStorage.getItem(`item_${index}_slot`);
      const slot = savedSlot !== null ? parseInt(savedSlot) : index;
      return { ...item, slot };
    });

    // Sort the items by the `order` property
    return itemsWithSlots;
  });

  useEffect(() => {
    const boughtItems = getBoughtItems(mainWeaponData);
    const itemsWithSlots = boughtItems.map((item, index) => {
      const savedSlot = localStorage.getItem(`item_${index}_slot`);
      const slot = savedSlot !== null ? parseInt(savedSlot) : index;
      return { ...item, slot };
    });

    const emptySlots = getNumberOfSlots().filter(
      (slot) => !itemsWithSlots.some((item) => item.slot === slot)
    );

    // Assign the first empty slot to the new item
    const newItem = { ...mainWeaponData[0], slot: emptySlots[0] };
    const newItems = [...itemsWithSlots, newItem];

    setItems(newItems);
  }, [mainWeaponData]);

  const UpdateOnClick = () => {
    setTimeout(() => {
      const boughtItems = getBoughtItems(mainWeaponData);
      const itemsWithSlots = boughtItems.map((item, index) => {
        const savedSlot = localStorage.getItem(`item_${index}_slot`);
        const slot = savedSlot !== null ? parseInt(savedSlot) : index;
        return { ...item, slot };
      });

      const emptySlots = getNumberOfSlots().filter(
        (slot) => !itemsWithSlots.some((item) => item.slot === slot)
      );

      // Assign the first empty slot to the new item
      const newItem = { ...mainWeaponData[0], slot: emptySlots[0] };
      const newItems = [...itemsWithSlots, newItem];

      setItems(newItems);
    }, 10);
  };

  useEffect(() => {
    items.forEach((item: { slot?: { toString: () => string } }, index: any) => {
      const slot = item.slot !== undefined ? item.slot.toString() : "";
      localStorage.setItem(`item_${index}_slot`, slot);
    });
  }, [items]);

  //Let's assume this is the player's items.
  const itemsRef = React.useRef(props.items);

  const [draggingSlotId, setDraggingSlot] = useState(null);
  const getNumberOfSlots = () =>
    new Array(25).fill(null).map((_, index) => index);
  const getItemDataInSlot = (slot: number) =>
    items.find((item: { slot: number }) => item.slot === slot);

  const getInventorySlotIndex = (slotIndex: number) => {
    let slot = itemsRef.current.filter(
      (item: { slot: number }) => item.slot === slotIndex
    )[0];

    return slot ? itemsRef.current.indexOf(slot) : null;
  };

  const swapItemSlots = (oldSlot: number, newSlot: number) => {
    setItems((currentState: any) => {
      const newInventory = [...currentState];
      let oldIndex = -1,
        newIndex = -1;

      // Finding the old and new slots
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

      // Update localStorage
      localStorage.setItem("items", JSON.stringify(newInventory));

      return [...newInventory];
    });
  };

  const moveItemToSlot = (oldSlot: number, newSlot: number) => {
    setItems((currentState: any) => {
      let inventory = [...currentState];

      inventory.forEach((item, index) => {
        if (item.slot === oldSlot) {
          inventory[index].slot = newSlot;
        }
      });

      // Update localStorage
      console.log(inventory);
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

    localStorage.setItem("newSlot", JSON.stringify(newSlot));
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
        <div className="inventory" onMouseOver={UpdateOnClick}>
          {getNumberOfSlots().map((slot: number) => {
            const item = items.find((item) => item.slot === slot);
            const itemId = item ? item.id : null;
            return (
              <span
                onContextMenu={(e) => {
                  handleItemClick(itemId);
                  GetIdPerClick(itemId);
                }}
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
