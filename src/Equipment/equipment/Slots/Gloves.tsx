/* eslint-disable array-callback-return */

function EquipGloves({
  GlovesData,
  setGlovesData,
  FullInv,
}: {
  GlovesData: any;
  setGlovesData: any;
  FullInv: any;
}) {
  const savedIdG = localStorage.getItem("selectedGlovesItemIdEquip");

  const handleClickGloves = (selectedItem: any) => {
    // Check if FullInv is true
    if (FullInv === true) {
      // Handle the condition when FullInv is true, e.g. show an error message or return early
      console.log("Cannot use this function when FullInv is true.");
      return;
    }
    //Gloves
    const newGlovesData = [...GlovesData];
    const index = newGlovesData.findIndex(
      (item) => item.id === selectedItem.id
    );
    newGlovesData[index].isEquip = false;
    setGlovesData(newGlovesData);
    localStorage.setItem(
      "GlovesImageAndNameAndCost",
      JSON.stringify(newGlovesData)
    );
    localStorage.removeItem("selectedGlovesItemIdEquip");
  };

  return (
    <>
      {Array.isArray(GlovesData) &&
        GlovesData.map((item: any) => {
          if (item.id === Number(savedIdG)) {
            if (item.isEquip === false) {
              return null; // Jeśli item.isEquip jest ustawione na false, zwracamy null
            } else {
              return (
                <div
                  key={item.id}
                  className={`items-box Gloves ${item.tier}B`}
                  onContextMenu={() => handleClickGloves(item)}
                >
                  <div className="selectedItem">
                    <img
                      className="equipmentImgeq"
                      src={
                        item.image
                          ? item.image
                          : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
                      }
                      alt={`${item.name || "No name"} Weapon`}
                    />
                  </div>
                </div>
              );
            }
          } else {
            return null; // Jeśli item.id nie jest równy savedIdMW, zwracamy null (lub inny odpowiedni komponent)
          }
        })}
    </>
  );
}

export default EquipGloves;
