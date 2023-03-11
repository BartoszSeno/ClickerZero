import "../assets/css/Normal/Equipment/equipment.css";
import Armor from "./Armor/armor";
import MainWeapon from "./MainWeapon/mainWeapon";
import SubWeapon from "./SubWeapon/subWeapon";
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
}) => {
  return (
    <>
      <section id="equipment">
        <MainWeapon
          mainWeaponData={mainWeaponData}
          UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
          handleItemSelect={handleItemSelect}
        />
        <SubWeapon />
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
        <Shoes />
        <Gloves />
      </section>
      <section id="Statistic">
        <Statistic
          mainWeaponData={mainWeaponData}
          selectedItem={selectedItem}
          ArmorData={ArmorData}
          selectedArmorItem={selectedArmorItem}
          HelmetData={HelmetData}
          selectedHelmetItem={selectedHelmetItem}
        />
      </section>
    </>
  );
};

export default Eq;
