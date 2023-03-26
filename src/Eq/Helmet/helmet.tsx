/* eslint-disable array-callback-return */
import { HelmetImageAndNameAndCost } from "../../data/equipment/helmet";
import HelmetLoop from "./Helmetloop/HelmetLoop";

function Helmet({
  HelmetData,
  UpgradedNamesHelmet,
  handleHelmetItemSelect,
  isActive,
  handleItemClick,
}: {
  HelmetData: any;
  UpgradedNamesHelmet: any;
  handleHelmetItemSelect: any;
  isActive: any;
  handleItemClick: any;
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

  return (
    <>
      <div
        className={`items-box Helmet ${savedTier}B`}
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
            alt={`${savedName || "No name"} Helmet`}
          />
        </div>
        <div
          id="option-container"
          className={`och ${isActive ? "open" : "close"}`}
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
