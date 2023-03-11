/* eslint-disable no-lone-blocks */
import { formatNumber } from "../../../hook/FormatNumber";
import { getSavedDefArmor } from "../../../enchant";

const Damage = ({
  ArmorData,
  selectedArmorItem,
}: {
  ArmorData: any;
  selectedArmorItem: any;
}) => {
  return (
    <>
      {ArmorData.map((data: any, index: any) => {
        if (index === selectedArmorItem) {
          const itemSavedDefMainKey = `selectedItemDefForEnchant_${data.name}`;
          const savedDefMain = getSavedDefArmor(itemSavedDefMainKey);
          const selectedArmorItemData = ArmorData.find(
            (data: any) => data.id === Number(selectedArmorItem)
          );

          return (
            <div key={`${data.id}_${index}`}>
              {selectedArmorItemData && (
                <div>
                  <span className="statsDefArmor">
                    {formatNumber(savedDefMain ? savedDefMain : data.defLvl0)}
                  </span>
                  <span className="statsDefDefHiden">
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

export default Damage;
