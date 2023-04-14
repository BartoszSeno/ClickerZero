import { MainWeaponImageAndNameAndCost } from "../../../data/equipment/mainWeapon";
/* eslint-disable array-callback-return */
const MainWeaponLoopEnchant = ({
  mainWeaponData,
  savedItemUpgrade,
  UpgradedNamesMainWeapon,
  setSelectedItemIndex,
  setUpgradedDmgMainWeapon,
  HandleItemClick,
}: {
  mainWeaponData: any;
  savedItemUpgrade: any;
  UpgradedNamesMainWeapon: any;
  setSelectedItemIndex: any;
  setUpgradedDmgMainWeapon: any;
  HandleItemClick: any;
}) => {
  // Define a function named "GetIdPerClick" that takes an argument "index" of data type.
  function GetIdPerClick(index: any) {
    // Retrieve the item data at the given index from an array named "MainWeaponImageAndNameAndCost".
    const item = MainWeaponImageAndNameAndCost[index];

    // Save the individual item data retrieved above into the browser's local storage.
    localStorage.setItem("selectedItemIdForEnchant", item.id.toString());
    localStorage.setItem("selectedItemNameForEnchant", item.name.toString());
    localStorage.setItem("selectedItemImgForEnchant", item.image.toString());
    localStorage.setItem("selectedItemTierForEnchant", item.tier.toString());
    localStorage.setItem("selectedItemDmgForEnchant", item.dmgLvl0.toString());
  }
  // FAKE FUNCTION TO UPDATA DATA ON LOAD, WORK THE SAME LIKE 'ENCHANTPERCLICK'
  //!! BUT VALUE NOT SAVED IN LOCALSTORAGE !!
  function FakeUpdateToRefreshTheData(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];
    const itemUpgradeName = `${item.name}`;
    const savedItemUpgrade = localStorage.getItem(itemUpgradeName);
    const savedItemUpgradeNumber = Number(savedItemUpgrade);
    const upgradedValue =
      savedItemUpgradeNumber < 15 ? savedItemUpgradeNumber : 15;

    localStorage.setItem("upgradedValue", upgradedValue.toString());

    localStorage.setItem(itemUpgradeName, upgradedValue.toString());

    const itemName = `+${upgradedValue} ${item.name}`;

    const upgradedNames = [...UpgradedNamesMainWeapon];
    upgradedNames[index] = itemName;

    const itemSavedDmgMainKey = `selectedItemDmgForEnchant_${item.name}`;

    const savedDmgMain =
      localStorage.getItem(itemSavedDmgMainKey) || item.dmgLvl0;
    setUpgradedDmgMainWeapon(savedDmgMain);
  }

  return (
    <>
      {mainWeaponData.map((item: any, index: any) => {
        if (item.isBought) {
          return (
            <div key={`item_${index}`}>
              {Array.from({ length: 1 }, (_, i) => {
                // Replace length: item.count with a static number or a variable
                const mainId = `${index}${i}`;
                const itemUpgradeName = `${item.name}${index}${mainId}`;

                const itemId = `${index}${savedItemUpgrade || 0}`;
                localStorage.getItem(itemUpgradeName);
                const upgradedName = UpgradedNamesMainWeapon[index];

                return (
                  <div
                    className={`option ${itemId} `}
                    id={mainId}
                    key={`item_${index}_${i}`}
                    onClick={(e) => {
                      setSelectedItemIndex(index);
                      GetIdPerClick(index);
                      HandleItemClick(mainWeaponData, item.id);
                      FakeUpdateToRefreshTheData(index);
                    }}
                  >
                    <img
                      className="OptionEquipmentImg"
                      src={item.image}
                      alt={`${item.name} weapon`}
                    />
                    <span className={`itemName ${item.tier}C`}>
                      {upgradedName}
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

export default MainWeaponLoopEnchant;
