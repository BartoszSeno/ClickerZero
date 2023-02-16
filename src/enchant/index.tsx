import React, { useState, useEffect } from "react";
import "../assets/css/Normal/enchant/enchant.css";
import { MainWeaponImageAndNameAndCost } from "../data/equipment/mainWeapon";
import defaultimg from "C:/Users/sieni/Desktop/ClickerZero/src/assets/images/default.png";

const Enchant = ({ mainWeaponDara }: { mainWeaponDara: any }) => {
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
    localStorage.setItem("selectedItemDmgUpgradeOne", item.dmgLvl1.toString());
  }
  /// load value form localstorage
  const savedDmgUpgradeOne = localStorage.getItem("selectedItemDmgUpgradeOne");
  const savedImage = localStorage.getItem("selectedItemImgForEnchant");
  const savedName = localStorage.getItem("selectedItemNameForEnchant");

  // enchant

  const [individualId, setindividualId] = useState<any>(0);

  function EnchantPerClick(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];
    const itemUpgradeName = `${item.name}0${individualId}`;
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
    const upgradedNames = [...UpgradedNames];
    upgradedNames[index] = itemName;
    setUpgradedNames(upgradedNames);
  }

  function GetFullId(e: React.MouseEvent<HTMLDivElement>) {
    const getId = parseInt(e.currentTarget.id);
    setindividualId(getId);
  }

  const [UpgradedNames, setUpgradedNames] = useState(
    Array(mainWeaponDara.length).fill("")
  );

  function UpgradedNamesOnMount() {
    const upgradedNames = mainWeaponDara.map((data: any, index: any) => {
      const itemUpgradeName = `${data.name}0${individualId}`;
      const savedItemUpgrade = localStorage.getItem(itemUpgradeName);
      const upgradedName = savedItemUpgrade
        ? `+${Number(savedItemUpgrade)} ${data.name} ${individualId}`
        : data.name;
      return upgradedName;
    });
    setUpgradedNames(upgradedNames);
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
    const itemUpgradeName = `${item.name}0${individualId}`;
    const savedItemUpgrade = localStorage.getItem(itemUpgradeName);
    const itemId = `${index}${savedItemUpgrade || 0}`;
    localStorage.setItem(itemUpgradeName, Number(itemId.slice(1)).toString());
    // name of upgrade lvl : upgrade[ number of upgrades ] + id
    const selectedItem = mainWeaponDara[index];
    const itemName = `+${Number(savedItemUpgrade)} ${
      item.name
    } ${individualId}`;
    localStorage.setItem(
      "UpgradedName",
      JSON.stringify({
        [itemName]: selectedItem.name,
        selectedItemNameForEnchant: itemName,
      })
    );
    setUpgradedName(itemName);
    console.log(itemName);
  }

  function test() {}
  return (
    <>
      <div id="enchant-container">
        <div className="encahnt-box">
          <div
            className="putItemThere"
            onClick={() => {
              OpenClose();
              ShowNameOnHover(selectedItemIndex);
            }}
          >
            <img
              className="mainWeaponImg"
              src={savedImage ? savedImage : defaultimg}
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
                        const itemId = `${index}${i}`;
                        const itemUpgradeName = `${item.name}0${individualId}`;
                        const savedItemUpgrade =
                          localStorage.getItem(itemUpgradeName);
                        const upgradedName = savedItemUpgrade
                          ? `+${Number(savedItemUpgrade)} ${
                              item.name
                            } ${individualId}`
                          : item.name;
                        return (
                          <div
                            className={`option ${index} `}
                            id={itemId}
                            onClick={(e) => {
                              setSelectedItemIndex(index);
                              GetIdPerClick(index);
                              GetFullId(e);
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
              src={savedImage ? savedImage : defaultimg}
              alt={`${savedName || "No name"} weapon`}
            />
          </div>
          <div className="infoEnchant">
            <span className="UpgradeName">{UpgradedName}</span>
            <div className="enchantBox2">
              <img
                className="UpgradeImg"
                src={savedImage ? savedImage : defaultimg}
                alt={`${savedName || "No name"} weapon`}
              />
              <span className="UpgradeDmg">
                {" "}
                <span className="UpgradeDmgTitle">Deamge:</span>{" "}
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
