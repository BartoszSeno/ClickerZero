/* eslint-disable array-callback-return */

function EquipHelmet() {
  // Load saved item information from local storage
  const savedImageH = localStorage.getItem("selectedHelmetItemImgEquip");
  const savedNameH = localStorage.getItem("selectedHelmetItemNameEquip");
  const savedTierH = localStorage.getItem("selectedHelmetItemTierEquip");

  return (
    <>
      <div className={`items-box Helmet ${savedTierH}B`}>
        <div className="selectedItem">
          <img
            className="equipmentImgeq"
            src={
              savedImageH
                ? savedImageH
                : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
            }
            alt={`${savedNameH || "No name"} Helmet`}
          />
        </div>
      </div>
    </>
  );
}

export default EquipHelmet;
