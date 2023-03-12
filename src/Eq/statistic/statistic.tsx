import Damage from "./demage/demage";
import Defence from "./defence/defence";
import GearScore from "./GearScore/gearScore";

const Statistic = ({
  mainWeaponData,
  selectedItem,
  ArmorData,
  selectedArmorItem,
  HelmetData,
  selectedHelmetItem,
  ShoesData,
  selectedShoesItem,
}: {
  mainWeaponData: any;
  selectedItem: any;
  ArmorData: any;
  selectedArmorItem: any;
  HelmetData: any;
  selectedHelmetItem: any;
  ShoesData: any;
  selectedShoesItem: any;
}) => {
  return (
    <>
      <div id="statistic-container">
        <div className="MainWeaponDmg">
          <span>DMG</span>
          <Damage mainWeaponData={mainWeaponData} selectedItem={selectedItem} />
        </div>
        <div className="armorDef">
          <span>DEF</span>
          <Defence
            ArmorData={ArmorData}
            selectedArmorItem={selectedArmorItem}
            HelmetData={HelmetData}
            selectedHelmetItem={selectedHelmetItem}
            ShoesData={ShoesData}
            selectedShoesItem={selectedShoesItem}
          />
        </div>
      </div>
      <div className="GS">
        <span>GS</span>
        <GearScore />
      </div>
    </>
  );
};

export default Statistic;

export const mainWeaponFullDmgFromText = document.querySelector(
  ".statsDmgMainWeaponHiden"
) as HTMLElement;
