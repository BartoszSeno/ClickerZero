import "../assets/css/Normal/Equipment/equipment.css";
import Gloves from "./Gloves/gloves";
import Statistic from "./statistic/statistic";
import { useState } from "react";

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
  const [whichIsOpen, setwhichIsOpen] = useState("MainWeapon");

  const handleItemClick = (component: any) => {
    setwhichIsOpen(component);
  };
  return (
    <>
      <section id="equipment">
        <div className="DmgItems"></div>
        <div className="DefItems">
          <Gloves
            GlovesData={GlovesData}
            UpgradedNamesGloves={UpgradedNamesGloves}
            handleGlovesItemSelect={handleGlovesItemSelect}
            isActive={whichIsOpen === "Gloves"}
            handleItemClick={() => handleItemClick("Gloves")}
          />
        </div>
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
