/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import "../../assets/css/Normal/inventory/inventory.css";

// Components
import ItemSlot from "./Components/Slot";
import DragAndDropAPI from "./Components/DragAndDropAPI";
import { MainWeaponImageAndNameAndCost } from "../../data/equipment/mainWeapon";
import { GlovesImageAndNameAndCost } from "../../data/equipment/gloves";
import { ShieldAndDaggerImageAndNameAndCost } from "../../data/equipment/subWeapon";
import { ArmorImageAndNameAndCost } from "../../data/equipment/armor";
import { HelmetImageAndNameAndCost } from "../../data/equipment/helmet";
import { ShoesImageAndNameAndCost } from "../../data/equipment/Shoes";

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
  setFullInv,
  HandleItemClick,
  OpenAndCloseEqinEnchant,
  setSelectedItemIndex,
  setSelectedArmorItemIndex,
  setSelectedGlovesItemIndex,
  setSelectedHelmetItemIndex,
  setSelectedShieldAndDaggerItemIndex,
  setSelectedShoesItemIndex,
  UpgradedNamesMainWeapon,
  setUpgradedDmgMainWeapon,
  UpgradedNamesGloves,
  setUpgradedDefGloves,
  UpgradedNamesShieldAndDagger,
  setUpgradedDefShieldAndDagger,
  setUpgradedDmgShieldAndDagger,
  UpgradedNamesArmor,
  setUpgradedDefArmor,
  UpgradedNamesHelmet,
  setUpgradedDefHelmet,
  UpgradedNamesShoes,
  setUpgradedDefShoes,
  FishData,
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
  setFullInv: any;
  HandleItemClick: any;
  OpenAndCloseEqinEnchant: boolean;
  setSelectedItemIndex: any;
  setSelectedArmorItemIndex: any;
  setSelectedGlovesItemIndex: any;
  setSelectedHelmetItemIndex: any;
  setSelectedShieldAndDaggerItemIndex: any;
  setSelectedShoesItemIndex: any;
  UpgradedNamesMainWeapon: any;
  setUpgradedDmgMainWeapon: any;
  UpgradedNamesGloves: any;
  setUpgradedDefGloves: any;
  UpgradedNamesShieldAndDagger: any;
  setUpgradedDefShieldAndDagger: any;
  setUpgradedDmgShieldAndDagger: any;
  UpgradedNamesArmor: any;
  setUpgradedDefArmor: any;
  UpgradedNamesHelmet: any;
  setUpgradedDefHelmet: any;
  UpgradedNamesShoes: any;
  setUpgradedDefShoes: any;
  FishData: any;
}) => {
  const allItemsFromArray = [
    ...mainWeaponData,
    ...HelmetData,
    ...ArmorData,
    ...GlovesData,
    ...ShoesData,
    ...ShieldAndDaggerData,
    ...FishData,
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

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]); // Dodaj zapis do localStorage wewnątrz useEffect

  // Aktualizuj items na podstawie allItemsFromArray

  const inventorySlots = new Array(36).fill(null);
  //========================================================================================

  const prevItemsRef = useRef<any[]>([]);

  useEffect(() => {
    // Filter out items that are not bought in allItemsFromArray
    const updatedItems = allItemsFromArray
      .filter((item) => item.isBought === true && item.isEquip === false)
      .map((item) => {
        setFullInv(false);
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

    if (updatedItems.length >= 35) {
      console.log("Ekwipunek jest pełny!");
      setFullInv(true);
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
  //=============================================================================
  //mainWeapon storage data and fake enchant
  // Define a function named "GetIdPerClick" that takes an argument "index" of data type.
  function GetIdPerClick(index: any) {
    // Retrieve the item data at the given index from an array named "MainWeaponImageAndNameAndCost".
    const item = MainWeaponImageAndNameAndCost[index];

    // Save the individual item data retrieved above into the browser's local storage.
    localStorage.setItem("selectedItemIdForEnchant", item.id.toString());
    localStorage.setItem("selectedItemNameForEnchant", item.name.toString());
    localStorage.setItem("selectedItemImgForEnchant", item.image.toString());
    localStorage.setItem("selectedItemTierForEnchant", item.tier.toString());
    localStorage.setItem("selectedItemDmgForEnchant", item.dmgLvl0.toString());
  }
  // FAKE FUNCTION TO UPDATA DATA ON LOAD, WORK THE SAME LIKE 'ENCHANTPERCLICK'
  //!! BUT VALUE NOT SAVED IN LOCALSTORAGE !!
  function FakeUpdateToRefreshTheData(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];
    const itemUpgradeName = `${item.name}`;
    const savedItemUpgrade = localStorage.getItem(itemUpgradeName);
    const savedItemUpgradeNumber = Number(savedItemUpgrade);
    const upgradedValue =
      savedItemUpgradeNumber < 15 ? savedItemUpgradeNumber : 15;

    localStorage.setItem("upgradedValue", upgradedValue.toString());

    localStorage.setItem(itemUpgradeName, upgradedValue.toString());

    const itemName = `+${upgradedValue} ${item.name}`;

    const upgradedNames = [...UpgradedNamesMainWeapon];
    upgradedNames[index] = itemName;

    const itemSavedDmgMainKey = `selectedItemDmgForEnchant_${item.name}`;

    const savedDmgMain =
      localStorage.getItem(itemSavedDmgMainKey) || item.dmgLvl0;
    setUpgradedDmgMainWeapon(savedDmgMain);
  }
  //=============================================================================
  //gloves storage data and fake enchant
  // Define a function named "GetIdPerClickGloves" that takes an argument "index" of data type.
  function GetIdPerClickGloves(GlovesIndex: any) {
    // Retrieve the item data at the given index from an array named "GlovesImageAndNameAndCost".
    const Gloves = GlovesImageAndNameAndCost[GlovesIndex];

    // Save the individual item data retrieved above into the browser's local storage.
    localStorage.setItem(
      "selectedGlovesItemIdForEnchant",
      Gloves.id.toString()
    );
    localStorage.setItem(
      "selectedGlovesItemNameForEnchant",
      Gloves.name.toString()
    );
    localStorage.setItem(
      "selectedGlovesItemImgForEnchant",
      Gloves.image.toString()
    );
    localStorage.setItem(
      "selectedGlovesItemTierForEnchant",
      Gloves.tier.toString()
    );
    localStorage.setItem(
      "selectedGlovesItemDefForEnchant",
      Gloves.defLvl0.toString()
    );
  }
  // FAKE FUNCTION TO UPDATA DATA ON LOAD, WORK THE SAME LIKE 'ENCHANTPERCLICK'
  //!! BUT VALUE NOT SAVED IN LOCALSTORAGE !!
  //Gloves
  function FakeUpdateToRefreshTheGlovesData(GlovesIndex: any) {
    const item = GlovesImageAndNameAndCost[GlovesIndex];
    const GlovesItemUpgradeName = `${item.name}`;
    const savedGlovesItemUpgrade = localStorage.getItem(GlovesItemUpgradeName);
    const savedGlovesItemUpgradeNumber = Number(savedGlovesItemUpgrade);
    const GlovesUpgradedValue =
      savedGlovesItemUpgradeNumber < 15 ? savedGlovesItemUpgradeNumber : 15;

    localStorage.setItem("GlovesUpgradedValue", GlovesUpgradedValue.toString());

    localStorage.setItem(GlovesItemUpgradeName, GlovesUpgradedValue.toString());

    const GlovesItemName = `+${GlovesUpgradedValue} ${item.name}`;

    const upgradedGlovesNames = [...UpgradedNamesGloves];
    upgradedGlovesNames[GlovesIndex] = GlovesItemName;

    const itemSavedDefGlovesKey = `selectedGlovesItemDefForEnchant_${item.name}`;

    const savedDefGloves =
      localStorage.getItem(itemSavedDefGlovesKey) || item.defLvl0;
    setUpgradedDefGloves(savedDefGloves);
  }
  //=============================================================================
  //shield and dagger storage data and fake enchant
  // Define a function named "GetIdPerClickShieldAndDagger" that takes an argument "index" of data type.
  function GetIdPerClickShieldAndDagger(ShieldAndDaggerIndex: any) {
    // Retrieve the item data at the given index from an array named "ShieldAndDaggerImageAndNameAndCost".
    const ShieldAndDagger =
      ShieldAndDaggerImageAndNameAndCost[ShieldAndDaggerIndex];

    // Save the individual item data retrieved above into the browser's local storage.
    localStorage.setItem(
      "selectedShieldAndDaggerItemIdForEnchant",
      ShieldAndDagger.id.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemNameForEnchant",
      ShieldAndDagger.name.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemImgForEnchant",
      ShieldAndDagger.image.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemTierForEnchant",
      ShieldAndDagger.tier.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemDefForEnchant",
      ShieldAndDagger.defLvl0.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemDmgForEnchant",
      ShieldAndDagger.dmgLvl0.toString()
    );
  }
  // FAKE FUNCTION TO UPDATA DATA ON LOAD, WORK THE SAME LIKE 'ENCHANTPERCLICK'
  //!! BUT VALUE NOT SAVED IN LOCALSTORAGE !!
  //ShieldAndDagger
  function FakeUpdateToRefreshTheShieldAndDaggerData(
    ShieldAndDaggerIndex: any
  ) {
    const item = ShieldAndDaggerImageAndNameAndCost[ShieldAndDaggerIndex];
    const ShieldAndDaggerItemUpgradeName = `${item.name}`;
    const savedShieldAndDaggerItemUpgrade = localStorage.getItem(
      ShieldAndDaggerItemUpgradeName
    );
    const savedShieldAndDaggerItemUpgradeNumber = Number(
      savedShieldAndDaggerItemUpgrade
    );
    const ShieldAndDaggerUpgradedValue =
      savedShieldAndDaggerItemUpgradeNumber < 15
        ? savedShieldAndDaggerItemUpgradeNumber
        : 15;

    localStorage.setItem(
      "ShieldAndDaggerUpgradedValue",
      ShieldAndDaggerUpgradedValue.toString()
    );

    localStorage.setItem(
      ShieldAndDaggerItemUpgradeName,
      ShieldAndDaggerUpgradedValue.toString()
    );

    const ShieldAndDaggerItemName = `+${ShieldAndDaggerUpgradedValue} ${item.name}`;

    const upgradedShieldAndDaggerNames = [...UpgradedNamesShieldAndDagger];
    upgradedShieldAndDaggerNames[ShieldAndDaggerIndex] =
      ShieldAndDaggerItemName;

    const itemSavedDefShieldAndDaggerKey = `selectedShieldAndDaggerItemDefForEnchant_${item.name}`;
    const itemSavedDmgShieldAndDaggerKey = `selectedShieldAndDaggerItemDmgForEnchant_${item.name}`;

    const savedDefShieldAndDagger =
      localStorage.getItem(itemSavedDefShieldAndDaggerKey) || item.defLvl0;
    setUpgradedDefShieldAndDagger(savedDefShieldAndDagger);

    const savedDmgShieldAndDagger =
      localStorage.getItem(itemSavedDmgShieldAndDaggerKey) || item.dmgLvl0;
    setUpgradedDmgShieldAndDagger(savedDmgShieldAndDagger);
  }
  //=============================================================================
  //armor and dagger storage data and fake enchant
  // Define a function named "GetIdPerClickArmor" that takes an argument "index" of data type.
  function GetIdPerClickArmor(armorIndex: any) {
    // Retrieve the item data at the given index from an array named "ArmorImageAndNameAndCost".
    const armor = ArmorImageAndNameAndCost[armorIndex];

    // Save the individual item data retrieved above into the browser's local storage.
    localStorage.setItem("selectedArmorItemIdForEnchant", armor.id.toString());
    localStorage.setItem(
      "selectedArmorItemNameForEnchant",
      armor.name.toString()
    );
    localStorage.setItem(
      "selectedArmorItemImgForEnchant",
      armor.image.toString()
    );
    localStorage.setItem(
      "selectedArmorItemTierForEnchant",
      armor.tier.toString()
    );
    localStorage.setItem(
      "selectedArmorItemDefForEnchant",
      armor.defLvl0.toString()
    );
  }
  // FAKE FUNCTION TO UPDATA DATA ON LOAD, WORK THE SAME LIKE 'ENCHANTPERCLICK'
  //!! BUT VALUE NOT SAVED IN LOCALSTORAGE !!
  //armor
  function FakeUpdateToRefreshTheArmorData(armorIndex: any) {
    const item = ArmorImageAndNameAndCost[armorIndex];
    const ArmorItemUpgradeName = `${item.name}`;
    const savedArmorItemUpgrade = localStorage.getItem(ArmorItemUpgradeName);
    const savedArmorItemUpgradeNumber = Number(savedArmorItemUpgrade);
    const ArmorUpgradedValue =
      savedArmorItemUpgradeNumber < 15 ? savedArmorItemUpgradeNumber : 15;

    localStorage.setItem("ArmorUpgradedValue", ArmorUpgradedValue.toString());

    localStorage.setItem(ArmorItemUpgradeName, ArmorUpgradedValue.toString());

    const ArmorItemName = `+${ArmorUpgradedValue} ${item.name}`;

    const upgradedArmorNames = [...UpgradedNamesArmor];
    upgradedArmorNames[armorIndex] = ArmorItemName;

    const itemSavedDefArmorKey = `selectedArmorItemDefForEnchant_${item.name}`;

    const savedDefArmor =
      localStorage.getItem(itemSavedDefArmorKey) || item.defLvl0;
    setUpgradedDefArmor(savedDefArmor);
  }
  //=============================================================================
  //shoes and dagger storage data and fake enchant
  // Define a function named "GetIdPerClickHelmet" that takes an argument "index" of data type.
  function GetIdPerClickHelmet(HelmetIndex: any) {
    // Retrieve the item data at the given index from an array named "HelmetImageAndNameAndCost".
    const Helmet = HelmetImageAndNameAndCost[HelmetIndex];

    // Save the individual item data retrieved above into the browser's local storage.
    localStorage.setItem(
      "selectedHelmetItemIdForEnchant",
      Helmet.id.toString()
    );
    localStorage.setItem(
      "selectedHelmetItemNameForEnchant",
      Helmet.name.toString()
    );
    localStorage.setItem(
      "selectedHelmetItemImgForEnchant",
      Helmet.image.toString()
    );
    localStorage.setItem(
      "selectedHelmetItemTierForEnchant",
      Helmet.tier.toString()
    );
    localStorage.setItem(
      "selectedHelmetItemDefForEnchant",
      Helmet.defLvl0.toString()
    );
  }
  // FAKE FUNCTION TO UPDATA DATA ON LOAD, WORK THE SAME LIKE 'ENCHANTPERCLICK'
  //!! BUT VALUE NOT SAVED IN LOCALSTORAGE !!
  //Helmet
  function FakeUpdateToRefreshTheHelmetData(HelmetIndex: any) {
    const item = HelmetImageAndNameAndCost[HelmetIndex];
    const HelmetItemUpgradeName = `${item.name}`;
    const savedHelmetItemUpgrade = localStorage.getItem(HelmetItemUpgradeName);
    const savedHelmetItemUpgradeNumber = Number(savedHelmetItemUpgrade);
    const HelmetUpgradedValue =
      savedHelmetItemUpgradeNumber < 15 ? savedHelmetItemUpgradeNumber : 15;

    localStorage.setItem("HelmetUpgradedValue", HelmetUpgradedValue.toString());

    localStorage.setItem(HelmetItemUpgradeName, HelmetUpgradedValue.toString());

    const HelmetItemName = `+${HelmetUpgradedValue} ${item.name}`;

    const upgradedHelmetNames = [...UpgradedNamesHelmet];
    upgradedHelmetNames[HelmetIndex] = HelmetItemName;

    const itemSavedDefHelmetKey = `selectedHelmetItemDefForEnchant_${item.name}`;

    const savedDefHelmet =
      localStorage.getItem(itemSavedDefHelmetKey) || item.defLvl0;
    setUpgradedDefHelmet(savedDefHelmet);
  }
  //=============================================================================
  //shoes and dagger storage data and fake enchant
  // Define a function named "GetIdPerClickShoes" that takes an argument "index" of data type.
  function GetIdPerClickShoes(ShoesIndex: any) {
    // Retrieve the item data at the given index from an array named "ShoesImageAndNameAndCost".
    const Shoes = ShoesImageAndNameAndCost[ShoesIndex];

    // Save the individual item data retrieved above into the browser's local storage.
    localStorage.setItem("selectedShoesItemIdForEnchant", Shoes.id.toString());
    localStorage.setItem(
      "selectedShoesItemNameForEnchant",
      Shoes.name.toString()
    );
    localStorage.setItem(
      "selectedShoesItemImgForEnchant",
      Shoes.image.toString()
    );
    localStorage.setItem(
      "selectedShoesItemTierForEnchant",
      Shoes.tier.toString()
    );
    localStorage.setItem(
      "selectedShoesItemDefForEnchant",
      Shoes.defLvl0.toString()
    );
  }
  // FAKE FUNCTION TO UPDATA DATA ON LOAD, WORK THE SAME LIKE 'ENCHANTPERCLICK'
  //!! BUT VALUE NOT SAVED IN LOCALSTORAGE !!
  //Shoes
  function FakeUpdateToRefreshTheShoesData(ShoesIndex: any) {
    const item = ShoesImageAndNameAndCost[ShoesIndex];
    const ShoesItemUpgradeName = `${item.name}`;
    const savedShoesItemUpgrade = localStorage.getItem(ShoesItemUpgradeName);
    const savedShoesItemUpgradeNumber = Number(savedShoesItemUpgrade);
    const ShoesUpgradedValue =
      savedShoesItemUpgradeNumber < 15 ? savedShoesItemUpgradeNumber : 15;

    localStorage.setItem("ShoesUpgradedValue", ShoesUpgradedValue.toString());

    localStorage.setItem(ShoesItemUpgradeName, ShoesUpgradedValue.toString());

    const ShoesItemName = `+${ShoesUpgradedValue} ${item.name}`;

    const upgradedShoesNames = [...UpgradedNamesShoes];
    upgradedShoesNames[ShoesIndex] = ShoesItemName;

    const itemSavedDefShoesKey = `selectedShoesItemDefForEnchant_${item.name}`;

    const savedDefShoes =
      localStorage.getItem(itemSavedDefShoesKey) || item.defLvl0;
    setUpgradedDefShoes(savedDefShoes);
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
                  if (OpenAndCloseEqinEnchant === true) {
                    if (item.type === "weapon") {
                      HandleItemClick(mainWeaponData, item.id);
                      setSelectedItemIndex(item.id);
                      GetIdPerClick(item.id);
                      FakeUpdateToRefreshTheData(item.id);
                    } else if (item.type === "gloves") {
                      HandleItemClick(GlovesData, item.id);
                      setSelectedGlovesItemIndex(item.id - 3000);
                      GetIdPerClickGloves(item.id - 3000);
                      FakeUpdateToRefreshTheGlovesData(item.id - 3000);
                    } else if (item.type === "shield") {
                      HandleItemClick(ShieldAndDaggerData, item.id);
                      setSelectedShieldAndDaggerItemIndex(item.id - 5000);
                      GetIdPerClickShieldAndDagger(item.id - 5000);
                      FakeUpdateToRefreshTheShieldAndDaggerData(item.id - 5000);
                    } else if (item.type === "dagger") {
                      HandleItemClick(ShieldAndDaggerData, item.id);
                      setSelectedShieldAndDaggerItemIndex(item.id - 5000);
                      GetIdPerClickShieldAndDagger(item.id - 5000);
                      FakeUpdateToRefreshTheShieldAndDaggerData(item.id - 5000);
                    } else if (item.type === "Armor") {
                      HandleItemClick(ArmorData, item.id);
                      setSelectedArmorItemIndex(item.id - 2000);
                      GetIdPerClickArmor(item.id - 2000);
                      FakeUpdateToRefreshTheArmorData(item.id - 2000);
                    } else if (item.type === "Shoes") {
                      HandleItemClick(ShoesData, item.id);
                      setSelectedShoesItemIndex(item.id - 4000);
                      GetIdPerClickShoes(item.id - 4000);
                      FakeUpdateToRefreshTheShoesData(item.id - 4000);
                    } else if (item.type === "helmet") {
                      HandleItemClick(HelmetData, item.id);
                      setSelectedHelmetItemIndex(item.id - 1000);
                      GetIdPerClickHelmet(item.id - 1000);
                      FakeUpdateToRefreshTheHelmetData(item.id - 1000);
                    }
                  } else {
                    handleContextMenu(e, item);
                  }
                }}
                key={`item-slot-${slot}`}
              >
                <ItemSlot
                  slot={slot}
                  data={getItemDataInSlot(slot) || null}
                  key={slot}
                  itemId={itemId}
                  FishData={FishData}
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
