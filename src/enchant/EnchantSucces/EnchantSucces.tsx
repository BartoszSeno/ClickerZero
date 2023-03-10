import { useState } from "react";
import { MainWeaponImageAndNameAndCost } from "../../data/equipment/mainWeapon";
import { formatNumber } from "../../hook/FormatNumber";

const EnchantSucces = ({
  upgradedValue,
  selectedItemIndex,
  savedImage,
  savedName,
  UpgradedDmgMainWeapon,
  setUpgradedDmgMainWeapon,
}: {
  upgradedValue: any;
  selectedItemIndex: any;
  savedImage: any;
  savedName: any;
  UpgradedDmgMainWeapon: any;
  setUpgradedDmgMainWeapon: any;
}) => {
  // Declare state to save upgraded item name, initialized with an empty string
  const [UpgradedName, setUpgradedName] = useState<string>("");

  // Function to show item name on hover
  function ShowNameOnHover(index: any) {
    // Get item from the list of weapon images and names at specified index
    const item = MainWeaponImageAndNameAndCost[index];

    // Create name of upgrade based on item name
    const itemUpgradeName = `${item.name}`;

    // Load saved upgrade value from local storage or set it to 0
    const savedItemUpgradeFromLocalStorage =
      localStorage.getItem(itemUpgradeName);
    const savedItemUpgradeValue = savedItemUpgradeFromLocalStorage
      ? Number(savedItemUpgradeFromLocalStorage)
      : 0;

    // Set upgraded item name based on upgrade value, or set it to empty string if upgrade value is 15 or greater
    if (savedItemUpgradeValue < 15) {
      const itemName = `+${savedItemUpgradeValue + 1} ${item.name}`;
      setUpgradedName(itemName);
    } else {
      setUpgradedName("");
    }

    // Set upgraded damage value for the selected item, multiplying it by 2
    const itemSavedDmgMainKey = `selectedItemDmgForEnchant_${item.name}`;
    let newSavedDmgMain = Number(
      localStorage.getItem(itemSavedDmgMainKey) || item.dmgLvl0
    );
    newSavedDmgMain *= 2;
    setUpgradedDmgMainWeapon(newSavedDmgMain);
  }

  return (
    <>
      {upgradedValue < 15 ? (
        <>
          <div
            className="EnchantSuccess"
            onMouseEnter={() => {
              ShowNameOnHover(selectedItemIndex);
            }}
          >
            <img
              className="mainWeaponImg"
              src={
                savedImage
                  ? savedImage
                  : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
              }
              alt={`${savedName || "No name"} weapon`}
            />
          </div>
          <div className="infoEnchant">
            <span className="UpgradeName">{UpgradedName}</span>
            <div className="enchantBox2">
              <img
                className="UpgradeImg"
                src={
                  savedImage
                    ? savedImage
                    : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
                }
                alt={`${savedName || "No name"} weapon`}
              />
              <span className="UpgradeDmg">
                <span className="UpgradeDmgTitle">Deamge:</span>
                {formatNumber(UpgradedDmgMainWeapon)}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="EnchantSuccess"></div>
          <div className="infoEnchant"></div>
        </>
      )}
    </>
  );
};

export default EnchantSucces;
