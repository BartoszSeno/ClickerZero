import { ArmorImageAndNameAndCost } from "../../../data/equipment/armor";
/* eslint-disable array-callback-return */
const ArmorLoopEnchant = ({
  ArmorData,
  savedArmorItemUpgrade,
  UpgradedNamesArmor,
  setSelectedArmorItemIndex,
  setUpgradedDefArmor,
  HandleItemClick,
}: {
  ArmorData: any;
  savedArmorItemUpgrade: any;
  UpgradedNamesArmor: any;
  setSelectedArmorItemIndex: any;
  setUpgradedDefArmor: any;
  HandleItemClick: any;
}) => {
  // Define a function named "GetIdPerClickArmor" that takes an argument "index" of data type.
  function GetIdPerClickArmor(armorIndex: any) {
    // Retrieve the item data at the given index from an array named "ArmorImageAndNameAndCost".
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

  return (
    <>
      {ArmorData.map((armorItem: any, armorIndex: any) => {
        if (armorItem.isBought) {
          return (
            <div key={`armor_${armorIndex}`}>
              {Array.from({ length: 1 }, (_, a) => {
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

export default ArmorLoopEnchant;
