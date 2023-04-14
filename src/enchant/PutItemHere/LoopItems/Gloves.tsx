/* eslint-disable array-callback-return */
import { GlovesImageAndNameAndCost } from "../../../data/equipment/gloves";
const GlovesLoopEnchant = ({
  GlovesData,
  savedGlovesItemUpgrade,
  UpgradedNamesGloves,
  setSelectedGlovesItemIndex,
  setUpgradedDefGloves,
  HandleItemClick,
}: {
  GlovesData: any;
  savedGlovesItemUpgrade: any;
  UpgradedNamesGloves: any;
  setSelectedGlovesItemIndex: any;
  setUpgradedDefGloves: any;
  HandleItemClick: any;
}) => {
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

  return (
    <>
      {GlovesData.map((GlovesItem: any, GlovesIndex: any) => {
        if (GlovesItem.isBought) {
          return (
            <div key={`Gloves_${GlovesIndex}`}>
              {Array.from({ length: 1 }, (_, a) => {
                const mainGlovesId = `${GlovesIndex}${a}`;
                const GlovesItemUpgradeName = `${GlovesItem.name}${GlovesIndex}${mainGlovesId}`;
                const GlovesItemId = `${GlovesIndex}${
                  savedGlovesItemUpgrade || 0
                }`;
                localStorage.getItem(GlovesItemUpgradeName);
                const upgradedNameGloves = UpgradedNamesGloves[GlovesIndex];

                return (
                  <div
                    className={`option ${GlovesItemId} `}
                    id={GlovesItemId}
                    key={`Gloves_${GlovesIndex}_${a}`}
                    onClick={(e) => {
                      setSelectedGlovesItemIndex(GlovesIndex);
                      GetIdPerClickGloves(GlovesIndex);
                      FakeUpdateToRefreshTheGlovesData(GlovesIndex);
                      HandleItemClick(GlovesData, GlovesItem.id);
                    }}
                  >
                    <img
                      className="OptionEquipmentImg"
                      src={GlovesItem.image}
                      alt={`${GlovesItem.name} Gloves`}
                    />
                    <span className={`itemName ${GlovesItem.tier}C`}>
                      {upgradedNameGloves}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </>
  );
};

export default GlovesLoopEnchant;
