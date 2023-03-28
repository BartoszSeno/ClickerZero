import React, { useEffect } from "react";

const ExportingComponent = (props: any) => {
  const slotDraggedRef = React.useRef(props.activeDraggedSlot);

  useEffect(() => {
    slotDraggedRef.current = props.activeDraggedSlot;
  }, [props.activeDraggedSlot]);

  const setDraggingSlot = (slotIndex: any) => {
    props.setActiveDraggedSlot(slotIndex);
  };

  const moveElementCloneToMouseCoords = async (x: any, y: any) => {
    const id = slotDraggedRef.current;
    if (id === null) return false;
    const insertedChild = document.getElementById(
      `item-slot-ghost-${id}`
    ) as HTMLElement;
    if (!insertedChild) return false;
    insertedChild.style.top = `${x}px`;
    insertedChild.style.left = `${y}px`;
  };

  const onMouseMove = (event: any) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    const top = clientY - 65;
    const left = clientX - 65;
    moveElementCloneToMouseCoords(top, left);
  };

  const onMouseClick = (event: any) => {
    if (slotDraggedRef.current !== null) return false;
    event.preventDefault();
    const div = event.target;
    const id = div.getAttribute("data-slot");
    const type = div.getAttribute("data-type");
    if (id !== undefined && type === "item") {
      const slotNumber = parseInt(id);
      setDraggingSlot(slotNumber);
      const itemSelected = document.getElementById(
        `item-slot-${id}`
      ) as HTMLElement;
      const itemList = document.getElementsByClassName(
        "inventory"
      )[0] as HTMLElement;
      const itemClone = itemSelected.cloneNode(true) as HTMLElement;
      itemClone.className += " being-dragged";
      itemClone.id = `item-slot-ghost-${id}`;
      itemList.appendChild(itemClone);

      // Hiding the current item selected while dragging around the clone
      itemSelected.className += " being-moved";

      // Setting the default height and width and moving the clone to the right pos.
      const insertedChild = document.getElementById(
        `item-slot-ghost-${id}`
      ) as HTMLElement;
      const rect = itemSelected.getBoundingClientRect();
      // Setting Initial styling..
      insertedChild.style.height = `${rect.height}px`;
      insertedChild.style.width = `${rect.width}px`;
      const { clientX, clientY } = event;
      const top = clientY - 65;
      const left = clientX - 65;
      insertedChild.style.top = `${top}px`;
      insertedChild.style.left = `${left}px`;
    }
  };

  const onMouseReleased = (event: any) => {
    if (slotDraggedRef.current === null) return false;
    event.preventDefault();
    const { clientX, clientY } = event;
    const id = slotDraggedRef.current;
    if (id === null) return false;
    const itemSlotElement = document.getElementById(
      `item-slot-${id}`
    ) as HTMLElement;
    itemSlotElement.className = itemSlotElement.className.replace(
      " being-moved",
      ""
    );
    // Deleting the ghost item..
    const itemGhostElement = document.getElementById(
      `item-slot-ghost-${id}`
    ) as HTMLElement;
    itemGhostElement.remove();

    // Emitting the event so the UI can now play with the data.
    const target = document.elementFromPoint(clientX, clientY) as HTMLElement;
    const targetSlot = target.getAttribute("data-slot");

    if (targetSlot !== id) {
      document.dispatchEvent(
        new CustomEvent("inventoryItemDragged", {
          detail: {
            id: id,
            destination: {
              id: target.getAttribute("data-slot"),
              type: target.getAttribute("data-type"),
            },
          },
        })
      );
    }
    // Cleaning up

    setDraggingSlot(null);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseClick);
    document.addEventListener("mouseup", onMouseReleased);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseReleased);
      document.addEventListener("mousedown", onMouseClick);
    };
    // eslint-disable-next-line
  }, []);

  return null;
};

export default ExportingComponent;
