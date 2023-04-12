/* eslint-disable array-callback-return */

import { Console } from "console";
import { useEffect } from "react";

function EquipWeapon({
  setMainWeaponData,
  mainWeaponData,
}: {
  setMainWeaponData: any;
  mainWeaponData: any;
}) {
  // Load saved item information from local storage
  const savedIdMW = localStorage.getItem("selectedItemIdEquip");

  const handleClick = (selectedItem: any) => {
    const newMainWeaponDatas = [...mainWeaponData];
    const index = newMainWeaponDatas.findIndex(
      (item) => item.id === selectedItem.id
    );
    newMainWeaponDatas[index].isEquip = false;
    setMainWeaponData(newMainWeaponDatas);
    localStorage.setItem(
      "MainWeaponImageAndNameAndCost",
      JSON.stringify(newMainWeaponDatas)
    );
  };

  return (
    <>
      {Array.isArray(mainWeaponData) &&
        mainWeaponData.map((item: any) => {
          if (item.id === Number(savedIdMW)) {
            if (item.isEquip === false) {
              return null; // Jeśli item.isEquip jest ustawione na false, zwracamy null
            } else {
              return (
                <div
                  key={item.id}
                  className={`items-box MainWeapon ${item.tier}B`}
                  onContextMenu={() => handleClick(item)}
                >
                  <div className="selectedItem">
                    <img
                      className="equipmentImgeq"
                      src={
                        item.image
                          ? item.image
                          : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
                      }
                      alt={`${item.name || "No name"} Weapon`}
                    />
                  </div>
                </div>
              );
            }
          } else {
            return null; // Jeśli item.id nie jest równy savedIdMW, zwracamy null (lub inny odpowiedni komponent)
          }
        })}
    </>
  );
}

export default EquipWeapon;
