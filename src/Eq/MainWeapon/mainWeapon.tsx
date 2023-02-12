import { useState } from "react";
import { MainWeaponImageAndNameAndCost } from "../../data/equipment/mainWeapon";

function MainWeapon() {
  const [selectedItemId, setSelectedItemId] = useState<number | undefined>(
    undefined
  );
  const [selectedItemName, setSelectedItemName] = useState<string | undefined>(
    undefined
  );

  //Geting id from loop on click
  function GetIdPerClick(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];
    setSelectedItemId(item.id);
    setSelectedItemName(item.name);
    localStorage.setItem("selectedItemId", item.id.toString());
    console.log(item.id);
    //selected item
  }

  const savedId = localStorage.getItem("selectedItemId");

  const [OpenAndClose, setOpenAndClose] = useState<boolean>(false);
  function OpenClose() {
    setOpenAndClose(!OpenAndClose);
  }

  return (
    <>
      <div className="items-box MainWeapon" onClick={() => OpenClose()}>
        <div className="selectedItem">
          {savedId}
          {selectedItemName}
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
