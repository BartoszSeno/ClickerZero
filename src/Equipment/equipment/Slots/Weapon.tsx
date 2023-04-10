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
  const savedImageMW = localStorage.getItem("selectedItemImgEquip");
  const savedNameMW = localStorage.getItem("selectedItemNameEquip");
  const savedTierMW = localStorage.getItem("selectedItemTierEquip");
  const savedIdMW = localStorage.getItem("selectedItemIdEquip");

  const handleClick = () => {
    const newMainWeaponData = [...mainWeaponData];
    const index = newMainWeaponData.findIndex(
      (item) => item.id === Number(savedIdMW)
    );
    newMainWeaponData[index].isEquip = true;
    setMainWeaponData(newMainWeaponData);
    localStorage.setItem(
      "MainWeaponImageAndNameAndCost",
      JSON.stringify(newMainWeaponData)
    );
    console.log("tsest ", newMainWeaponData[index]);
    console.log("main ", mainWeaponData[index]);
  };

  return (
    <>
      <div
        className={`items-box MainWeapon ${savedTierMW}B`}
        onContextMenu={handleClick}
      >
        <div className="selectedItem">
          <img
            className="equipmentImgeq"
            src={
              savedImageMW
                ? savedImageMW
                : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
            }
            alt={`${savedNameMW || "No name"} Weapon`}
          />
        </div>
      </div>
    </>
  );
}

export default EquipWeapon;
