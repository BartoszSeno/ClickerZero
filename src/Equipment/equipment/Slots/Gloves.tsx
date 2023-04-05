/* eslint-disable array-callback-return */

function EquipGloves({
  GlovesData,
  setGlovesData,
}: {
  GlovesData: any;
  setGlovesData: any;
}) {
  // Load saved item information from local storage
  const savedImageG = localStorage.getItem("selectedGlovesItemImgEquip");
  const savedNameG = localStorage.getItem("selectedGlovesItemNameEquip");
  const savedTierG = localStorage.getItem("selectedGlovesItemTierEquip");

  const handleClickGloves = (index: any) => {
    //Gloves
    const newGlovesData = [...GlovesData];
    newGlovesData[index].isEquip = true;
    setGlovesData(newGlovesData);
    localStorage.setItem(
      "GlovesImageAndNameAndCost",
      JSON.stringify(newGlovesData)
    );
  };

  return (
    <>
      <div
        className={`items-box Gloves ${savedTierG}B`}
        onContextMenu={handleClickGloves}
      >
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
