import { getSavedDmgMain } from "../../../../../enchant";

const DemageMainWeapon = ({
  mainWeaponData,
  selectedItem,
}: {
  mainWeaponData: any;
  selectedItem: any;
}) => {
  return (
    <>
      {mainWeaponData.map((data: any, index: any) => {
        if (index === selectedItem) {
          const itemSavedDmgMainKey = `selectedItemDmgForEnchant_${data.name}`;
          const savedDmgMain = getSavedDmgMain(itemSavedDmgMainKey);
          const selectedItemData = mainWeaponData.find(
            (data: any) => data.id === selectedItem
          );

          return (
            <div key={`${data.id}_${index}`}>
              {selectedItemData && (
                <div>
                  <span className="statsDmgMainWeaponHiden">
                    {savedDmgMain ? savedDmgMain : data.dmgLvl0}
                  </span>
                </div>
              )}
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default DemageMainWeapon;
