/* eslint-disable array-callback-return */

function EquipGloves() {
  // Load saved item information from local storage
  const savedImageG = localStorage.getItem("selectedGlovesItemImgEquip");
  const savedNameG = localStorage.getItem("selectedGlovesItemNameEquip");
  const savedTierG = localStorage.getItem("selectedGlovesItemTierEquip");

  return (
    <>
      <div className={`items-box Gloves ${savedTierG}B`}>
        <div className="selectedItem">
          <img
            className="equipmentImgeq"
            src={
              savedImageG
                ? savedImageG
                : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
            }
            alt={`${savedNameG || "No name"} Gloves`}
          />
        </div>
      </div>
    </>
  );
}

export default EquipGloves;
