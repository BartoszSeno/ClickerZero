/* eslint-disable array-callback-return */

function EquipArmor() {
  // Load saved item information from local storage
  const savedImageA = localStorage.getItem("selectedArmorItemImgEquip");
  const savedNameA = localStorage.getItem("selectedArmorItemNameEquip");
  const savedTierA = localStorage.getItem("selectedArmorItemTierEquip");

  return (
    <>
      <div className={`items-box Armor ${savedTierA}B`}>
        <div className="selectedItem">
          <img
            className="equipmentImgeq"
            src={
              savedImageA
                ? savedImageA
                : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
            }
            alt={`${savedNameA || "No name"} Armor`}
          />
        </div>
      </div>
    </>
  );
}

export default EquipArmor;
