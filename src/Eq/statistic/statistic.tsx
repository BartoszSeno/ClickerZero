import { getSavedDmgMain } from "../../enchant";
import { formatNumber } from "../../hook/ClickerCount";

const Statistic = ({
  savedDMG,
  mainWeaponDara,
  selectedItem,
}: {
  savedDMG: any;
  mainWeaponDara: any;
  selectedItem: any;
}) => {
  return (
    <>
      <div id="statistic-container">
        <div className="MainWeaponDmg">
          <span>DMG;</span>
          {mainWeaponDara.map((data: any, index: any) => {
            // Warunek if dla wybranego elementu
            if (index === selectedItem) {
              const itemSavedDmgMainKey = `selectedItemDmgForEnchant_${data.name}`;
              const savedDmgMain = getSavedDmgMain(itemSavedDmgMainKey);
              const selectedItemData = mainWeaponDara.find(
                (data: any) => data.id === selectedItem
              );

              return (
                <div key={`${data.id}_${index}`}>
                  {selectedItemData && (
                    <div>
                      <span className="statsDmgMainWeapon">
                        {formatNumber(
                          savedDmgMain ? savedDmgMain : data.dmgLvl0
                        )}
                      </span>
                      <span className="statsDmgMainWeaponHiden">
                        {savedDmgMain ? savedDmgMain : data.dmgLvl0}
                      </span>
                    </div>
                  )}
                </div>
              );
            } else {
              return null; // Jeśli to nie pierwszy element, zwracamy null
            }
          })}
        </div>
        <div className="armorDef">
          <span>DEF;</span>
          <span className="statsDmg">...</span>
        </div>
      </div>
      <div className="GS">
        <span>GS</span>
        <span className="statsDmg">{savedDMG}</span>
      </div>
    </>
  );
};

export default Statistic;

export const mainWeaponFullDmgFromText = document.querySelector(
  ".statsDmgMainWeaponHiden"
) as HTMLElement;
