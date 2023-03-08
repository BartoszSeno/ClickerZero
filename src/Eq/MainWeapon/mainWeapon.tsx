/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { MainWeaponImageAndNameAndCost } from "../../data/equipment/mainWeapon";

function MainWeapon({
  mainWeaponDara,
  setMainWeaponData,
  HowMenyTimeBoughtWeapon,
  setsavedDMG,
  UpgradedNamesMainWeapon,
  UpgradedDmgMainWeapon,
  savedDMG,
  handleItemSelect,
}: {
  mainWeaponDara: any;
  setMainWeaponData: any;
  HowMenyTimeBoughtWeapon: any;
  setsavedDMG: any;
  UpgradedNamesMainWeapon: any;
  UpgradedDmgMainWeapon: any;
  savedDMG: any;
  handleItemSelect: any;
}) {
  //Geting items from loop on click

  function GetIdPerClick(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];
    //save items in localstorage
    localStorage.setItem("selectedItemIdEquip", item.id.toString());
    localStorage.setItem("selectedItemNameEquip", item.name.toString());
    localStorage.setItem("selectedItemImgEquip", item.image.toString());
    localStorage.setItem("selectedItemDmgEquip", item.dmgLvl0.toString());
    localStorage.setItem("selectedItemTierEquip", item.tier.toString());
  }

  //load items from localstorage
  const savedImage = localStorage.getItem("selectedItemImgEquip");
  const savedName = localStorage.getItem("selectedItemNameEquip");
  const savedTier = localStorage.getItem("selectedItemTierEquip");
  const savedId = localStorage.getItem("selectedItemIdEquip");

  const [OpenAndClose, setOpenAndClose] = useState<boolean>(false);
  function OpenClose() {
    setOpenAndClose(!OpenAndClose);
  }

  useEffect(() => {
    handleItemSelect(Number(savedId));
  });

  return (
    <>
      <div
        className={`items-box MainWeapon ${savedTier}B`}
        onClick={() => OpenClose()}
      >
        <div className="selectedItem">
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
        <div id="option-container" className={OpenAndClose ? "open" : "close"}>
          {mainWeaponDara.map((data: any, index: any) => {
            const upgradedName = UpgradedNamesMainWeapon[index];
            return (
              <div key={`${data.id}_${index}`}>
                {Array.from({ length: data.count }, (_, i) => {
                  return (
                    <div
                      className={`option ${index} `}
                      id={`${index}${i}`}
                      key={`${data.id}_${index}_${i}`}
                      onClick={(e) => {
                        handleItemSelect(index);
                        GetIdPerClick(index);
                      }}
                    >
                      <img
                        className="OptionWeaponImg"
                        src={data.image}
                        alt={`${data.name} weapon`}
                      />
                      <span className={`itemName ${data.tier}C`}>
                        {upgradedName ? upgradedName : data.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainWeapon;
