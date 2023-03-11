/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "../assets/css/Normal/enchant/enchant.css";
import { MainWeaponImageAndNameAndCost } from "../data/equipment/mainWeapon";
import { ArmorImageAndNameAndCost } from "../data/equipment/armor";
import EnchantSucces from "./EnchantSucces/EnchantSucces";
import PutItemHere from "./PutItemHere/PutItemHere";

const Enchant = ({
  mainWeaponData,
  setUpgradedNamesMainWeapon,
  UpgradedNamesMainWeapon,
  setUpgradedDmgMainWeapon,
  UpgradedDmgMainWeapon,
  UpgradedDefArmor,
  setUpgradedDefArmor,
  ArmorData,
  setUpgradedNamesArmor,
  UpgradedNamesArmor,
}: {
  mainWeaponData: any;
  setUpgradedNamesMainWeapon: any;
  UpgradedNamesMainWeapon: any;
  setUpgradedDmgMainWeapon: any;
  UpgradedDmgMainWeapon: any;

  UpgradedDefArmor: any;
  setUpgradedDefArmor: any;
  ArmorData: any;
  setUpgradedNamesArmor: any;
  UpgradedNamesArmor: any;
}) => {
  /// load value form localstorage
  const savedImage = localStorage.getItem("selectedItemImgForEnchant");
  const savedName = localStorage.getItem("selectedItemNameForEnchant");
  //armor
  const savedArmorImage = localStorage.getItem(
    "selectedArmorItemImgForEnchant"
  );
  const savedArmorName = localStorage.getItem(
    "selectedArmorItemNameForEnchant"
  );
  // enchant

  //==============
  // MAIN FUNCTION FOR UPGRADE ITEMS
  function EnchantPerClick(index: any) {
    // Retrieve the item data at the given index from an array
    const item = MainWeaponImageAndNameAndCost[index];

    // Create a variable to store the upgraded name of the item, which is the original name with a "+" prefix.
    const itemUpgradeName = `${item.name}`;

    // Retrieve the current saved upgraded level of the item from the browser's local storage, and convert it to a number.
    const savedItemUpgrade = localStorage.getItem(itemUpgradeName);
    const savedItemUpgradeNumber = Number(savedItemUpgrade);

    // Determine the new upgraded level, which is the saved upgraded level + 1, but capped at 15.
    const upgradedValue =
      savedItemUpgradeNumber < 15 ? savedItemUpgradeNumber + 1 : 15;

    // Store the new upgraded level in the browser's local storage.
    localStorage.setItem("upgradedValue", upgradedValue.toString());
    localStorage.setItem(itemUpgradeName, upgradedValue.toString());

    // Create a variable to store the selected item from "mainWeaponData".
    const selectedItem = mainWeaponData[index];

    // Create a new item name with the upgraded level prefix.
    const itemName = `+${upgradedValue} ${item.name}`;

    // Store the new item name and the original item name in the browser's local storage.
    localStorage.setItem(
      "UpgradedName",
      JSON.stringify({
        [itemName]: selectedItem.name,
        selectedItemNameForEnchant: itemName,
      })
    );

    // Create a copy of the "UpgradedNamesMainWeapon" array, and update the item name at the given index with the new upgraded name.
    const upgradedNames = [...UpgradedNamesMainWeapon];
    upgradedNames[index] = itemName;
    setUpgradedNamesMainWeapon(upgradedNames);

    // Create a unique key for the saved damage value of the item.
    const itemSavedDmgMainKey = `selectedItemDmgForEnchant_${item.name}`;

    // Retrieve the current number of clicks for the item from the browser's local storage, and convert it to a number.
    const savedClicks = localStorage.getItem(`savedClicks_${item.name}`);
    const numClicks = savedClicks ? Number(savedClicks) : 0;

    // If the number of clicks is less than 15, double the saved damage value of the item and store it in the browser's local storage.
    if (numClicks < 15) {
      let newSavedDmgMain = Number(
        localStorage.getItem(itemSavedDmgMainKey) || item.dmgLvl0
      );
      newSavedDmgMain *= 2;
      localStorage.setItem(itemSavedDmgMainKey, newSavedDmgMain.toString());
      localStorage.setItem(
        `savedClicks_${item.name}`,
        (numClicks + 1).toString()
      );
    }

    // Retrieve the current saved damage value of the item from the browser's local storage, or use the default level 0 damage value if not present.
    const savedDmgMain =
      localStorage.getItem(itemSavedDmgMainKey) || item.dmgLvl0;

    // Update the upgraded damage value of the item in the state with the new saved damage value.
    setUpgradedDmgMainWeapon(savedDmgMain);
  }

  function EnchantPerClickForArmor(armorIndex: any) {
    const armor = ArmorImageAndNameAndCost[armorIndex];

    const ArmorItemUpgradeName = `${armor.name}`;

    const savedArmorItemUpgrade = localStorage.getItem(ArmorItemUpgradeName);
    const savedArmorItemUpgradeNumber = Number(savedArmorItemUpgrade);

    const ArmorupgradedValue =
      savedArmorItemUpgradeNumber < 15 ? savedArmorItemUpgradeNumber + 1 : 15;

    localStorage.setItem("ArmorupgradedValue", ArmorupgradedValue.toString());
    localStorage.setItem(ArmorItemUpgradeName, ArmorupgradedValue.toString());

    const selectedArmorItem = ArmorData[armorIndex];

    const ArmorItemName = `+${ArmorupgradedValue} ${armor.name}`;

    localStorage.setItem(
      "UpgradedArmorName",
      JSON.stringify({
        [ArmorItemName]: selectedArmorItem.name,
        selectedArmorItemNameForEnchant: ArmorItemName,
      })
    );

    const upgradedArmorNames = [...UpgradedNamesArmor];
    upgradedArmorNames[armorIndex] = ArmorItemName;
    setUpgradedNamesArmor(upgradedArmorNames);

    const itemSavedDefArmorKey = `selectedItemDefForEnchant_${armor.name}`;

    const savedArmorClicks = localStorage.getItem(
      `savedArmorClicks_${armor.name}`
    );
    const numArmorClicks = savedArmorClicks ? Number(savedArmorClicks) : 0;

    if (numArmorClicks < 15) {
      let newSavedDefArmor = Number(
        localStorage.getItem(itemSavedDefArmorKey) || armor.defLvl0
      );
      newSavedDefArmor *= 2;
      localStorage.setItem(itemSavedDefArmorKey, newSavedDefArmor.toString());
      localStorage.setItem(
        `savedArmorClicks_${armor.name}`,
        (numArmorClicks + 1).toString()
      );
    }
    console.log(localStorage.getItem(itemSavedDefArmorKey));

    const savedDefArmor =
      localStorage.getItem(itemSavedDefArmorKey) || armor.defLvl0;

    setUpgradedDefArmor(savedDefArmor);
  }

  //===================================================================
  // Declare state to save selected damage value, initialized with null
  const [, setSavedDmgMains] = useState<number | null>(null);

  // Load selected damage value from local storage when component mounts
  useEffect(() => {
    const savedDmgMainFromLocalStorage = localStorage.getItem(
      "selectedItemDmgForEnchant"
    );
    if (savedDmgMainFromLocalStorage) {
      setSavedDmgMains(Number(savedDmgMainFromLocalStorage));
    }
  }, []);
  //armor
  const [, setSavedDefArmor] = useState<number | null>(null);

  // Load selected damage value from local storage when component mounts
  useEffect(() => {
    const savedDefArmorFromLocalStorage = localStorage.getItem(
      "selectedItemDefForEnchant"
    );
    if (savedDefArmorFromLocalStorage) {
      setSavedDefArmor(Number(savedDefArmorFromLocalStorage));
    }
  }, []);

  // Declare state to save selected item index, initialized with 0
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
  //armor
  const [selectedArmorItemIndex, setSelectedArmorItemIndex] =
    useState<number>(0);

  // Declare state to save saved item upgrade value, initialized with 0
  const [savedItemUpgrade] = useState<number>(0);
  //armor
  const [savedArmorItemUpgrade] = useState<number>(0);

  // Remove saved item image and name from local storage on component mount
  useEffect(() => {
    localStorage.removeItem("selectedItemImgForEnchant");
    localStorage.removeItem("selectedItemNameForEnchant");
    localStorage.removeItem("selectedArmorItemImgForEnchant");
    localStorage.removeItem("selectedArmorItemNameForEnchant");
  }, []);

  const savedUpgradedValue = localStorage.getItem("ArmorupgradedValue");
  const upgradedValue = savedUpgradedValue ? Number(savedUpgradedValue) : 0;
  //armor
  const savedArmorUpgradedValue = localStorage.getItem("ArmorupgradedValue");
  const ArmorupgradedValue = savedArmorUpgradedValue
    ? Number(savedArmorUpgradedValue)
    : 0;

  // its weapon or armor ?
  const [itsMainWeapon, setitsMainWeapon] = useState(false);
  const [itsArmor, setitsArmor] = useState(false);

  return (
    <>
      <div id="enchant-container">
        <div className="encahnt-box">
          <button
            onClick={() => {
              if (itsMainWeapon === true) {
                EnchantPerClick(selectedItemIndex);
              } else if (itsArmor === true) {
                EnchantPerClickForArmor(selectedArmorItemIndex);
              }
            }}
          >
            Enchant
          </button>
          <PutItemHere
            mainWeaponData={mainWeaponData}
            savedItemUpgrade={savedItemUpgrade}
            UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
            setSelectedItemIndex={setSelectedItemIndex}
            setUpgradedDmgMainWeapon={setUpgradedDmgMainWeapon}
            savedImage={savedImage}
            savedName={savedName}
            ArmorData={ArmorData}
            savedArmorItemUpgrade={savedArmorItemUpgrade}
            UpgradedNamesArmor={UpgradedNamesArmor}
            savedArmorImage={savedArmorImage}
            savedArmorName={savedArmorName}
            setSelectedArmorItemIndex={setSelectedArmorItemIndex}
            setUpgradedDefArmor={setUpgradedDefArmor}
            setitsMainWeapon={setitsMainWeapon}
            setitsArmor={setitsArmor}
            itsMainWeapon={itsMainWeapon}
            itsArmor={itsArmor}
          />
          <div className="EnchantProgress"></div>
          <EnchantSucces
            upgradedValue={upgradedValue}
            selectedItemIndex={selectedItemIndex}
            savedImage={savedImage}
            savedName={savedName}
            UpgradedDmgMainWeapon={UpgradedDmgMainWeapon}
            setUpgradedDmgMainWeapon={setUpgradedDmgMainWeapon}
            UpgradedDefArmor={UpgradedDefArmor}
            ArmorupgradedValue={ArmorupgradedValue}
            selectedArmorItemIndex={selectedArmorItemIndex}
            savedArmorImage={savedArmorImage}
            savedArmorName={savedArmorName}
            setUpgradedDefArmor={setUpgradedDefArmor}
            itsMainWeapon={itsMainWeapon}
            itsArmor={itsArmor}
          />
        </div>
      </div>
    </>
  );
};

export default Enchant;

export const getSavedDmgMain = (itemSavedDmgMainKey: string) => {
  const savedDmgMain = localStorage.getItem(itemSavedDmgMainKey) || null;
  return savedDmgMain;
};

export const getSavedDefArmor = (itemSavedDefArmorKey: string) => {
  const savedDefArmor = localStorage.getItem(itemSavedDefArmorKey) || null;
  return savedDefArmor;
};
