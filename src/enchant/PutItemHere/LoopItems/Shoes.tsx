/* eslint-disable array-callback-return */
import { ShoesImageAndNameAndCost } from "../../../data/equipment/Shoes";
const ShoesLoopEnchant = ({
  ShoesData,
  savedShoesItemUpgrade,
  UpgradedNamesShoes,
  setSelectedShoesItemIndex,
  setUpgradedDefShoes,
  HandleItemClick,
}: {
  ShoesData: any;
  savedShoesItemUpgrade: any;
  UpgradedNamesShoes: any;
  setSelectedShoesItemIndex: any;
  setUpgradedDefShoes: any;
  HandleItemClick: any;
}) => {
  // Define a function named "GetIdPerClickShoes" that takes an argument "index" of data type.
  function GetIdPerClickShoes(ShoesIndex: any) {
    // Retrieve the item data at the given index from an array named "ShoesImageAndNameAndCost".
    const Shoes = ShoesImageAndNameAndCost[ShoesIndex];

    // Save the individual item data retrieved above into the browser's local storage.
    localStorage.setItem("selectedShoesItemIdForEnchant", Shoes.id.toString());
    localStorage.setItem(
      "selectedShoesItemNameForEnchant",
      Shoes.name.toString()
    );
    localStorage.setItem(
      "selectedShoesItemImgForEnchant",
      Shoes.image.toString()
    );
    localStorage.setItem(
      "selectedShoesItemTierForEnchant",
      Shoes.tier.toString()
    );
    localStorage.setItem(
      "selectedShoesItemDefForEnchant",
      Shoes.defLvl0.toString()
    );
  }
  // FAKE FUNCTION TO UPDATA DATA ON LOAD, WORK THE SAME LIKE 'ENCHANTPERCLICK'
  //!! BUT VALUE NOT SAVED IN LOCALSTORAGE !!
  //Shoes
  function FakeUpdateToRefreshTheShoesData(ShoesIndex: any) {
    const item = ShoesImageAndNameAndCost[ShoesIndex];
    const ShoesItemUpgradeName = `${item.name}`;
    const savedShoesItemUpgrade = localStorage.getItem(ShoesItemUpgradeName);
    const savedShoesItemUpgradeNumber = Number(savedShoesItemUpgrade);
    const ShoesUpgradedValue =
      savedShoesItemUpgradeNumber < 15 ? savedShoesItemUpgradeNumber : 15;

    localStorage.setItem("ShoesUpgradedValue", ShoesUpgradedValue.toString());

    localStorage.setItem(ShoesItemUpgradeName, ShoesUpgradedValue.toString());

    const ShoesItemName = `+${ShoesUpgradedValue} ${item.name}`;

    const upgradedShoesNames = [...UpgradedNamesShoes];
    upgradedShoesNames[ShoesIndex] = ShoesItemName;

    const itemSavedDefShoesKey = `selectedShoesItemDefForEnchant_${item.name}`;

    const savedDefShoes =
      localStorage.getItem(itemSavedDefShoesKey) || item.defLvl0;
    setUpgradedDefShoes(savedDefShoes);
  }

  return (
    <>
      {ShoesData.map((ShoesItem: any, ShoesIndex: any) => {
        if (ShoesItem.isBought) {
          return (
            <div key={`Shoes_${ShoesIndex}`}>
              {Array.from({ length: 1 }, (_, a) => {
                const mainShoesId = `${ShoesIndex}${a}`;
                const ShoesItemUpgradeName = `${ShoesItem.name}${ShoesIndex}${mainShoesId}`;
                const ShoesItemId = `${ShoesIndex}${
                  savedShoesItemUpgrade || 0
                }`;
                localStorage.getItem(ShoesItemUpgradeName);
                const upgradedNameShoes = UpgradedNamesShoes[ShoesIndex];

                return (
                  <div
                    className={`option ${ShoesItemId} `}
                    id={ShoesItemId}
                    key={`Shoes_${ShoesIndex}_${a}`}
                    onClick={(e) => {
                      setSelectedShoesItemIndex(ShoesIndex);
                      GetIdPerClickShoes(ShoesIndex);
                      FakeUpdateToRefreshTheShoesData(ShoesIndex);
                      HandleItemClick(ShoesData, ShoesItem.id);
                    }}
                  >
                    <img
                      className="OptionEquipmentImg"
                      src={ShoesItem.image}
                      alt={`${ShoesItem.name} Shoes`}
                    />
                    <span className={`itemName ${ShoesItem.tier}C`}>
                      {upgradedNameShoes}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </>
  );
};

export default ShoesLoopEnchant;
