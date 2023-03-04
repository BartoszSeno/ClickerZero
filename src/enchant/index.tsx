/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "../assets/css/Normal/enchant/enchant.css";
import { MainWeaponImageAndNameAndCost } from "../data/equipment/mainWeapon";

const Enchant = ({
  mainWeaponDara,
  setUpgradedNamesMainWeapon,
  UpgradedNamesMainWeapon,
}: {
  mainWeaponDara: any;
  setUpgradedNamesMainWeapon: any;
  UpgradedNamesMainWeapon: any;
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
    localStorage.setItem("selectedItemDmgForEnchant", item.dmgLvl0.toString());
    localStorage.setItem("selectedItemTierForEnchant", item.tier.toString());
  }
  /// load value form localstorage
  const savedDmgUpgradeOne = localStorage.getItem("selectedItemDmgUpgradeOne");
  const savedImage = localStorage.getItem("selectedItemImgForEnchant");
  const savedName = localStorage.getItem("selectedItemNameForEnchant");

  // enchant

  const [individualId, setindividualId] = useState<any>(0);

  function EnchantPerClick(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];
    const itemUpgradeName = `${item.name}${individualId}`;
    const savedItemUpgrade = localStorage.getItem(itemUpgradeName);
    const itemId = `${index}${savedItemUpgrade || 0}`;
    localStorage.setItem(
      itemUpgradeName,
      (Number(itemId.slice(1)) + 1).toString()
    );
    const selectedItem = mainWeaponDara[index];
    const itemName = `+${Number(savedItemUpgrade) + 1} ${
      item.name
    } ${individualId}`;
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
    console.log(itemName);
  }

  function UpgradedNamesOnMount() {
    const upgradedNames = mainWeaponDara.map((data: any) => {
      const itemUpgradeName = `${data.name}${individualId}`;
      const savedItemUpgrade = localStorage.getItem(itemUpgradeName);
      const upgradedName = savedItemUpgrade
        ? `+${Number(savedItemUpgrade)} ${data.name} ${individualId}`
        : data.name;
      return upgradedName;
    });
    setUpgradedNamesMainWeapon(upgradedNames);
  }

  useEffect(() => {
    UpgradedNamesOnMount();
  }, []);

  // save index value  for enchant button
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  //get upgraded name

  const [UpgradedName, setUpgradedName] = useState<string>("");

  function ShowNameOnHover(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];

    // name of upgrade : upgrade0 + id
    const itemUpgradeName = `${item.name}${individualId}`;
    const savedItemUpgrade = localStorage.getItem(itemUpgradeName);
    const itemId = `${index}${savedItemUpgrade || 0}`;
    Number(itemId.slice(1));
    // name of upgrade lvl : upgrade[ number of upgrades ] + id
    const itemName = `+${Number(savedItemUpgrade) + 1} ${
      item.name
    } ${individualId}`;

    setUpgradedName(itemName);
    console.log(itemName);
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
                    <div key={index}>
                      {Array.from({ length: item.count }, (_, i) => {
                        const itemUpgradeName = `${item.name}${individualId}`;
                        const savedItemUpgrade =
                          localStorage.getItem(itemUpgradeName);
                        const itemId = `${index}${savedItemUpgrade || 0}`;
                        localStorage.getItem(itemUpgradeName);
                        const upgradedName = UpgradedNamesMainWeapon[index];

                        const mainId = `${index}${i}`;

                        return (
                          <div
                            className={`option ${itemId} `}
                            id={mainId}
                            onClick={(e) => {
                              setSelectedItemIndex(index);
                              GetIdPerClick(index);
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
                {savedDmgUpgradeOne}
              </span>
            </div>
          </div>

          <button onClick={() => EnchantPerClick(selectedItemIndex)}>
            Enchant
          </button>
        </div>
      </div>
    </>
  );
};

export default Enchant;
