/* eslint-disable array-callback-return */
import { useState } from "react";
import { GlovesImageAndNameAndCost } from "../../data/equipment/gloves";
import GlovesLoop from "./GlovesLoop/glovesLoop";

function Gloves({
  GlovesData,
  UpgradedNamesGloves,
  handleGlovesItemSelect,
}: {
  GlovesData: any;
  UpgradedNamesGloves: any;
  handleGlovesItemSelect: any;
}) {
  // Function that gets called when an item is clicked on
  function GetIdPerClick(index: any) {
    const item = GlovesImageAndNameAndCost[index];

    // Save item information in local storage for later use
    localStorage.setItem("selectedGlovesItemIdEquip", item.id.toString());
    localStorage.setItem("selectedGlovesItemNameEquip", item.name.toString());
    localStorage.setItem("selectedGlovesItemImgEquip", item.image.toString());
    localStorage.setItem("selectedGlovesItemDmgEquip", item.defLvl0.toString());
    localStorage.setItem("selectedGlovesItemTierEquip", item.tier.toString());
  }

  // Load saved item information from local storage
  const savedImage = localStorage.getItem("selectedGlovesItemImgEquip");
  const savedName = localStorage.getItem("selectedGlovesItemNameEquip");
  const savedTier = localStorage.getItem("selectedGlovesItemTierEquip");

  // State hook that tracks whether a component should be open or closed
  const [OpenAndCloseForGloves, setOpenAndCloseForGloves] =
    useState<boolean>(false);

  // Function that toggles the open/close state of a component
  function OpenClose() {
    setOpenAndCloseForGloves(!OpenAndCloseForGloves);
  }

  return (
    <>
      <div
        className={`items-box Gloves ${savedTier}B`}
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
            alt={`${savedName || "No name"} Gloves`}
          />
        </div>
        <div
          id="option-container"
          className={OpenAndCloseForGloves ? "open" : "close"}
        >
          <GlovesLoop
            GlovesData={GlovesData}
            UpgradedNamesGloves={UpgradedNamesGloves}
            handleGlovesItemSelect={handleGlovesItemSelect}
            GetIdPerClick={GetIdPerClick}
          />
        </div>
      </div>
    </>
  );
}

export default Gloves;
