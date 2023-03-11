/* eslint-disable array-callback-return */
import { useState } from "react";
import { HelmetImageAndNameAndCost } from "../../data/equipment/helmet";
import HelmetLoop from "./Helmetloop/HelmetLoop";

function Helmet({
  HelmetData,
  UpgradedNamesHelmet,
  handleHelmetItemSelect,
}: {
  HelmetData: any;
  UpgradedNamesHelmet: any;
  handleHelmetItemSelect: any;
}) {
  // Function that gets called when an item is clicked on
  function GetIdPerClick(index: any) {
    const item = HelmetImageAndNameAndCost[index];

    // Save item information in local storage for later use
    localStorage.setItem("selectedHelmetItemIdEquip", item.id.toString());
    localStorage.setItem("selectedHelmetItemNameEquip", item.name.toString());
    localStorage.setItem("selectedHelmetItemImgEquip", item.image.toString());
    localStorage.setItem("selectedHelmetItemDmgEquip", item.defLvl0.toString());
    localStorage.setItem("selectedHelmetItemTierEquip", item.tier.toString());
  }

  // Load saved item information from local storage
  const savedImage = localStorage.getItem("selectedHelmetItemImgEquip");
  const savedName = localStorage.getItem("selectedHelmetItemNameEquip");
  const savedTier = localStorage.getItem("selectedHelmetItemTierEquip");

  // State hook that tracks whether a component should be open or closed
  const [OpenAndCloseForHelmet, setOpenAndCloseForHelmet] =
    useState<boolean>(false);

  // Function that toggles the open/close state of a component
  function OpenClose() {
    setOpenAndCloseForHelmet(!OpenAndCloseForHelmet);
  }

  return (
    <>
      <div
        className={`items-box Helmet ${savedTier}B`}
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
            alt={`${savedName || "No name"} Helmet`}
          />
        </div>
        <div
          id="option-container"
          className={OpenAndCloseForHelmet ? "open" : "close"}
        >
          <HelmetLoop
            HelmetData={HelmetData}
            UpgradedNamesHelmet={UpgradedNamesHelmet}
            handleHelmetItemSelect={handleHelmetItemSelect}
            GetIdPerClick={GetIdPerClick}
          />
        </div>
      </div>
    </>
  );
}

export default Helmet;
