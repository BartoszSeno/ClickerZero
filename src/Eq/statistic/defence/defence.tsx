/* eslint-disable no-lone-blocks */
import { formatNumber } from "../../../hook/FormatNumber";
import { getSavedDefArmor, getSavedDefHelmet } from "../../../enchant";

const Damage = ({
  ArmorData,
  selectedArmorItem,
  HelmetData,
  selectedHelmetItem,
}: {
  ArmorData: any;
  selectedArmorItem: any;
  HelmetData: any;
  selectedHelmetItem: any;
}) => {
  // export data from statistic
  const FullArmorDefFromText = document.querySelector(
    ".statsDefDefHiden"
  ) as HTMLElement;
  //if the data exists, convert it to a text
  const textArmor = FullArmorDefFromText?.textContent;
  // export data from statistic
  const FullHelmetDefFromText = document.querySelector(
    ".statsHelmetDefHiden"
  ) as HTMLElement;
  //if the data exists, convert it to a text
  const textHelmet = FullHelmetDefFromText?.textContent;

  const FullValu = (Number(textArmor) || 0) + (Number(textHelmet) || 0);

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
      <span className="statsDefHelmet">{formatNumber(FullValu)}</span>
      {HelmetData.map((data: any, index: any) => {
        if (index === selectedHelmetItem) {
          const itemSavedDefMainKey = `selectedItemDefForEnchant_${data.name}`;
          const savedDefMain = getSavedDefHelmet(itemSavedDefMainKey);
          const selectedHelmetItemData = HelmetData.find(
            (data: any) => data.id === Number(selectedHelmetItem)
          );

          return (
            <div key={`${data.id}_${index}`}>
              {selectedHelmetItemData && (
                <div>
                  <span className="statsHelmetDefHiden">
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
