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
          />
        </div>
      </div>
    </>
  );
};

export default BlackSmith;
