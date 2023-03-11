/* eslint-disable array-callback-return */
import { useState } from "react";
import { ArmorImageAndNameAndCost } from "../../data/equipment/armor";
import ArmorLoop from "./ArmorLoop/ArmorLoop";

function Armor({
  ArmorData,
  UpgradedNamesArmor,
  handleArmorItemSelect,
}: {
  ArmorData: any;
  UpgradedNamesArmor: any;
  handleArmorItemSelect: any;
}) {
  // Function that gets called when an item is clicked on
  function GetIdPerClick(index: any) {
    const item = ArmorImageAndNameAndCost[index];

    // Save item information in local storage for later use
    localStorage.setItem("selectedArmorItemIdEquip", item.id.toString());
    localStorage.setItem("selectedArmorItemNameEquip", item.name.toString());
    localStorage.setItem("selectedArmorItemImgEquip", item.image.toString());
    localStorage.setItem("selectedArmorItemDmgEquip", item.defLvl0.toString());
    localStorage.setItem("selectedArmorItemTierEquip", item.tier.toString());
  }

  // Load saved item information from local storage
  const savedImage = localStorage.getItem("selectedArmorItemImgEquip");
  const savedName = localStorage.getItem("selectedArmorItemNameEquip");
  const savedTier = localStorage.getItem("selectedArmorItemTierEquip");

  // State hook that tracks whether a component should be open or closed
  const [OpenAndCloseForArmor, setOpenAndCloseForArmor] =
    useState<boolean>(false);

  // Function that toggles the open/close state of a component
  function OpenClose() {
    setOpenAndCloseForArmor(!OpenAndCloseForArmor);
  }

  return (
    <>
      <div
        className={`items-box Armor ${savedTier}B`}
        onClick={() => OpenClose()}
      >
        <div className="selectedItem">
          <img
            className="equipmentImgeq"
            src={
              savedImage
                ? savedImage
                : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
            }
            alt={`${savedName || "No name"} armor`}
          />
        </div>
        <div
          id="option-container"
          className={OpenAndCloseForArmor ? "open" : "close"}
        >
          <ArmorLoop
            ArmorData={ArmorData}
            UpgradedNamesArmor={UpgradedNamesArmor}
            handleArmorItemSelect={handleArmorItemSelect}
            GetIdPerClick={GetIdPerClick}
          />
        </div>
      </div>
    </>
  );
}

export default Armor;
