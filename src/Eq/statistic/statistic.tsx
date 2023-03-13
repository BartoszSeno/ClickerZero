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
  GlovesData,
  selectedGlovesItem,
  ShieldAndDaggerData,
  selectedShieldAndDaggerItem,
}: {
  mainWeaponData: any;
  selectedItem: any;
  ArmorData: any;
  selectedArmorItem: any;
  HelmetData: any;
  selectedHelmetItem: any;
  ShoesData: any;
  selectedShoesItem: any;
  GlovesData: any;
  selectedGlovesItem: any;
  ShieldAndDaggerData: any;
  selectedShieldAndDaggerItem: any;
}) => {
  return (
    <>
      <div id="statistic-container">
        <div className="MainWeaponDmg">
          <span>DMG</span>
          <Damage
            mainWeaponData={mainWeaponData}
            selectedItem={selectedItem}
            ShieldAndDaggerData={ShieldAndDaggerData}
            selectedShieldAndDaggerItem={selectedShieldAndDaggerItem}
          />
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
            GlovesData={GlovesData}
            selectedGlovesItem={selectedGlovesItem}
            ShieldAndDaggerData={ShieldAndDaggerData}
            selectedShieldAndDaggerItem={selectedShieldAndDaggerItem}
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
