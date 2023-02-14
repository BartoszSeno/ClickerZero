import { useEffect, useState } from "react";
import { MainWeaponImageAndNameAndCost } from "../../data/equipment/mainWeapon";
import defaultimg from "C:/Users/sieni/Desktop/ClickerZero/src/assets/images/default.png";

function MainWeapon({
  mainWeaponDara,
  setMainWeaponData,
  HowMenyTimeBoughtWeapon,
}: {
  mainWeaponDara: any;
  setMainWeaponData: any;
  HowMenyTimeBoughtWeapon: any;
}) {
  //Geting items from loop on click
  function GetIdPerClick(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];
    //save items in localstorage
    localStorage.setItem("selectedItemId", item.id.toString());
    localStorage.setItem("selectedItemName", item.name.toString());
    localStorage.setItem("selectedItemImg", item.image.toString());
    localStorage.setItem("selectedItemDmg", item.dmgLvl0.toString());
    localStorage.setItem("selectedItemTier", item.tier.toString());
  }

  //load items from localstorage
  const savedId = localStorage.getItem("selectedItemId");
  const savedImage = localStorage.getItem("selectedItemImg");
  const savedName = localStorage.getItem("selectedItemName");
  const savedDmg = localStorage.getItem("selectedItemDmg");
  const savedTier = localStorage.getItem("selectedItemTier");

  const [OpenAndClose, setOpenAndClose] = useState<boolean>(false);
  function OpenClose() {
    setOpenAndClose(!OpenAndClose);
  }

  // random number for id

  return (
    <>
      <div
        className={`items-box MainWeapon ${savedTier}B`}
        onClick={() => OpenClose()}
      >
        <div className="selectedItem">
          <img
            className="mainWeaponImg"
            src={savedImage ? savedImage : defaultimg}
            alt={`${savedName || "No name"} weapon`}
          />
        </div>
        <div id="option-container" className={OpenAndClose ? "open" : "close"}>
          {mainWeaponDara.map((data: any, index: any) => {
            if (data.isBought) {
              return (
                <div key={index}>
                  {Array.from({ length: data.count }, (_, i) => (
                    <div
                      className={`option ${index} `}
                      id={`${index}${i}`}
                      onClick={(e) => {
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
    </>
  );
}

export default MainWeapon;
