/* eslint-disable array-callback-return */

function EquipSubWeapon() {
  // Load saved item information from local storage
  const savedImageSW = localStorage.getItem(
    "selectedShieldAndDaggerItemImgEquip"
  );
  const savedNameSW = localStorage.getItem(
    "selectedShieldAndDaggerItemNameEquip"
  );
  const savedTierSW = localStorage.getItem(
    "selectedShieldAndDaggerItemTierEquip"
  );
  return (
    <>
      <div className={`items-box SubWeapon ${savedTierSW}B`}>
        <div className="selectedItem">
          <img
            className="equipmentImgeq"
            src={
              savedImageSW
                ? savedImageSW
                : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
            }
            alt={`${savedNameSW || "No name"} SubWeapon`}
          />
        </div>
      </div>
    </>
  );
}

export default EquipSubWeapon;
