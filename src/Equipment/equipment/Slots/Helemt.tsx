/* eslint-disable array-callback-return */

function EquipHelmet({
  HelmetData,
  setHelmetData,
  FullInv,
}: {
  HelmetData: any;
  setHelmetData: any;
  FullInv: any;
}) {
  // Load saved item information from local storage
  const savedIdG = localStorage.getItem("selectedHelmetItemIdEquip");

  const handleClick = (selectedItem: any) => {
    // Check if FullInv is true
    if (FullInv === true) {
      // Handle the condition when FullInv is true, e.g. show an error message or return early
      console.log("Cannot use this function when FullInv is true.");
      return;
    }
    const newHelmetDatas = [...HelmetData];
    const index = newHelmetDatas.findIndex(
      (item) => item.id === selectedItem.id
    );
    newHelmetDatas[index].isEquip = false;
    setHelmetData(newHelmetDatas);
    localStorage.setItem(
      "HelmetImageAndNameAndCost",
      JSON.stringify(newHelmetDatas)
    );
  };

  return (
    <>
      {Array.isArray(HelmetData) &&
        HelmetData.map((item: any) => {
          if (item.id === Number(savedIdG)) {
            if (item.isEquip === false) {
              return null; // Jeśli item.isEquip jest ustawione na false, zwracamy null
            } else {
              return (
                <div
                  key={item.id}
                  className={`items-box Helmet ${item.tier}B`}
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

export default EquipHelmet;
