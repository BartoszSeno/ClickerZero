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
    const item = MainWeaponImageAndNameAndCost[index];
    //save items in localstorage
    localStorage.setItem("selectedItemIdForEnchant", item.id.toString());
    localStorage.setItem("selectedItemNameForEnchant", item.name.toString());
    localStorage.setItem("selectedItemImgForEnchant", item.image.toString());
    localStorage.setItem("selectedItemDmgForEnchant", item.dmgLvl0.toString());
    localStorage.setItem("selectedItemTierForEnchant", item.tier.toString());

    //
  }
  ///
  const savedDmgUpgradeOne = localStorage.getItem("selectedItemDmgUpgradeOne");
  const savedImage = localStorage.getItem("selectedItemImgForEnchant");
  const savedName = localStorage.getItem("selectedItemNameForEnchant");

  function EnchantPerClick(index: any) {
    const itemUpgradeName = `upgrade0${index}`;
    const savedItemUpgrade = localStorage.getItem(itemUpgradeName);
    const itemId = `${index}${savedItemUpgrade || 0}`;
    localStorage.setItem(itemUpgradeName, Number(itemId.slice(1)) + 1);

    const selectedItem = mainWeaponDara[index];
    const itemName = `upgrade${Number(savedItemUpgrade) + 1}${index}`;
    localStorage.setItem(itemName, selectedItem.name);
    console.log(itemName);
  }

  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  function test() {}
  return (
    <>
      <div id="enchant-container">
        <div className="encahnt-box">
          <div className="putItemThere" onClick={OpenClose}>
            <img
              className="mainWeaponImg"
              src={savedImage ? savedImage : defaultimg}
              alt={`${savedName || "No name"} weapon`}
            />
            <div
              id="EnchantMenuChouseWeapon"
              className={OpenAndClose ? "open" : "close"}
            >
              {mainWeaponDara.map((data: any, index: any) => {
                if (data.isBought) {
                  return (
                    <div key={index}>
                      {Array.from({ length: data.count }, (_, i) => (
                        <div
                          className={`option ${index} `}
                          id={`${index}${i}`}
                          onClick={(e) => {
                            setSelectedItemIndex(index);
                            GetIdPerClick(index);
                          }}
                        >
                          <img
                            className="OptionWeaponImg"
                            src={data.image}
                            alt={`${data.name} weapon`}
                          />
                          <span className={`itemName ${data.tier}C`}>
                            {data.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="EnchantProgress"></div>
          <div className="EnchantSuccess">
            <img
              className="mainWeaponImg"
              src={savedImage ? savedImage : defaultimg}
              alt={`${savedName || "No name"} weapon`}
            />
          </div>
          <span className="mws">{savedDmgUpgradeOne}</span>
          <button onClick={() => EnchantPerClick(selectedItemIndex)}>
            Enchant
          </button>
          <button onClick={test}>test</button>
        </div>
      </div>
    </>
  );
};

export default Enchant;
