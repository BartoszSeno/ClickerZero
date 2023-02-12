import { useState } from "react";
import { MainWeaponImageAndNameAndCost } from "../../data/equipment/mainWeapon";

function MainWeapon() {
  //Geting id from loop on click
  function GetIdPerClick(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];
    console.log(item.id);
  }

  const [OpenAndClose, setOpenAndClose] = useState<boolean>(false);
  function OpenClose() {
    setOpenAndClose(!OpenAndClose);
  }
  return (
    <>
      <div className="items-box MainWeapon" onClick={() => OpenClose()}>
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
                  className="mainWeaponImg"
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
