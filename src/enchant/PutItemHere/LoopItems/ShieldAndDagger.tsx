/* eslint-disable array-callback-return */
import { ShieldAndDaggerImageAndNameAndCost } from "../../../data/equipment/subWeapon";

const ShieldAndDaggerLoopEnchant = ({
  ShieldAndDaggerData,
  savedShieldAndDaggerItemUpgrade,
  UpgradedNamesShieldAndDagger,
  setSelectedShieldAndDaggerItemIndex,
  setUpgradedDefShieldAndDagger,
  HandleItemClick,
  UpgradedDmgShieldAndDagger,
  setUpgradedDmgShieldAndDagger,
}: {
  ShieldAndDaggerData: any;
  savedShieldAndDaggerItemUpgrade: any;
  UpgradedNamesShieldAndDagger: any;
  setSelectedShieldAndDaggerItemIndex: any;
  setUpgradedDefShieldAndDagger: any;
  HandleItemClick: any;
  UpgradedDmgShieldAndDagger: any;
  setUpgradedDmgShieldAndDagger: any;
}) => {
  // Define a function named "GetIdPerClickShieldAndDagger" that takes an argument "index" of data type.
  function GetIdPerClickShieldAndDagger(ShieldAndDaggerIndex: any) {
    // Retrieve the item data at the given index from an array named "ShieldAndDaggerImageAndNameAndCost".
    const ShieldAndDagger =
      ShieldAndDaggerImageAndNameAndCost[ShieldAndDaggerIndex];

    // Save the individual item data retrieved above into the browser's local storage.
    localStorage.setItem(
      "selectedShieldAndDaggerItemIdForEnchant",
      ShieldAndDagger.id.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemNameForEnchant",
      ShieldAndDagger.name.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemImgForEnchant",
      ShieldAndDagger.image.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemTierForEnchant",
      ShieldAndDagger.tier.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemDefForEnchant",
      ShieldAndDagger.defLvl0.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemDmgForEnchant",
      ShieldAndDagger.dmgLvl0.toString()
    );
  }
  // FAKE FUNCTION TO UPDATA DATA ON LOAD, WORK THE SAME LIKE 'ENCHANTPERCLICK'
  //!! BUT VALUE NOT SAVED IN LOCALSTORAGE !!
  //ShieldAndDagger
  function FakeUpdateToRefreshTheShieldAndDaggerData(
    ShieldAndDaggerIndex: any
  ) {
    const item = ShieldAndDaggerImageAndNameAndCost[ShieldAndDaggerIndex];
    const ShieldAndDaggerItemUpgradeName = `${item.name}`;
    const savedShieldAndDaggerItemUpgrade = localStorage.getItem(
      ShieldAndDaggerItemUpgradeName
    );
    const savedShieldAndDaggerItemUpgradeNumber = Number(
      savedShieldAndDaggerItemUpgrade
    );
    const ShieldAndDaggerUpgradedValue =
      savedShieldAndDaggerItemUpgradeNumber < 15
        ? savedShieldAndDaggerItemUpgradeNumber
        : 15;

    localStorage.setItem(
      "ShieldAndDaggerUpgradedValue",
      ShieldAndDaggerUpgradedValue.toString()
    );

    localStorage.setItem(
      ShieldAndDaggerItemUpgradeName,
      ShieldAndDaggerUpgradedValue.toString()
    );

    const ShieldAndDaggerItemName = `+${ShieldAndDaggerUpgradedValue} ${item.name}`;

    const upgradedShieldAndDaggerNames = [...UpgradedNamesShieldAndDagger];
    upgradedShieldAndDaggerNames[ShieldAndDaggerIndex] =
      ShieldAndDaggerItemName;

    const itemSavedDefShieldAndDaggerKey = `selectedShieldAndDaggerItemDefForEnchant_${item.name}`;
    const itemSavedDmgShieldAndDaggerKey = `selectedShieldAndDaggerItemDmgForEnchant_${item.name}`;

    const savedDefShieldAndDagger =
      localStorage.getItem(itemSavedDefShieldAndDaggerKey) || item.defLvl0;
    setUpgradedDefShieldAndDagger(savedDefShieldAndDagger);

    const savedDmgShieldAndDagger =
      localStorage.getItem(itemSavedDmgShieldAndDaggerKey) || item.dmgLvl0;
    setUpgradedDmgShieldAndDagger(savedDmgShieldAndDagger);
  }

  return (
    <>
      {ShieldAndDaggerData.map(
        (ShieldAndDaggerItem: any, ShieldAndDaggerIndex: any) => {
          if (ShieldAndDaggerItem.isBought) {
            return (
              <div key={`ShieldAndDagger_${ShieldAndDaggerIndex}`}>
                {Array.from({ length: ShieldAndDaggerItem.count }, (_, a) => {
                  const mainShieldAndDaggerId = `${ShieldAndDaggerIndex}${a}`;
                  const ShieldAndDaggerItemUpgradeName = `${ShieldAndDaggerItem.name}${ShieldAndDaggerIndex}${mainShieldAndDaggerId}`;
                  const ShieldAndDaggerItemId = `${ShieldAndDaggerIndex}${
                    savedShieldAndDaggerItemUpgrade || 0
                  }`;
                  localStorage.getItem(ShieldAndDaggerItemUpgradeName);
                  const upgradedNameShieldAndDagger =
                    UpgradedNamesShieldAndDagger[ShieldAndDaggerIndex];

                  return (
                    <div
                      className={`option ${ShieldAndDaggerItemId} `}
                      id={ShieldAndDaggerItemId}
                      key={`ShieldAndDagger_${ShieldAndDaggerIndex}_${a}`}
                      onClick={(e) => {
                        setSelectedShieldAndDaggerItemIndex(
                          ShieldAndDaggerIndex
                        );
                        GetIdPerClickShieldAndDagger(ShieldAndDaggerIndex);
                        FakeUpdateToRefreshTheShieldAndDaggerData(
                          ShieldAndDaggerIndex
                        );
                        HandleItemClick(
                          ShieldAndDaggerData,
                          ShieldAndDaggerItem.id
                        );
                      }}
                    >
                      <img
                        className="OptionEquipmentImg"
                        src={ShieldAndDaggerItem.image}
                        alt={`${ShieldAndDaggerItem.name} ShieldAndDagger`}
                      />
                      <span className={`itemName ${ShieldAndDaggerItem.tier}C`}>
                        {upgradedNameShieldAndDagger}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          }
        }
      )}
    </>
  );
};

export default ShieldAndDaggerLoopEnchant;
