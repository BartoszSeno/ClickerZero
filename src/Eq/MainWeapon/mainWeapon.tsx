import { useState } from "react";
import { MainWeaponImageAndNameAndCost } from "../../data/equipment/mainWeapon";
import defaultimg from "C:/Users/sieni/Desktop/ClickerZero/src/assets/images/default.png";

function MainWeapon() {
  //Geting items from loop on click
  function GetIdPerClick(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];
    //save items in localstorage
    localStorage.setItem("selectedItemId", item.id.toString());
    localStorage.setItem("selectedItemName", item.name.toString());
    localStorage.setItem("selectedItemImg", item.image.toString());
    localStorage.setItem("selectedItemDmg", item.dmgLvl0.toString());
  }

  //load items from localstorage
  const savedId = localStorage.getItem("selectedItemId");
  const savedImage = localStorage.getItem("selectedItemImg");
  const savedName = localStorage.getItem("selectedItemName");
  const savedDmg = localStorage.getItem("selectedItemDmg");

  const [OpenAndClose, setOpenAndClose] = useState<boolean>(false);
  function OpenClose() {
    setOpenAndClose(!OpenAndClose);
  }

  return (
    <>
      <div className="items-box MainWeapon" onClick={() => OpenClose()}>
        <div className="selectedItem">
          <img
            className="mainWeaponImg"
            src={savedImage ? savedImage : defaultimg}
            alt={`${savedName || "No name"} weapon`}
          />
        </div>
        <div id="option-container" className={OpenAndClose ? "open" : "close"}>
          {MainWeaponImageAndNameAndCost.map((data, index) => {
            return (
              <div
                className={`option ${index} `}
                key={index}
                onClick={(e) => {
                  GetIdPerClick(index);
                }}
              >
                <img
                  className="OptionWeaponImg"
                  src={data.image}
                  alt={`${data.name} weapon`}
                />
                <span className="itemName">{data.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainWeapon;
