/* eslint-disable array-callback-return */

function EquipSubWeapon({
  ShieldAndDaggerData,
  setShieldAndDaggerData,
}: {
  ShieldAndDaggerData: any;
  setShieldAndDaggerData: any;
}) {
  // Load saved item information from local storage
  const savedIdSD = localStorage.getItem("selectedShieldAndDaggerItemIdEquip");

  const handleClick = (selectedItem: any) => {
    const newShieldAndDaggerDatas = [...ShieldAndDaggerData];
    const index = newShieldAndDaggerDatas.findIndex(
      (item) => item.id === selectedItem.id
    );
    newShieldAndDaggerDatas[index].isEquip = false;
    setShieldAndDaggerData(newShieldAndDaggerDatas);
    localStorage.setItem(
      "ShieldAndDaggerImageAndNameAndCost",
      JSON.stringify(newShieldAndDaggerDatas)
    );
  };

  return (
    <>
      {Array.isArray(ShieldAndDaggerData) &&
        ShieldAndDaggerData.map((item: any) => {
          if (item.id === Number(savedIdSD)) {
            if (item.isEquip === false) {
              return null; // Jeśli item.isEquip jest ustawione na false, zwracamy null
            } else {
              return (
                <div
                  key={item.id}
                  className={`items-box SubWeapon ${item.tier}B`}
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

export default EquipSubWeapon;
