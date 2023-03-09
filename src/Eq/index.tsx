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
}: {
  mainWeaponData: any;
  UpgradedNamesMainWeapon: any;
  handleItemSelect: any;
  selectedItem: any;
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
        <Armor />
        <Helmet />
        <Shoes />
        <Gloves />
      </section>
      <section id="Statistic">
        <Statistic
          mainWeaponData={mainWeaponData}
          selectedItem={selectedItem}
        />
      </section>
    </>
  );
};

export default Eq;
