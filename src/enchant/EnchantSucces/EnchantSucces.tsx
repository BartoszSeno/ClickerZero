import { useState } from "react";
import { MainWeaponImageAndNameAndCost } from "../../data/equipment/mainWeapon";
import { ArmorImageAndNameAndCost } from "../../data/equipment/armor";
import { HelmetImageAndNameAndCost } from "../../data/equipment/helmet";
import { ShoesImageAndNameAndCost } from "../../data/equipment/Shoes";
import { formatNumber } from "../../hook/FormatNumber";

const EnchantSucces = ({
  upgradedValue,
  selectedItemIndex,
  savedImage,
  savedName,
  UpgradedDmgMainWeapon,
  setUpgradedDmgMainWeapon,
  selectedArmorItemIndex,
  savedArmorImage,
  savedArmorName,
  setUpgradedDefArmor,
  UpgradedDefArmor,
  itsMainWeapon,
  itsArmor,
  UpgradedDefHelmet,
  selectedHelmetItemIndex,
  savedHelmetImage,
  savedHelmetName,
  setUpgradedDefHelmet,
  itsHelmet,
  UpgradedDefShoes,
  selectedShoesItemIndex,
  savedShoesImage,
  savedShoesName,
  setUpgradedDefShoes,
  itsShoes,
}: {
  upgradedValue: any;
  selectedItemIndex: any;
  savedImage: any;
  savedName: any;
  UpgradedDmgMainWeapon: any;
  setUpgradedDmgMainWeapon: any;
  selectedArmorItemIndex: any;
  savedArmorImage: any;
  savedArmorName: any;
  setUpgradedDefArmor: any;
  UpgradedDefArmor: any;
  itsMainWeapon: any;
  itsArmor: any;
  UpgradedDefHelmet: any;
  selectedHelmetItemIndex: any;
  savedHelmetImage: any;
  savedHelmetName: any;
  setUpgradedDefHelmet: any;
  itsHelmet: any;
  UpgradedDefShoes: any;
  selectedShoesItemIndex: any;
  savedShoesImage: any;
  savedShoesName: any;
  setUpgradedDefShoes: any;
  itsShoes: any;
}) => {
  // Declare state to save upgraded item name, initialized with an empty string
  const [UpgradedName, setUpgradedName] = useState<string>("");
  //armor
  const [UpgradedArmorName, setUpgradedArmorName] = useState<string>("");
  //helmet
  const [UpgradedHelmetName, setUpgradedHelmetName] = useState<string>("");
  //Shoes
  const [UpgradedShoesName, setUpgradedShoesName] = useState<string>("");
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
  //armor======
  function ShowNameOnHoverForArmor(armorIndex: any) {
    // Get item from the list of weapon images and names at specified index
    const armor = ArmorImageAndNameAndCost[armorIndex];

    // Create name of upgrade based on item name
    const ArmorItemUpgradeName = `${armor.name}`;

    // Load saved upgrade value from local storage or set it to 0
    const savedArmorItemUpgradeFromLocalStorage =
      localStorage.getItem(ArmorItemUpgradeName);
    const savedArmorItemUpgradeValue = savedArmorItemUpgradeFromLocalStorage
      ? Number(savedArmorItemUpgradeFromLocalStorage)
      : 0;

    // Set upgraded item name based on upgrade value, or set it to empty string if upgrade value is 15 or greater
    if (savedArmorItemUpgradeValue < 15) {
      const ArmorItemName = `+${savedArmorItemUpgradeValue + 1} ${armor.name}`;
      setUpgradedArmorName(ArmorItemName);
    } else {
      setUpgradedArmorName("");
    }

    // Set upgraded damage value for the selected item, multiplying it by 2
    const itemSavedDefArmorKey = `selectedItemDefForEnchant_${armor.name}`;
    let newSavedDefArmor = Number(
      localStorage.getItem(itemSavedDefArmorKey) || armor.defLvl0
    );
    newSavedDefArmor *= 2;
    setUpgradedDefArmor(newSavedDefArmor);
  }

  function ShowNameOnHoverForHelmet(HelmetIndex: any) {
    // Get item from the list of weapon images and names at specified index
    const Helmet = HelmetImageAndNameAndCost[HelmetIndex];

    // Create name of upgrade based on item name
    const HelmetItemUpgradeName = `${Helmet.name}`;

    // Load saved upgrade value from local storage or set it to 0
    const savedHelmetItemUpgradeFromLocalStorage = localStorage.getItem(
      HelmetItemUpgradeName
    );
    const savedHelmetItemUpgradeValue = savedHelmetItemUpgradeFromLocalStorage
      ? Number(savedHelmetItemUpgradeFromLocalStorage)
      : 0;

    // Set upgraded item name based on upgrade value, or set it to empty string if upgrade value is 15 or greater
    if (savedHelmetItemUpgradeValue < 15) {
      const HelmetItemName = `+${savedHelmetItemUpgradeValue + 1} ${
        Helmet.name
      }`;
      setUpgradedHelmetName(HelmetItemName);
    } else {
      setUpgradedHelmetName("");
    }

    // Set upgraded damage value for the selected item, multiplying it by 2
    const itemSavedDefHelmetKey = `selectedItemDefForEnchant_${Helmet.name}`;
    let newSavedDefHelmet = Number(
      localStorage.getItem(itemSavedDefHelmetKey) || Helmet.defLvl0
    );
    newSavedDefHelmet *= 2;
    setUpgradedDefHelmet(newSavedDefHelmet);
  }

  function ShowNameOnHoverForShoes(ShoesIndex: any) {
    // Get item from the list of weapon images and names at specified index
    const Shoes = ShoesImageAndNameAndCost[ShoesIndex];

    // Create name of upgrade based on item name
    const ShoesItemUpgradeName = `${Shoes.name}`;

    // Load saved upgrade value from local storage or set it to 0
    const savedShoesItemUpgradeFromLocalStorage =
      localStorage.getItem(ShoesItemUpgradeName);
    const savedShoesItemUpgradeValue = savedShoesItemUpgradeFromLocalStorage
      ? Number(savedShoesItemUpgradeFromLocalStorage)
      : 0;

    // Set upgraded item name based on upgrade value, or set it to empty string if upgrade value is 15 or greater
    if (savedShoesItemUpgradeValue < 15) {
      const ShoesItemName = `+${savedShoesItemUpgradeValue + 1} ${Shoes.name}`;
      setUpgradedShoesName(ShoesItemName);
    } else {
      setUpgradedShoesName("");
    }

    // Set upgraded damage value for the selected item, multiplying it by 2
    const itemSavedDefShoesKey = `selectedItemDefForEnchant_${Shoes.name}`;
    let newSavedDefShoes = Number(
      localStorage.getItem(itemSavedDefShoesKey) || Shoes.defLvl0
    );
    newSavedDefShoes *= 2;
    setUpgradedDefShoes(newSavedDefShoes);
  }

  return (
    <>
      {upgradedValue < 15 ? (
        <>
          <div
            className="EnchantSuccess"
            onMouseEnter={() => {
              if (itsMainWeapon === true) {
                ShowNameOnHover(selectedItemIndex);
              } else if (itsArmor === true) {
                ShowNameOnHoverForArmor(selectedArmorItemIndex);
              } else if (itsHelmet === true) {
                ShowNameOnHoverForHelmet(selectedHelmetItemIndex);
              } else if (itsShoes === true) {
                ShowNameOnHoverForShoes(selectedShoesItemIndex);
              }
            }}
          >
            <img
              className="mainWeaponImg"
              src={
                itsMainWeapon
                  ? savedImage
                  : itsArmor
                  ? savedArmorImage
                  : itsHelmet
                  ? savedHelmetImage
                  : itsShoes
                  ? savedShoesImage
                  : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
              }
              alt={`${
                itsMainWeapon
                  ? savedName
                  : itsArmor
                  ? savedArmorName
                  : itsHelmet
                  ? savedHelmetName
                  : itsShoes
                  ? UpgradedShoesName
                  : "No name weapon"
              }`}
            />
          </div>
          <div className="infoEnchant">
            <span className="UpgradeName">
              {itsMainWeapon
                ? UpgradedName
                : itsArmor
                ? UpgradedArmorName
                : itsHelmet
                ? UpgradedHelmetName
                : itsShoes
                ? UpgradedShoesName
                : ""}
            </span>
            <div className="enchantBox2">
              <img
                className="UpgradeImg"
                src={
                  itsMainWeapon
                    ? savedImage
                    : itsArmor
                    ? savedArmorImage
                    : itsHelmet
                    ? savedHelmetImage
                    : itsShoes
                    ? savedShoesImage
                    : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
                }
                alt={`${
                  itsMainWeapon
                    ? savedName
                    : itsArmor
                    ? savedArmorName
                    : itsHelmet
                    ? savedHelmetName
                    : itsShoes
                    ? UpgradedShoesName
                    : "No name weapon"
                }`}
              />
              <span className="UpgradeDmg">
                <span className="UpgradeDmgTitle">
                  {itsMainWeapon ? "Demage: " : "Defence: "}
                </span>
                {itsMainWeapon
                  ? formatNumber(UpgradedDmgMainWeapon)
                  : itsArmor
                  ? formatNumber(UpgradedDefArmor)
                  : itsHelmet
                  ? formatNumber(UpgradedDefHelmet)
                  : itsShoes
                  ? formatNumber(UpgradedDefShoes)
                  : ""}
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
