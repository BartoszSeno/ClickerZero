import "../assets/css/Normal/Equipment/equipment.css";
import Armor from "./Armor/armor";
import MainWeapon from "./MainWeapon/mainWeapon";
import ShieldAndDagger from "./SubWeapon/subWeapon";
import Helmet from "./Helmet/helmet";
import Shoes from "./Shoes/shoes";
import Gloves from "./Gloves/gloves";
import Statistic from "./statistic/statistic";

const Eq = ({
  mainWeaponData,
  UpgradedNamesMainWeapon,
  handleItemSelect,
  selectedItem,
  ArmorData,
  UpgradedNamesArmor,
  handleArmorItemSelect,
  selectedArmorItem,
  HelmetData,
  UpgradedNamesHelmet,
  handleHelmetItemSelect,
  selectedHelmetItem,
  ShoesData,
  UpgradedNamesShoes,
  handleShoesItemSelect,
  selectedShoesItem,
  GlovesData,
  UpgradedNamesGloves,
  handleGlovesItemSelect,
  selectedGlovesItem,
  ShieldAndDaggerData,
  UpgradedNamesShieldAndDagger,
  handleShieldAndDaggerItemSelect,
  selectedShieldAndDaggerItem,
}: {
  mainWeaponData: any;
  UpgradedNamesMainWeapon: any;
  handleItemSelect: any;
  selectedItem: any;
  ArmorData: any;
  UpgradedNamesArmor: any;
  handleArmorItemSelect: any;
  selectedArmorItem: any;
  HelmetData: any;
  UpgradedNamesHelmet: any;
  handleHelmetItemSelect: any;
  selectedHelmetItem: any;
  ShoesData: any;
  UpgradedNamesShoes: any;
  handleShoesItemSelect: any;
  selectedShoesItem: any;
  GlovesData: any;
  UpgradedNamesGloves: any;
  handleGlovesItemSelect: any;
  selectedGlovesItem: any;
  ShieldAndDaggerData: any;
  UpgradedNamesShieldAndDagger: any;
  handleShieldAndDaggerItemSelect: any;
  selectedShieldAndDaggerItem: any;
}) => {
  return (
    <>
      <section id="equipment">
        <MainWeapon
          mainWeaponData={mainWeaponData}
          UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
          handleItemSelect={handleItemSelect}
        />
        <ShieldAndDagger
          ShieldAndDaggerData={ShieldAndDaggerData}
          UpgradedNamesShieldAndDagger={UpgradedNamesShieldAndDagger}
          handleShieldAndDaggerItemSelect={handleShieldAndDaggerItemSelect}
        />
        <Armor
          ArmorData={ArmorData}
          UpgradedNamesArmor={UpgradedNamesArmor}
          handleArmorItemSelect={handleArmorItemSelect}
        />
        <Helmet
          HelmetData={HelmetData}
          UpgradedNamesHelmet={UpgradedNamesHelmet}
          handleHelmetItemSelect={handleHelmetItemSelect}
        />
        <Shoes
          ShoesData={ShoesData}
          UpgradedNamesShoes={UpgradedNamesShoes}
          handleShoesItemSelect={handleShoesItemSelect}
        />
        <Gloves
          GlovesData={GlovesData}
          UpgradedNamesGloves={UpgradedNamesGloves}
          handleGlovesItemSelect={handleGlovesItemSelect}
        />
      </section>
      <section id="Statistic">
        <Statistic
          mainWeaponData={mainWeaponData}
          selectedItem={selectedItem}
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
      </section>
    </>
  );
};

export default Eq;
