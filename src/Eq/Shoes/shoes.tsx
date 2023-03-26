/* eslint-disable array-callback-return */
import { ShoesImageAndNameAndCost } from "../../data/equipment/Shoes";
import ShoesLoop from "./ShoesLoop/ShoesLoop";

function Shoes({
  ShoesData,
  UpgradedNamesShoes,
  handleShoesItemSelect,
  isActive,
  handleItemClick,
}: {
  ShoesData: any;
  UpgradedNamesShoes: any;
  handleShoesItemSelect: any;
  isActive: any;
  handleItemClick: any;
}) {
  // Function that gets called when an item is clicked on
  function GetIdPerClick(index: any) {
    const item = ShoesImageAndNameAndCost[index];

    // Save item information in local storage for later use
    localStorage.setItem("selectedShoesItemIdEquip", item.id.toString());
    localStorage.setItem("selectedShoesItemNameEquip", item.name.toString());
    localStorage.setItem("selectedShoesItemImgEquip", item.image.toString());
    localStorage.setItem("selectedShoesItemDmgEquip", item.defLvl0.toString());
    localStorage.setItem("selectedShoesItemTierEquip", item.tier.toString());
  }

  // Load saved item information from local storage
  const savedImage = localStorage.getItem("selectedShoesItemImgEquip");
  const savedName = localStorage.getItem("selectedShoesItemNameEquip");
  const savedTier = localStorage.getItem("selectedShoesItemTierEquip");

  return (
    <>
      <div
        className={`items-box Shoes ${savedTier}B`}
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
            alt={`${savedName || "No name"} Shoes`}
          />
        </div>
        <div
          id="option-container"
          className={`ocs ${isActive ? "open" : "close"}`}
        >
          <ShoesLoop
            ShoesData={ShoesData}
            UpgradedNamesShoes={UpgradedNamesShoes}
            handleShoesItemSelect={handleShoesItemSelect}
            GetIdPerClick={GetIdPerClick}
          />
        </div>
      </div>
    </>
  );
}

export default Shoes;
