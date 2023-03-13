import { getSavedDmgShieldAndDagger } from "../../../../enchant";

const DemageDagger = ({
  ShieldAndDaggerData,
  selectedShieldAndDaggerItem,
}: {
  ShieldAndDaggerData: any;
  selectedShieldAndDaggerItem: any;
}) => {
  return (
    <>
      {ShieldAndDaggerData.map((data: any, index: any) => {
        if (index === selectedShieldAndDaggerItem) {
          const itemSavedDmgMainKey = `selectedItemDmgForEnchant_${data.name}`;
          const savedDmgMain = getSavedDmgShieldAndDagger(itemSavedDmgMainKey);
          const selectedItemData = ShieldAndDaggerData.find(
            (data: any) => data.id === selectedShieldAndDaggerItem
          );

          return (
            <div key={`${data.id}_${index}`}>
              {selectedItemData && (
                <div>
                  <span className="statsDmgDaggerHiden">
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

export default DemageDagger;
