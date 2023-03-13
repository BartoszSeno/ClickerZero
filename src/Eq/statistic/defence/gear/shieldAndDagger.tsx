/* eslint-disable no-lone-blocks */
import { getSavedDefShieldAndDagger } from "../../../../enchant";

const DefenceShieldAndDagger = ({
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
          const itemSavedDefMainKey = `selectedItemDefForEnchant_${data.name}`;
          const savedDefMain = getSavedDefShieldAndDagger(itemSavedDefMainKey);
          const selectedShieldAndDaggerItemData = ShieldAndDaggerData.find(
            (data: any) => data.id === Number(selectedShieldAndDaggerItem)
          );

          return (
            <div key={`${data.id}_${index}`}>
              {selectedShieldAndDaggerItemData && (
                <div>
                  <span className="statsShieldAndDaggerDefHiden">
                    {savedDefMain ? savedDefMain : data.defLvl0}
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

export default DefenceShieldAndDagger;
