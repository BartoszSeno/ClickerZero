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
}: {
  mainWeaponData: any;
  UpgradedNamesMainWeapon: any;
  handleItemSelect: any;
  selectedItem: any;
  ArmorData: any;
  UpgradedNamesArmor: any;
  handleArmorItemSelect: any;
  selectedArmorItem: any;
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
        <Helmet />
        <Shoes />
        <Gloves />
      </section>
      <section id="Statistic">
        <Statistic
          mainWeaponData={mainWeaponData}
          selectedItem={selectedItem}
          ArmorData={ArmorData}
          selectedArmorItem={selectedArmorItem}
        />
      </section>
    </>
  );
};

export default Eq;
