import "../assets/css/Normal/Equipment/equipment.css";
import Armor from "./Armor/armor";
import AweWeapon from "./AweWeapon/aweWeapon";
import MainWeapon from "./MainWeapon/mainWeapon";
import SubWeapon from "./SubWeapon/subWeapon";
import Helmet from "./Helmet/helmet";
import Shoes from "./Shoes/shoes";
import Gloves from "./Gloves/gloves";
import Statistic from "./statistic/statistic";
import { useState } from "react";

const Eq = ({
  mainWeaponDara,
  setMainWeaponData,
  HowMenyTimeBoughtWeapon,
  savedDMG,
  setsavedDMG,
  UpgradedNamesMainWeapon,
  UpgradedDmgMainWeapon,
  UpgradedNamesOnMount,
}: {
  mainWeaponDara: any;
  setMainWeaponData: any;
  HowMenyTimeBoughtWeapon: any;
  savedDMG: any;
  setsavedDMG: any;
  UpgradedNamesMainWeapon: any;
  UpgradedDmgMainWeapon: any;
  UpgradedNamesOnMount: any;
}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelect = (index: any) => {
    setSelectedItem(index);
  };

  return (
    <>
      <section id="equipment">
        <span className="circle">
          <AweWeapon />
          <MainWeapon
            setMainWeaponData={setMainWeaponData}
            mainWeaponDara={mainWeaponDara}
            HowMenyTimeBoughtWeapon={HowMenyTimeBoughtWeapon}
            setsavedDMG={setsavedDMG}
            savedDMG={savedDMG}
            UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
            UpgradedDmgMainWeapon={UpgradedDmgMainWeapon}
            handleItemSelect={handleItemSelect}
          />
          <SubWeapon />
          <Armor />
          <Helmet />
          <Shoes />
          <Gloves />
        </span>
      </section>
      <section id="Statistic">
        <Statistic
          savedDMG={savedDMG}
          mainWeaponDara={mainWeaponDara}
          selectedItem={selectedItem}
        />
      </section>
    </>
  );
};

export default Eq;
