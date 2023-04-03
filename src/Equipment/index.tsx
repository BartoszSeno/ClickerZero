/* eslint-disable @typescript-eslint/no-unused-vars */
import "../assets/css/MainEq/maineq.css";

import { useState } from "react";
import Inventory from "./inventory";
import EquipContainer from "./equipment";
import { MainWeaponImageAndNameAndCost } from "../data/equipment/mainWeapon";
import { HelmetImageAndNameAndCost } from "../data/equipment/helmet";
import { ArmorImageAndNameAndCost } from "../data/equipment/armor";
import { ShoesImageAndNameAndCost } from "../data/equipment/Shoes";
import { GlovesImageAndNameAndCost } from "../data/equipment/gloves";
import { ShieldAndDaggerImageAndNameAndCost } from "../data/equipment/subWeapon";

const MainEq = ({
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
  //MAIN WEAPON
  //===========================================================================
  const [, setSelectedItemIdEquip] = useState(null);

  const [whatIsUse, setwhatIsUse] = useState<string>("");
  // Function that gets called when an item is clicked on
  function GetIdPerClickMW(index: any) {
    const item = MainWeaponImageAndNameAndCost[index];
    setSelectedItemIdEquip(index.id);

    // Save item information in local storage for later use
    localStorage.setItem("selectedItemIdEquip", item.id.toString());
    localStorage.setItem("selectedItemNameEquip", item.name.toString());
    localStorage.setItem("selectedItemImgEquip", item.image.toString());
    localStorage.setItem("selectedItemDmgEquip", item.dmgLvl0.toString());
    localStorage.setItem("selectedItemTierEquip", item.tier.toString());
    setwhatIsUse("weapon");

    setTimeout(() => {
      setSelectedItemIdEquip(null);
    }, 10);
  }

  //HELMET
  //===========================================================================

  function GetIdPerClickH(index: any) {
    const item = HelmetImageAndNameAndCost[index];
    setSelectedItemIdEquip(index.id);

    // Save item information in local storage for later use
    localStorage.setItem("selectedHelmetItemIdEquip", item.id.toString());
    localStorage.setItem("selectedHelmetItemNameEquip", item.name.toString());
    localStorage.setItem("selectedHelmetItemImgEquip", item.image.toString());
    localStorage.setItem("selectedHelmetItemDmgEquip", item.defLvl0.toString());
    localStorage.setItem("selectedHelmetItemTierEquip", item.tier.toString());
    setwhatIsUse("helmet");

    setTimeout(() => {
      setSelectedItemIdEquip(null);
    }, 10);
  }

  //ARMOR
  //===========================================================================
  function GetIdPerClickA(index: any) {
    const item = ArmorImageAndNameAndCost[index];
    setSelectedItemIdEquip(index.id);

    // Save item information in local storage for later use
    localStorage.setItem("selectedArmorItemIdEquip", item.id.toString());
    localStorage.setItem("selectedArmorItemNameEquip", item.name.toString());
    localStorage.setItem("selectedArmorItemImgEquip", item.image.toString());
    localStorage.setItem("selectedArmorItemDmgEquip", item.defLvl0.toString());
    localStorage.setItem("selectedArmorItemTierEquip", item.tier.toString());
    setwhatIsUse("armor");

    setTimeout(() => {
      setSelectedItemIdEquip(null);
    }, 10);
  }

  //SHOES
  //===========================================================================
  function GetIdPerClickS(index: any) {
    const item = ShoesImageAndNameAndCost[index];
    setSelectedItemIdEquip(index.id);

    // Save item information in local storage for later use
    localStorage.setItem("selectedShoesItemIdEquip", item.id.toString());
    localStorage.setItem("selectedShoesItemNameEquip", item.name.toString());
    localStorage.setItem("selectedShoesItemImgEquip", item.image.toString());
    localStorage.setItem("selectedShoesItemDmgEquip", item.defLvl0.toString());
    localStorage.setItem("selectedShoesItemTierEquip", item.tier.toString());
    setwhatIsUse("shoes");

    setTimeout(() => {
      setSelectedItemIdEquip(null);
    }, 10);
  }

  //GLOVES
  //===========================================================================
  function GetIdPerClickG(index: any) {
    const item = GlovesImageAndNameAndCost[index];
    setSelectedItemIdEquip(index.id);

    // Save item information in local storage for later use
    localStorage.setItem("selectedGlovesItemIdEquip", item.id.toString());
    localStorage.setItem("selectedGlovesItemNameEquip", item.name.toString());
    localStorage.setItem("selectedGlovesItemImgEquip", item.image.toString());
    localStorage.setItem("selectedGlovesItemDmgEquip", item.defLvl0.toString());
    localStorage.setItem("selectedGlovesItemTierEquip", item.tier.toString());
    setwhatIsUse("gloves");

    setTimeout(() => {
      setSelectedItemIdEquip(null);
    }, 10);
  }

  //SUB WEAPON
  //===========================================================================
  function GetIdPerClickSW(index: any) {
    const item = ShieldAndDaggerImageAndNameAndCost[index];
    setSelectedItemIdEquip(index.id);

    // Save item information in local storage for later use
    localStorage.setItem(
      "selectedShieldAndDaggerItemIdEquip",
      item.id.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemNameEquip",
      item.name.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemImgEquip",
      item.image.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemDmgEquip",
      item.defLvl0.toString()
    );
    localStorage.setItem(
      "selectedShieldAndDaggerItemTierEquip",
      item.tier.toString()
    );
    console.log("g");
    setwhatIsUse("shield" || "dagger");

    setTimeout(() => {
      setSelectedItemIdEquip(null);
    }, 10);
  }

  //===========================================================================

  return (
    <>
      <div className="MainEqContainer">
        <div id="option-container">
          <Inventory
            props={""}
            mainWeaponData={mainWeaponData}
            GetIdPerClickMW={GetIdPerClickMW}
            HelmetData={HelmetData}
            GetIdPerClickH={GetIdPerClickH}
            ArmorData={ArmorData}
            GetIdPerClickA={GetIdPerClickA}
            ShoesData={ShoesData}
            GetIdPerClickS={GetIdPerClickS}
            GlovesData={GlovesData}
            GetIdPerClickG={GetIdPerClickG}
            ShieldAndDaggerData={ShieldAndDaggerData}
            GetIdPerClickSW={GetIdPerClickSW}
          />
        </div>
        <EquipContainer />
      </div>
    </>
  );
};

export default MainEq;
