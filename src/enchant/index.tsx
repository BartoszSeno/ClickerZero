/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "../assets/css/Normal/enchant/enchant.css";
import { MainWeaponImageAndNameAndCost } from "../data/equipment/mainWeapon";
import { ArmorImageAndNameAndCost } from "../data/equipment/armor";
import { HelmetImageAndNameAndCost } from "../data/equipment/helmet";
import { ShoesImageAndNameAndCost } from "../data/equipment/Shoes";
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
  HelmetData,
  UpgradedNamesHelmet,
  setUpgradedNamesHelmet,
  setUpgradedDefHelmet,
  UpgradedDefHelmet,
  ShoesData,
  UpgradedNamesShoes,
  setUpgradedNamesShoes,
  setUpgradedDefShoes,
  UpgradedDefShoes,
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
  HelmetData: any;
  UpgradedNamesHelmet: any;
  setUpgradedNamesHelmet: any;
  setUpgradedDefHelmet: any;
  UpgradedDefHelmet: any;
  ShoesData: any;
  UpgradedNamesShoes: any;
  setUpgradedNamesShoes: any;
  setUpgradedDefShoes: any;
  UpgradedDefShoes: any;
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
  //helmet
  const savedHelmetImage = localStorage.getItem(
    "selectedHelmetItemImgForEnchant"
  );
  const savedHelmetName = localStorage.getItem(
    "selectedHelmetItemNameForEnchant"
  );
  //Shoes
  const savedShoesImage = localStorage.getItem(
    "selectedShoesItemImgForEnchant"
  );
  const savedShoesName = localStorage.getItem(
    "selectedShoesItemNameForEnchant"
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

  //helmet
  function EnchantPerClickForHelmet(HelmetIndex: any) {
    const helmet = HelmetImageAndNameAndCost[HelmetIndex];

    const HelmetItemUpgradeName = `${helmet.name}`;

    const savedHelmetItemUpgrade = localStorage.getItem(HelmetItemUpgradeName);
    const savedHelmetItemUpgradeNumber = Number(savedHelmetItemUpgrade);

    const HelmetupgradedValue =
      savedHelmetItemUpgradeNumber < 15 ? savedHelmetItemUpgradeNumber + 1 : 15;

    localStorage.setItem("HelmetupgradedValue", HelmetupgradedValue.toString());
    localStorage.setItem(HelmetItemUpgradeName, HelmetupgradedValue.toString());

    const selectedHelmetItem = HelmetData[HelmetIndex];

    const HelmetItemName = `+${HelmetupgradedValue} ${helmet.name}`;

    localStorage.setItem(
      "UpgradedHelmetName",
      JSON.stringify({
        [HelmetItemName]: selectedHelmetItem.name,
        selectedHelmetItemNameForEnchant: HelmetItemName,
      })
    );

    const upgradedHelmetNames = [...UpgradedNamesHelmet];
    upgradedHelmetNames[HelmetIndex] = HelmetItemName;
    setUpgradedNamesHelmet(upgradedHelmetNames);

    const itemSavedDefHelmetKey = `selectedItemDefForEnchant_${helmet.name}`;

    const savedHelmetClicks = localStorage.getItem(
      `savedHelmetClicks_${helmet.name}`
    );
    const numHelmetClicks = savedHelmetClicks ? Number(savedHelmetClicks) : 0;

    if (numHelmetClicks < 15) {
      let newSavedDefHelmet = Number(
        localStorage.getItem(itemSavedDefHelmetKey) || helmet.defLvl0
      );
      newSavedDefHelmet *= 2;
      localStorage.setItem(itemSavedDefHelmetKey, newSavedDefHelmet.toString());
      localStorage.setItem(
        `savedHelmetClicks_${helmet.name}`,
        (numHelmetClicks + 1).toString()
      );
    }
    console.log(localStorage.getItem(itemSavedDefHelmetKey));

    const savedDefHelmet =
      localStorage.getItem(itemSavedDefHelmetKey) || helmet.defLvl0;

    setUpgradedDefHelmet(savedDefHelmet);
  }
  //Shoes
  function EnchantPerClickForShoes(ShoesIndex: any) {
    const Shoes = ShoesImageAndNameAndCost[ShoesIndex];

    const ShoesItemUpgradeName = `${Shoes.name}`;

    const savedShoesItemUpgrade = localStorage.getItem(ShoesItemUpgradeName);
    const savedShoesItemUpgradeNumber = Number(savedShoesItemUpgrade);

    const ShoesupgradedValue =
      savedShoesItemUpgradeNumber < 15 ? savedShoesItemUpgradeNumber + 1 : 15;

    localStorage.setItem("ShoesupgradedValue", ShoesupgradedValue.toString());
    localStorage.setItem(ShoesItemUpgradeName, ShoesupgradedValue.toString());

    const selectedShoesItem = ShoesData[ShoesIndex];

    const ShoesItemName = `+${ShoesupgradedValue} ${Shoes.name}`;

    localStorage.setItem(
      "UpgradedShoesName",
      JSON.stringify({
        [ShoesItemName]: selectedShoesItem.name,
        selectedShoesItemNameForEnchant: ShoesItemName,
      })
    );

    const upgradedShoesNames = [...UpgradedNamesShoes];
    upgradedShoesNames[ShoesIndex] = ShoesItemName;
    setUpgradedNamesShoes(upgradedShoesNames);

    const itemSavedDefShoesKey = `selectedItemDefForEnchant_${Shoes.name}`;

    const savedShoesClicks = localStorage.getItem(
      `savedShoesClicks_${Shoes.name}`
    );
    const numShoesClicks = savedShoesClicks ? Number(savedShoesClicks) : 0;

    if (numShoesClicks < 15) {
      let newSavedDefShoes = Number(
        localStorage.getItem(itemSavedDefShoesKey) || Shoes.defLvl0
      );
      newSavedDefShoes *= 2;
      localStorage.setItem(itemSavedDefShoesKey, newSavedDefShoes.toString());
      localStorage.setItem(
        `savedShoesClicks_${Shoes.name}`,
        (numShoesClicks + 1).toString()
      );
    }
    console.log(localStorage.getItem(itemSavedDefShoesKey));

    const savedDefShoes =
      localStorage.getItem(itemSavedDefShoesKey) || Shoes.defLvl0;

    setUpgradedDefShoes(savedDefShoes);
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
  //helmet
  const [, setSavedDefHelmet] = useState<number | null>(null);

  // Load selected damage value from local storage when component mounts
  useEffect(() => {
    const savedDefHelmetFromLocalStorage = localStorage.getItem(
      "selectedItemDefForEnchant"
    );
    if (savedDefHelmetFromLocalStorage) {
      setSavedDefHelmet(Number(savedDefHelmetFromLocalStorage));
    }
  }, []);
  //Shoes
  const [, setSavedDefShoes] = useState<number | null>(null);

  // Load selected damage value from local storage when component mounts
  useEffect(() => {
    const savedDefShoesFromLocalStorage = localStorage.getItem(
      "selectedItemDefForEnchant"
    );
    if (savedDefShoesFromLocalStorage) {
      setSavedDefShoes(Number(savedDefShoesFromLocalStorage));
    }
  }, []);
  // Declare state to save selected item index, initialized with 0
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
  //armor
  const [selectedArmorItemIndex, setSelectedArmorItemIndex] =
    useState<number>(0);
  //helmet
  const [selectedHelmetItemIndex, setSelectedHelmetItemIndex] =
    useState<number>(0);
  //Shoes
  const [selectedShoesItemIndex, setSelectedShoesItemIndex] =
    useState<number>(0);

  // Declare state to save saved item upgrade value, initialized with 0
  const [savedItemUpgrade] = useState<number>(0);
  //armor
  const [savedArmorItemUpgrade] = useState<number>(0);
  //helmet
  const [savedHelmetItemUpgrade] = useState<number>(0);
  //Shoes
  const [savedShoesItemUpgrade] = useState<number>(0);
  // Remove saved item image and name from local storage on component mount
  useEffect(() => {
    localStorage.removeItem("selectedItemImgForEnchant");
    localStorage.removeItem("selectedItemNameForEnchant");
    localStorage.removeItem("selectedArmorItemImgForEnchant");
    localStorage.removeItem("selectedArmorItemNameForEnchant");
    localStorage.removeItem("selectedHelmetItemImgForEnchant");
    localStorage.removeItem("selectedHelmetItemNameForEnchant");
    localStorage.removeItem("selectedShoesItemImgForEnchant");
    localStorage.removeItem("selectedShoesItemNameForEnchant");
  }, []);

  const savedUpgradedValue = localStorage.getItem("ArmorupgradedValue");
  const upgradedValue = savedUpgradedValue ? Number(savedUpgradedValue) : 0;
  //armor
  const savedArmorUpgradedValue = localStorage.getItem("ArmorupgradedValue");
  const ArmorupgradedValue = savedArmorUpgradedValue
    ? Number(savedArmorUpgradedValue)
    : 0;
  //helmet
  const savedHelmetUpgradedValue = localStorage.getItem("HelmetupgradedValue");
  const HelmetupgradedValue = savedHelmetUpgradedValue
    ? Number(savedHelmetUpgradedValue)
    : 0;
  //Shoes
  const savedShoesUpgradedValue = localStorage.getItem("ShoesupgradedValue");
  const ShoesupgradedValue = savedShoesUpgradedValue
    ? Number(savedShoesUpgradedValue)
    : 0;

  // its weapon or armor ?
  const [itsMainWeapon, setitsMainWeapon] = useState(false);
  const [itsArmor, setitsArmor] = useState(false);
  const [itsHelmet, setitsHelmet] = useState(false);
  const [itsShoes, setitsShoes] = useState(false);

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
              } else if (itsHelmet === true) {
                EnchantPerClickForHelmet(selectedHelmetItemIndex);
              } else if (itsShoes === true) {
                EnchantPerClickForShoes(selectedShoesItemIndex);
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
            itsMainWeapon={itsMainWeapon}
            setitsMainWeapon={setitsMainWeapon}
            savedArmorItemUpgrade={savedArmorItemUpgrade}
            UpgradedNamesArmor={UpgradedNamesArmor}
            savedArmorImage={savedArmorImage}
            savedArmorName={savedArmorName}
            setSelectedArmorItemIndex={setSelectedArmorItemIndex}
            setUpgradedDefArmor={setUpgradedDefArmor}
            setitsArmor={setitsArmor}
            itsArmor={itsArmor}
            HelmetData={HelmetData}
            savedHelmetItemUpgrade={savedHelmetItemUpgrade}
            UpgradedNamesHelmet={UpgradedNamesHelmet}
            savedHelmetImage={savedHelmetImage}
            savedHelmetName={savedHelmetName}
            setSelectedHelmetItemIndex={setSelectedHelmetItemIndex}
            setUpgradedDefHelmet={setUpgradedDefHelmet}
            itsHelmet={itsHelmet}
            setitsHelmet={setitsHelmet}
            ShoesData={ShoesData}
            savedShoesItemUpgrade={savedShoesItemUpgrade}
            UpgradedNamesShoes={UpgradedNamesShoes}
            savedShoesImage={savedShoesImage}
            savedShoesName={savedShoesName}
            setSelectedShoesItemIndex={setSelectedShoesItemIndex}
            setUpgradedDefShoes={setUpgradedDefShoes}
            itsShoes={itsShoes}
            setitsShoes={setitsShoes}
          />
          <div className="EnchantProgress"></div>
          <EnchantSucces
            upgradedValue={upgradedValue}
            selectedItemIndex={selectedItemIndex}
            savedImage={savedImage}
            savedName={savedName}
            UpgradedDmgMainWeapon={UpgradedDmgMainWeapon}
            setUpgradedDmgMainWeapon={setUpgradedDmgMainWeapon}
            itsMainWeapon={itsMainWeapon}
            UpgradedDefArmor={UpgradedDefArmor}
            selectedArmorItemIndex={selectedArmorItemIndex}
            savedArmorImage={savedArmorImage}
            savedArmorName={savedArmorName}
            setUpgradedDefArmor={setUpgradedDefArmor}
            itsArmor={itsArmor}
            UpgradedDefHelmet={UpgradedDefHelmet}
            selectedHelmetItemIndex={selectedHelmetItemIndex}
            savedHelmetImage={savedHelmetImage}
            savedHelmetName={savedHelmetName}
            setUpgradedDefHelmet={setUpgradedDefHelmet}
            itsHelmet={itsHelmet}
            UpgradedDefShoes={UpgradedDefShoes}
            selectedShoesItemIndex={selectedShoesItemIndex}
            savedShoesImage={savedShoesImage}
            savedShoesName={savedShoesName}
            setUpgradedDefShoes={setUpgradedDefShoes}
            itsShoes={itsShoes}
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

export const getSavedDefHelmet = (itemSavedDefHelmetKey: string) => {
  const savedDefHelmet = localStorage.getItem(itemSavedDefHelmetKey) || null;
  return savedDefHelmet;
};

export const getSavedDefShoes = (itemSavedDefShoesKey: string) => {
  const savedDefShoes = localStorage.getItem(itemSavedDefShoesKey) || null;
  return savedDefShoes;
};
