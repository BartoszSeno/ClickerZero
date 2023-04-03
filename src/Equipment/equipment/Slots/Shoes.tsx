/* eslint-disable array-callback-return */

function EquipShoes() {
  // Load saved item information from local storage
  const savedImageS = localStorage.getItem("selectedShoesItemImgEquip");
  const savedNameS = localStorage.getItem("selectedShoesItemNameEquip");
  const savedTierS = localStorage.getItem("selectedShoesItemTierEquip");

  return (
    <>
      <div className={`items-box Shoes ${savedTierS}B`}>
        <div className="selectedItem">
          <img
            className="equipmentImgeq"
            src={
              savedImageS
                ? savedImageS
                : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
            }
            alt={`${savedNameS || "No name"} Shoes`}
          />
        </div>
      </div>
    </>
  );
}

export default EquipShoes;
