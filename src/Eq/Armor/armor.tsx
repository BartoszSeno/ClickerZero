/* eslint-disable array-callback-return */
import { ArmorImageAndNameAndCost } from "../../data/equipment/armor";
import ArmorLoop from "./ArmorLoop/ArmorLoop";

function Armor({
  ArmorData,
  UpgradedNamesArmor,
  handleArmorItemSelect,
  isActive,
  handleItemClick,
}: {
  ArmorData: any;
  UpgradedNamesArmor: any;
  handleArmorItemSelect: any;
  isActive: any;
  handleItemClick: any;
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

  return (
    <>
      <div
        className={`items-box Armor ${savedTier}B`}
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
            alt={`${savedName || "No name"} armor`}
          />
        </div>
        <div
          id="option-container"
          className={`oca ${isActive ? "open" : "close"}`}
        >
          <ArmorLoop
            ArmorData={ArmorData}
            UpgradedNamesArmor={UpgradedNamesArmor}
            handleArmorItemSelect={handleArmorItemSelect}
            GetIdPerClick={GetIdPerClick}
          />
          a
        </div>
      </div>
    </>
  );
}

export default Armor;
