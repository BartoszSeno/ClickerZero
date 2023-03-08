import { getSavedDmgMain } from "../../enchant";

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
          <span>AP</span>

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
                      <span className="statsDmg">
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
        <div className="AweWeaponDmg">
          <span>AAP</span>
          <span className="statsDmg">Null</span>
        </div>
        <div className="SubWeaponDmg">
          <span>DP</span>
          <span className="statsDmg">Null</span>
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
