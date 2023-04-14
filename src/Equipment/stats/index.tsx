import DmgStatistic from "./items/demage/items/demage";
import DefenceStatistic from "./items/defence/defence";

function Statistic({
  mainWeaponData,
  selectedItem,
  ShieldAndDaggerData,
  selectedShieldAndDaggerItem,
  HelmetData,
  selectedHelmetItem,
  ArmorData,
  selectedArmorItem,
  GlovesData,
  selectedGlovesItem,
  ShoesData,
  selectedShoesItem,
}: {
  mainWeaponData: any;
  selectedItem: any;
  ShieldAndDaggerData: any;
  selectedShieldAndDaggerItem: any;
  HelmetData: any;
  selectedHelmetItem: any;
  ArmorData: any;
  selectedArmorItem: any;
  GlovesData: any;
  selectedGlovesItem: any;
  ShoesData: any;
  selectedShoesItem: any;
}) {
  return (
    <>
      <div id="statisticContainer">
        <DmgStatistic
          mainWeaponData={mainWeaponData}
          selectedItem={selectedItem}
          ShieldAndDaggerData={ShieldAndDaggerData}
          selectedShieldAndDaggerItem={selectedShieldAndDaggerItem}
        />
        <DefenceStatistic
          HelmetData={HelmetData}
          selectedHelmetItem={selectedHelmetItem}
          ArmorData={ArmorData}
          selectedArmorItem={selectedArmorItem}
          GlovesData={GlovesData}
          selectedGlovesItem={selectedGlovesItem}
          ShoesData={ShoesData}
          selectedShoesItem={selectedShoesItem}
          ShieldAndDaggerData={ShieldAndDaggerData}
          selectedShieldAndDaggerItem={selectedShieldAndDaggerItem}
        />
      </div>
    </>
  );
}

export default Statistic;
