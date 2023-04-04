/* eslint-disable array-callback-return */

function EquipWeapon() {
  // Load saved item information from local storage
  const savedImageMW = localStorage.getItem("selectedItemImgEquip");
  const savedNameMW = localStorage.getItem("selectedItemNameEquip");
  const savedTierMW = localStorage.getItem("selectedItemTierEquip");

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
