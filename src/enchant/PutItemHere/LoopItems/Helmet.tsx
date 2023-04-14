/* eslint-disable array-callback-return */
import { HelmetImageAndNameAndCost } from "../../../data/equipment/helmet";
const HelmetLoopEnchant = ({
  HelmetData,
  savedHelmetItemUpgrade,
  UpgradedNamesHelmet,
  setSelectedHelmetItemIndex,
  setUpgradedDefHelmet,
  HandleItemClick,
}: {
  HelmetData: any;
  savedHelmetItemUpgrade: any;
  UpgradedNamesHelmet: any;
  setSelectedHelmetItemIndex: any;
  setUpgradedDefHelmet: any;
  HandleItemClick: any;
}) => {
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

  return (
    <>
      {HelmetData.map((helmetItem: any, HelmetIndex: any) => {
        if (helmetItem.isBought) {
          return (
            <div key={`Helmet_${HelmetIndex}`}>
              {Array.from({ length: 1 }, (_, a) => {
                const mainHelmetId = `${HelmetIndex}${a}`;
                const HelmetItemUpgradeName = `${helmetItem.name}${HelmetIndex}${mainHelmetId}`;
                const HelmetItemId = `${HelmetIndex}${
                  savedHelmetItemUpgrade || 0
                }`;
                localStorage.getItem(HelmetItemUpgradeName);
                const upgradedNameHelmet = UpgradedNamesHelmet[HelmetIndex];

                return (
                  <div
                    className={`option ${HelmetItemId} `}
                    id={HelmetItemId}
                    key={`Helmet_${HelmetIndex}_${a}`}
                    onClick={(e) => {
                      setSelectedHelmetItemIndex(HelmetIndex);
                      GetIdPerClickHelmet(HelmetIndex);
                      FakeUpdateToRefreshTheHelmetData(HelmetIndex);
                      HandleItemClick(HelmetData, helmetItem.id);
                    }}
                  >
                    <img
                      className="OptionEquipmentImg"
                      src={helmetItem.image}
                      alt={`${helmetItem.name} Helmet`}
                    />
                    <span className={`itemName ${helmetItem.tier}C`}>
                      {upgradedNameHelmet}
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

export default HelmetLoopEnchant;
