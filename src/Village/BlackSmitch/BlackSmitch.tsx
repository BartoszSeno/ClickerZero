import { useState } from "react";
import Enchant from "../../enchant";
import "../../assets/css/Normal/enchant/enchant.css";

const BlackSmith = ({
  BSO,
  setWSO,
  setBSO,
  setASO,
  setMO,
  //enchant
  mainWeaponData,
  setUpgradedNamesMainWeapon,
  UpgradedNamesMainWeapon,
  setUpgradedDmgMainWeapon,
  UpgradedDmgMainWeapon,
  UpgradedDefArmor,
  setUpgradedDefArmor,
  ArmorData,
  setUpgradedNamesArmor,
  UpgradedNamesArmor,
  HelmetData,
  UpgradedNamesHelmet,
  setUpgradedNamesHelmet,
  setUpgradedDefHelmet,
  UpgradedDefHelmet,
  ShoesData,
  UpgradedNamesShoes,
  setUpgradedNamesShoes,
  setUpgradedDefShoes,
  UpgradedDefShoes,

  GlovesData,
  UpgradedNamesGloves,
  setUpgradedNamesGloves,
  setUpgradedDefGloves,
  UpgradedDefGloves,

  ShieldAndDaggerData,
  UpgradedNamesShieldAndDagger,
  setUpgradedNamesShieldAndDagger,
  setUpgradedDefShieldAndDagger,
  UpgradedDefShieldAndDagger,
  setUpgradedDmgShieldAndDagger,
  UpgradedDmgShieldAndDagger,

  setOpenAndCloseEqinEnchant,
  OpenAndCloseEqinEnchant,
  OpenCloseEqinEnchant,
  //loop
  savedItemUpgrade,
  setSelectedItemIndex,
  savedArmorItemUpgrade,
  setSelectedArmorItemIndex,
  setitsMainWeapon,
  setitsArmor,
  savedHelmetItemUpgrade,
  setSelectedHelmetItemIndex,
  setitsHelmet,
  savedShoesItemUpgrade,
  setSelectedShoesItemIndex,
  setitsShoes,
  savedGlovesItemUpgrade,
  setSelectedGlovesItemIndex,
  setitsGloves,
  savedShieldAndDaggerItemUpgrade,
  setSelectedShieldAndDaggerItemIndex,
  setitsShieldAndDagger,
  //2
  itsMainWeapon,
  selectedArmorItemIndex,
  itsArmor,
  itsHelmet,
  selectedHelmetItemIndex,
  itsShoes,
  selectedShoesItemIndex,
  itsGloves,
  selectedGlovesItemIndex,
  itsShieldAndDagger,
  selectedShieldAndDaggerItemIndex,
  savedImage,
  savedName,
  savedArmorImage,
  savedArmorName,
  savedHelmetImage,
  savedHelmetName,
  savedGlovesImage,
  savedGlovesName,
  savedShieldAndDaggerImage,
  savedShieldAndDaggerName,
  upgradedValue,
  ArmorupgradedValue,
  HelmetupgradedValue,
  ShoesupgradedValue,
  GlovesupgradedValue,
  ShieldAndDaggerupgradedValue,
  selectedItemIndex,
  savedShoesImage,
  savedShoesName,
}: {
  BSO: boolean;
  setWSO: any;
  setBSO: any;
  setASO: any;
  setMO: any;
  //enchant
  mainWeaponData: any;
  setUpgradedNamesMainWeapon: any;
  UpgradedNamesMainWeapon: any;
  setUpgradedDmgMainWeapon: any;
  UpgradedDmgMainWeapon: any;
  UpgradedDefArmor: any;
  setUpgradedDefArmor: any;
  ArmorData: any;
  setUpgradedNamesArmor: any;
  UpgradedNamesArmor: any;
  HelmetData: any;
  UpgradedNamesHelmet: any;
  setUpgradedNamesHelmet: any;
  setUpgradedDefHelmet: any;
  UpgradedDefHelmet: any;
  ShoesData: any;
  UpgradedNamesShoes: any;
  setUpgradedNamesShoes: any;
  setUpgradedDefShoes: any;
  UpgradedDefShoes: any;
  GlovesData: any;
  UpgradedNamesGloves: any;
  setUpgradedNamesGloves: any;
  setUpgradedDefGloves: any;
  UpgradedDefGloves: any;

  ShieldAndDaggerData: any;
  UpgradedNamesShieldAndDagger: any;
  setUpgradedNamesShieldAndDagger: any;
  setUpgradedDefShieldAndDagger: any;
  UpgradedDefShieldAndDagger: any;
  setUpgradedDmgShieldAndDagger: any;
  UpgradedDmgShieldAndDagger: any;

  setOpenAndCloseEqinEnchant: any;
  OpenAndCloseEqinEnchant: any;
  OpenCloseEqinEnchant: any;
  //loop
  savedItemUpgrade: any;
  setSelectedItemIndex: any;
  savedArmorItemUpgrade: any;
  setSelectedArmorItemIndex: any;
  setitsMainWeapon: any;
  setitsArmor: any;
  savedHelmetItemUpgrade: any;
  setSelectedHelmetItemIndex: any;
  setitsHelmet: any;
  savedShoesItemUpgrade: any;
  setSelectedShoesItemIndex: any;
  setitsShoes: any;
  savedGlovesItemUpgrade: any;
  setSelectedGlovesItemIndex: any;
  setitsGloves: any;
  savedShieldAndDaggerItemUpgrade: any;
  setSelectedShieldAndDaggerItemIndex: any;
  setitsShieldAndDagger: any;
  //2
  itsMainWeapon: any;
  selectedArmorItemIndex: any;
  itsArmor: any;
  itsHelmet: any;
  selectedHelmetItemIndex: any;
  itsShoes: any;
  selectedShoesItemIndex: any;
  itsGloves: any;
  selectedGlovesItemIndex: any;
  itsShieldAndDagger: any;
  selectedShieldAndDaggerItemIndex: any;
  savedImage: any;
  savedName: any;
  savedArmorImage: any;
  savedArmorName: any;
  savedHelmetImage: any;
  savedHelmetName: any;
  savedGlovesImage: any;
  savedGlovesName: any;
  savedShieldAndDaggerImage: any;
  savedShieldAndDaggerName: any;
  upgradedValue: any;
  ArmorupgradedValue: any;
  HelmetupgradedValue: any;
  ShoesupgradedValue: any;
  GlovesupgradedValue: any;
  ShieldAndDaggerupgradedValue: any;
  selectedItemIndex: any;
  savedShoesImage: any;
  savedShoesName: any;
}) => {
  const [BlackSmitchIsOpen, setBlackSmitchIsOpen] = useState(true);

  function colseAll() {
    setWSO(false);
    setBSO(false);
    setASO(false);
    setMO(false);
  }
  return (
    <>
      <div
        className="MainBlackSmith"
        style={{ display: BSO ? "flex" : "none" }}
        onClick={(e) => {
          e.stopPropagation();
          colseAll();
          setOpenAndCloseEqinEnchant(false);
        }}
      >
        <div
          className="BSEnchant"
          style={{ display: BlackSmitchIsOpen ? "flex" : "none" }}
          onClick={(e) => {
            e.stopPropagation();
            setBlackSmitchIsOpen(true);
          }}
        >
          <Enchant
            UpgradedDmgMainWeapon={UpgradedDmgMainWeapon}
            setUpgradedDmgMainWeapon={setUpgradedDmgMainWeapon}
            mainWeaponData={mainWeaponData}
            setUpgradedNamesMainWeapon={setUpgradedNamesMainWeapon}
            UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
            UpgradedDefArmor={UpgradedDefArmor}
            setUpgradedDefArmor={setUpgradedDefArmor}
            ArmorData={ArmorData}
            setUpgradedNamesArmor={setUpgradedNamesArmor}
            UpgradedNamesArmor={UpgradedNamesArmor}
            HelmetData={HelmetData}
            UpgradedNamesHelmet={UpgradedNamesHelmet}
            setUpgradedNamesHelmet={setUpgradedNamesHelmet}
            setUpgradedDefHelmet={setUpgradedDefHelmet}
            UpgradedDefHelmet={UpgradedDefHelmet}
            ShoesData={ShoesData}
            UpgradedNamesShoes={UpgradedNamesShoes}
            setUpgradedNamesShoes={setUpgradedNamesShoes}
            setUpgradedDefShoes={setUpgradedDefShoes}
            UpgradedDefShoes={UpgradedDefShoes}
            GlovesData={GlovesData}
            UpgradedNamesGloves={UpgradedNamesGloves}
            setUpgradedNamesGloves={setUpgradedNamesGloves}
            setUpgradedDefGloves={setUpgradedDefGloves}
            UpgradedDefGloves={UpgradedDefGloves}
            ShieldAndDaggerData={ShieldAndDaggerData}
            UpgradedNamesShieldAndDagger={UpgradedNamesShieldAndDagger}
            setUpgradedDefShieldAndDagger={setUpgradedDefShieldAndDagger}
            UpgradedDefShieldAndDagger={UpgradedDefShieldAndDagger}
            setUpgradedNamesShieldAndDagger={setUpgradedNamesShieldAndDagger}
            setUpgradedDmgShieldAndDagger={setUpgradedDmgShieldAndDagger}
            UpgradedDmgShieldAndDagger={UpgradedDmgShieldAndDagger}
            OpenCloseEqinEnchant={OpenCloseEqinEnchant}
            itsMainWeapon={itsMainWeapon}
            selectedArmorItemIndex={selectedArmorItemIndex}
            itsArmor={itsArmor}
            itsHelmet={itsHelmet}
            selectedHelmetItemIndex={selectedHelmetItemIndex}
            itsShoes={itsShoes}
            selectedShoesItemIndex={selectedShoesItemIndex}
            itsGloves={itsGloves}
            selectedGlovesItemIndex={selectedGlovesItemIndex}
            itsShieldAndDagger={itsShieldAndDagger}
            selectedShieldAndDaggerItemIndex={selectedShieldAndDaggerItemIndex}
            savedImage={savedImage}
            savedName={savedName}
            savedArmorImage={savedArmorImage}
            savedArmorName={savedArmorName}
            savedHelmetImage={savedHelmetImage}
            savedHelmetName={savedHelmetName}
            savedGlovesImage={savedGlovesImage}
            savedShieldAndDaggerImage={savedShieldAndDaggerImage}
            upgradedValue={upgradedValue}
            selectedItemIndex={selectedItemIndex}
            savedShoesImage={savedShoesImage}
          />
        </div>
      </div>
    </>
  );
};

export default BlackSmith;
