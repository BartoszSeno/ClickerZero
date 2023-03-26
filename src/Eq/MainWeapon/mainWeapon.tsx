/* eslint-disable array-callback-return */
import { MainWeaponImageAndNameAndCost } from "../../data/equipment/mainWeapon";
import MainWeaponLoop from "./MainWeaponLoop/MWLoop";

function MainWeapon({
  mainWeaponData,
  UpgradedNamesMainWeapon,
  handleItemSelect,
  isActive,
  handleItemClick,
}: {
  mainWeaponData: any;
  UpgradedNamesMainWeapon: any;
  handleItemSelect: any;
  isActive: any;
  handleItemClick: any;
}) {
  // Function that gets called when an item is clicked on
  function GetIdPerClick(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];

    // Save item information in local storage for later use
    localStorage.setItem("selectedItemIdEquip", item.id.toString());
    localStorage.setItem("selectedItemNameEquip", item.name.toString());
    localStorage.setItem("selectedItemImgEquip", item.image.toString());
    localStorage.setItem("selectedItemDmgEquip", item.dmgLvl0.toString());
    localStorage.setItem("selectedItemTierEquip", item.tier.toString());
  }

  // Load saved item information from local storage
  const savedImage = localStorage.getItem("selectedItemImgEquip");
  const savedName = localStorage.getItem("selectedItemNameEquip");
  const savedTier = localStorage.getItem("selectedItemTierEquip");

  return (
    <>
      <div
        className={`items-box MainWeapon ${savedTier}B`}
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
            alt={`${savedName || "No name"} weapon`}
          />
        </div>
        <div
          id="option-container"
          className={`ocmw ${isActive ? "open" : "close"}`}
        >
          <MainWeaponLoop
            mainWeaponData={mainWeaponData}
            UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
            handleItemSelect={handleItemSelect}
            GetIdPerClick={GetIdPerClick}
          />
        </div>
      </div>
    </>
  );
}

export default MainWeapon;
