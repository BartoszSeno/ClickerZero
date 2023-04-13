/* eslint-disable array-callback-return */

function EquipArmor({
  ArmorData,
  setArmorData,
  FullInv,
}: {
  ArmorData: any;
  setArmorData: any;
  FullInv: any;
}) {
  // Load saved item information from local storage
  const savedIdA = localStorage.getItem("selectedArmorItemIdEquip");

  const handleClick = (selectedItem: any) => {
    // Check if FullInv is true
    if (FullInv === true) {
      // Handle the condition when FullInv is true, e.g. show an error message or return early
      console.log("Cannot use this function when FullInv is true.");
      return;
    }
    const newArmorDatas = [...ArmorData];
    const index = newArmorDatas.findIndex(
      (item) => item.id === selectedItem.id
    );
    newArmorDatas[index].isEquip = false;
    setArmorData(newArmorDatas);
    localStorage.setItem(
      "ArmorImageAndNameAndCost",
      JSON.stringify(newArmorDatas)
    );
  };

  return (
    <>
      {Array.isArray(ArmorData) &&
        ArmorData.map((item: any) => {
          if (item.id === Number(savedIdA)) {
            if (item.isEquip === false) {
              return null; // Jeśli item.isEquip jest ustawione na false, zwracamy null
            } else {
              return (
                <div
                  key={item.id}
                  className={`items-box Armor ${item.tier}B`}
                  onContextMenu={() => handleClick(item)}
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

export default EquipArmor;
