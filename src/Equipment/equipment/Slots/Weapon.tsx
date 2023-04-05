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

  return (
    <>
      <div className={`items-box MainWeapon ${savedTierMW}B`}>
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
