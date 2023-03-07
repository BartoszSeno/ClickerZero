/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "../assets/css/Normal/enchant/enchant.css";
import { MainWeaponImageAndNameAndCost } from "../data/equipment/mainWeapon";

const Enchant = ({
  mainWeaponDara,
  setUpgradedNamesMainWeapon,
  UpgradedNamesMainWeapon,
  setUpgradedDmgMainWeapon,
  UpgradedDmgMainWeapon,
  UpgradedNamesOnMount,
}: {
  mainWeaponDara: any;
  setUpgradedNamesMainWeapon: any;
  UpgradedNamesMainWeapon: any;
  setUpgradedDmgMainWeapon: any;
  UpgradedDmgMainWeapon: any;
  UpgradedNamesOnMount: any;
}) => {
  const [OpenAndClose, setOpenAndClose] = useState<boolean>(false);
  function OpenClose() {
    setOpenAndClose(!OpenAndClose);
  }

  function GetIdPerClick(index: any) {
    //import individual data from index
    const item = MainWeaponImageAndNameAndCost[index];
    //save items in localstorage
    localStorage.setItem("selectedItemIdForEnchant", item.id.toString());
    localStorage.setItem("selectedItemNameForEnchant", item.name.toString());
    localStorage.setItem("selectedItemImgForEnchant", item.image.toString());
    localStorage.setItem("selectedItemTierForEnchant", item.tier.toString());
    localStorage.setItem("selectedItemDmgForEnchant", item.dmgLvl0.toString());
  }
  /// load value form localstorage
  const savedImage = localStorage.getItem("selectedItemImgForEnchant");
  const savedName = localStorage.getItem("selectedItemNameForEnchant");

  // enchant

  function EnchantPerClick(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];
    const itemUpgradeName = `${item.name}`;
    const savedItemUpgrade = localStorage.getItem(itemUpgradeName);
    const savedItemUpgradeNumber = Number(savedItemUpgrade);
    const upgradedValue =
      savedItemUpgradeNumber < 15 ? savedItemUpgradeNumber + 1 : 15;
    localStorage.setItem("upgradedValue", upgradedValue.toString());
    localStorage.setItem(itemUpgradeName, upgradedValue.toString());
    const selectedItem = mainWeaponDara[index];
    const itemName = `+${upgradedValue} ${item.name}`;
    localStorage.setItem(
      "UpgradedName",
      JSON.stringify({
        [itemName]: selectedItem.name,
        selectedItemNameForEnchant: itemName,
      })
    );
    const upgradedNames = [...UpgradedNamesMainWeapon];
    upgradedNames[index] = itemName;
    setUpgradedNamesMainWeapon(upgradedNames);

    // tworzenie unikalnego klucza dla wartości savedDmgMain
    const itemSavedDmgMainKey = `selectedItemDmgForEnchant_${item.name}`;

    const savedClicks = localStorage.getItem(`savedClicks_${item.name}`);
    const numClicks = savedClicks ? Number(savedClicks) : 0;
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
    const savedDmgMain =
      localStorage.getItem(itemSavedDmgMainKey) || item.dmgLvl0;
    setUpgradedDmgMainWeapon(savedDmgMain);
  }

  const [, setSavedDmgMains] = useState<number | null>(null);

  useEffect(() => {
    const savedDmgMainFromLocalStorage = localStorage.getItem(
      "selectedItemDmgForEnchant"
    );
    if (savedDmgMainFromLocalStorage) {
      setSavedDmgMains(Number(savedDmgMainFromLocalStorage));
    }
  }, []);

  // save index value  for enchant button
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  //get upgraded name

  const [UpgradedName, setUpgradedName] = useState<string>("");
  const [savedItemUpgrade] = useState<number>(0); // zainicjuj wartość początkową

  function ShowNameOnHover(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];

    // name of upgrade : upgrade0 + id
    const itemUpgradeName = `${item.name}`;
    const savedItemUpgradeFromLocalStorage =
      localStorage.getItem(itemUpgradeName);
    const savedItemUpgradeValue = savedItemUpgradeFromLocalStorage
      ? Number(savedItemUpgradeFromLocalStorage)
      : 0;

    // Check if upgrade value is less than 15
    if (savedItemUpgradeValue < 15) {
      const itemName = `+${savedItemUpgradeValue + 1} ${item.name}`;
      setUpgradedName(itemName);
    } else {
      setUpgradedName(""); // set upgraded name to empty string if value is 15 or greater
    }

    // fakowy upgrade dla dodania wiekszego dmg
    const itemSavedDmgMainKey = `selectedItemDmgForEnchant_${item.name}`;

    let newSavedDmgMain = Number(
      localStorage.getItem(itemSavedDmgMainKey) || item.dmgLvl0
    );
    newSavedDmgMain *= 2;
    setUpgradedDmgMainWeapon(newSavedDmgMain);
  }
  // remove IMG AND NAME on load page
  useEffect(() => {
    localStorage.removeItem("selectedItemImgForEnchant");
    localStorage.removeItem("selectedItemNameForEnchant");
  }, []);

  const savedUpgradedValue = localStorage.getItem("upgradedValue");
  const upgradedValue = savedUpgradedValue ? Number(savedUpgradedValue) : 0;

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

    // tworzenie unikalnego klucza dla wartości savedDmgMain
    const itemSavedDmgMainKey = `selectedItemDmgForEnchant_${item.name}`;

    const savedDmgMain =
      localStorage.getItem(itemSavedDmgMainKey) || item.dmgLvl0;
    setUpgradedDmgMainWeapon(savedDmgMain);
  }

  return (
    <>
      <div id="enchant-container">
        <div className="encahnt-box">
          <div
            className="putItemThere"
            onClick={() => {
              OpenClose();
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
            <div
              id="EnchantMenuChouseWeapon"
              className={OpenAndClose ? "open" : "close"}
            >
              {mainWeaponDara.map((item: any, index: any) => {
                if (item.isBought) {
                  return (
                    <div key={`item_${index}`}>
                      {Array.from({ length: item.count }, (_, i) => {
                        const mainId = `${index}${i}`;
                        const itemUpgradeName = `${item.name}${index}${mainId}`;

                        const itemId = `${index}${savedItemUpgrade || 0}`;
                        localStorage.getItem(itemUpgradeName);
                        const upgradedName = UpgradedNamesMainWeapon[index];

                        // pobranie wartości savedDmgMain dla danego przedmiotu
                        const itemSavedDmgMainKey = `selectedItemDmgForEnchant_${item.name}`;
                        const savedDmgMain =
                          localStorage.getItem(itemSavedDmgMainKey) ||
                          item.dmgLvl0;
                        return (
                          <div
                            className={`option ${itemId} `}
                            id={mainId}
                            key={`item_${index}_${i}`}
                            onClick={(e) => {
                              setSelectedItemIndex(index);
                              GetIdPerClick(index);
                              FakeUpdateToRefreshTheData(index);
                            }}
                          >
                            <img
                              className="OptionWeaponImg"
                              src={item.image}
                              alt={`${item.name} weapon`}
                            />
                            <span className={`itemName ${item.tier}C`}>
                              {upgradedName}
                            </span>
                            <span>DMG:{savedDmgMain}</span>
                          </div>
                        );
                      })}
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="EnchantProgress"></div>
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
                    {UpgradedDmgMainWeapon}
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
          <button onClick={() => EnchantPerClick(selectedItemIndex)}>
            Enchant
          </button>
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
