/* eslint-disable array-callback-return */

function EquipShoes({
  ShoesData,
  setShoesData,
}: {
  ShoesData: any;
  setShoesData: any;
}) {
  // Load saved item information from local storage
  const savedIdS = localStorage.getItem("selectedShoesItemIdEquip");

  const handleClick = (selectedItem: any) => {
    const newShoesDatas = [...ShoesData];
    const index = newShoesDatas.findIndex(
      (item) => item.id === selectedItem.id
    );
    newShoesDatas[index].isEquip = false;
    setShoesData(newShoesDatas);
    localStorage.setItem(
      "ShoesImageAndNameAndCost",
      JSON.stringify(newShoesDatas)
    );
  };

  return (
    <>
      {Array.isArray(ShoesData) &&
        ShoesData.map((item: any) => {
          if (item.id === Number(savedIdS)) {
            if (item.isEquip === false) {
              return null; // Jeśli item.isEquip jest ustawione na false, zwracamy null
            } else {
              return (
                <div
                  key={item.id}
                  className={`items-box Shoes ${item.tier}B`}
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

export default EquipShoes;
