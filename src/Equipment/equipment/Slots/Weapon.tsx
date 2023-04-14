function EquipWeapon({
  setMainWeaponData,
  mainWeaponData,
  FullInv,
}: {
  setMainWeaponData: any;
  mainWeaponData: any;
  FullInv: any;
}) {
  // Load saved item information from local storage
  const savedIdMW = localStorage.getItem("selectedItemIdEquip");

  const handleClick = (selectedItem: any) => {
    // Check if FullInv is true
    if (FullInv === true) {
      // Handle the condition when FullInv is true, e.g. show an error message or return early
      console.log("Cannot use this function when FullInv is true.");
      return;
    }

    // Continue with the rest of the logic when FullInv is false
    const newMainWeaponDatas = [...mainWeaponData];
    const index = newMainWeaponDatas.findIndex(
      (item) => item.id === selectedItem.id
    );
    newMainWeaponDatas[index].isEquip = false;
    setMainWeaponData(newMainWeaponDatas);
    localStorage.setItem(
      "MainWeaponImageAndNameAndCost",
      JSON.stringify(newMainWeaponDatas)
    );
  };

  return (
    <>
      {Array.isArray(mainWeaponData) &&
        mainWeaponData.map((item: any) => {
          if (item.id === Number(savedIdMW)) {
            if (item.isEquip === false) {
              return null; // Jeśli item.isEquip jest ustawione na false, zwracamy null
            } else {
              return (
                <div
                  key={item.id}
                  className={`items-box MainWeapon ${item.tier}B`}
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

export default EquipWeapon;
