import "../assets/css/Normal/Equipment/equipment.css";
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
  return (
    <>
      <section id="equipment">
        <div className="DmgItems"></div>
        <div className="DefItems"></div>
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
