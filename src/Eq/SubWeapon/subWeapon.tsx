/* eslint-disable array-callback-return */
import { useState } from "react";
import { ShieldAndDaggerImageAndNameAndCost } from "../../data/equipment/subWeapon";
import ShieldAndDaggerLoop from "./subWeapon/subWeaponLoop";

function ShieldAndDagger({
  ShieldAndDaggerData,
  UpgradedNamesShieldAndDagger,
  handleShieldAndDaggerItemSelect,
  isActive,
  handleItemClick,
}: {
  ShieldAndDaggerData: any;
  UpgradedNamesShieldAndDagger: any;
  handleShieldAndDaggerItemSelect: any;
  isActive: any;
  handleItemClick: any;
}) {
  // Function that gets called when an item is clicked on
  function GetIdPerClick(index: any) {
    const item = ShieldAndDaggerImageAndNameAndCost[index];

    // Save item information in local storage for later use
    localStorage.setItem(
      "selectedShieldAndDaggerItemIdEquip",
      item.id.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemNameEquip",
      item.name.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemImgEquip",
      item.image.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemDmgEquip",
      item.defLvl0.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemTierEquip",
      item.tier.toString()
    );
  }

  // Load saved item information from local storage
  const savedImage = localStorage.getItem(
    "selectedShieldAndDaggerItemImgEquip"
  );
  const savedName = localStorage.getItem(
    "selectedShieldAndDaggerItemNameEquip"
  );
  const savedTier = localStorage.getItem(
    "selectedShieldAndDaggerItemTierEquip"
  );

  return (
    <>
      <div
        className={`items-box ShieldAndDagger ${savedTier}B`}
        onClick={() => handleItemClick()}
      >
        <div className="selectedItem">
          <img
            className="equipmentImgeq"
            src={
              savedImage
                ? savedImage
                : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
            }
            alt={`${savedName || "No name"} ShieldAndDagger`}
          />
        </div>
        <div
          id="option-container"
          className={`ocsw ${isActive ? "open" : "close"}`}
        >
          <ShieldAndDaggerLoop
            ShieldAndDaggerData={ShieldAndDaggerData}
            UpgradedNamesShieldAndDagger={UpgradedNamesShieldAndDagger}
            handleShieldAndDaggerItemSelect={handleShieldAndDaggerItemSelect}
            GetIdPerClick={GetIdPerClick}
          />
        </div>
      </div>
    </>
  );
}

export default ShieldAndDagger;
