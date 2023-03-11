import { MainWeaponImageAndNameAndCost } from "../../data/equipment/mainWeapon";
import { ArmorImageAndNameAndCost } from "../../data/equipment/armor";

/* eslint-disable array-callback-return */
const LoopItemForEnchant = ({
  mainWeaponData,
  savedItemUpgrade,
  UpgradedNamesMainWeapon,
  setSelectedItemIndex,
  setUpgradedDmgMainWeapon,
  ArmorData,
  savedArmorItemUpgrade,
  UpgradedNamesArmor,
  setSelectedArmorItemIndex,
  setUpgradedDefArmor,
  setitsMainWeapon,
  setitsArmor,
  itsMainWeapon,
  itsArmor,
}: {
  mainWeaponData: any;
  savedItemUpgrade: any;
  UpgradedNamesMainWeapon: any;
  setSelectedItemIndex: any;
  setUpgradedDmgMainWeapon: any;
  ArmorData: any;
  savedArmorItemUpgrade: any;
  UpgradedNamesArmor: any;
  setSelectedArmorItemIndex: any;
  setUpgradedDefArmor: any;
  setitsMainWeapon: any;
  setitsArmor: any;
  itsMainWeapon: any;
  itsArmor: any;
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
  function GetIdPerClickArmor(armorIndex: any) {
    // Retrieve the item data at the given index from an array named "MainWeaponImageAndNameAndCost".
    const armor = ArmorImageAndNameAndCost[armorIndex];

    // Save the individual item data retrieved above into the browser's local storage.
    localStorage.setItem("selectedArmorItemIdForEnchant", armor.id.toString());
    localStorage.setItem(
      "selectedArmorItemNameForEnchant",
      armor.name.toString()
    );
    localStorage.setItem(
      "selectedArmorItemImgForEnchant",
      armor.image.toString()
    );
    localStorage.setItem(
      "selectedArmorItemTierForEnchant",
      armor.tier.toString()
    );
    localStorage.setItem(
      "selectedArmorItemDefForEnchant",
      armor.defLvl0.toString()
    );
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
  //armor
  function FakeUpdateToRefreshTheArmorData(armorIndex: any) {
    const item = ArmorImageAndNameAndCost[armorIndex];
    const ArmorItemUpgradeName = `${item.name}`;
    const savedArmorItemUpgrade = localStorage.getItem(ArmorItemUpgradeName);
    const savedArmorItemUpgradeNumber = Number(savedArmorItemUpgrade);
    const ArmorUpgradedValue =
      savedArmorItemUpgradeNumber < 15 ? savedArmorItemUpgradeNumber : 15;

    localStorage.setItem("ArmorUpgradedValue", ArmorUpgradedValue.toString());

    localStorage.setItem(ArmorItemUpgradeName, ArmorUpgradedValue.toString());

    const ArmorItemName = `+${ArmorUpgradedValue} ${item.name}`;

    const upgradedArmorNames = [...UpgradedNamesArmor];
    upgradedArmorNames[armorIndex] = ArmorItemName;

    const itemSavedDefArmorKey = `selectedArmorItemDefForEnchant_${item.name}`;

    const savedDefArmor =
      localStorage.getItem(itemSavedDefArmorKey) || item.defLvl0;
    setUpgradedDefArmor(savedDefArmor);
  }

  // its weapon or armor?
  const HandleItemClick = (itemArray: any[], clickedItemId: string) => {
    const clickedItemIndex = itemArray.findIndex(
      (item) => item.id === Number(clickedItemId)
    );
    if (clickedItemIndex !== -1) {
      if (itemArray === mainWeaponData) {
        setSelectedItemIndex(clickedItemIndex);
        GetIdPerClick(clickedItemIndex);
        FakeUpdateToRefreshTheData(clickedItemIndex);
        setitsMainWeapon(true);
        setitsArmor(false);
      } else if (itemArray === ArmorData) {
        setSelectedArmorItemIndex(clickedItemIndex);
        GetIdPerClickArmor(clickedItemIndex);
        FakeUpdateToRefreshTheArmorData(clickedItemIndex);
        setitsArmor(true);
        setitsMainWeapon(false);
      }
    }
  };

  return (
    <>
      {mainWeaponData.map((item: any, index: any) => {
        if (item.isBought) {
          return (
            <div key={`item_${index}`}>
              {Array.from({ length: item.count }, (_, i) => {
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
      {ArmorData.map((armorItem: any, armorIndex: any) => {
        if (armorItem.isBought) {
          return (
            <div key={`armor_${armorIndex}`}>
              {Array.from({ length: armorItem.count }, (_, a) => {
                const mainArmorId = `${armorIndex}${a}`;
                const ArmorItemUpgradeName = `${armorItem.name}${armorIndex}${mainArmorId}`;
                const ArmorItemId = `${armorIndex}${
                  savedArmorItemUpgrade || 0
                }`;
                localStorage.getItem(ArmorItemUpgradeName);
                const upgradedNameArmor = UpgradedNamesArmor[armorIndex];

                return (
                  <div
                    className={`option ${ArmorItemId} `}
                    id={ArmorItemId}
                    key={`armor_${armorIndex}_${a}`}
                    onClick={(e) => {
                      setSelectedArmorItemIndex(armorIndex);
                      GetIdPerClickArmor(armorIndex);
                      FakeUpdateToRefreshTheArmorData(armorIndex);
                      HandleItemClick(ArmorData, armorItem.id);
                    }}
                  >
                    <img
                      className="OptionEquipmentImg"
                      src={armorItem.image}
                      alt={`${armorItem.name} armor`}
                    />
                    <span className={`itemName ${armorItem.tier}C`}>
                      {upgradedNameArmor}
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

export default LoopItemForEnchant;
