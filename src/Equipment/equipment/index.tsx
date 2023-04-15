/* eslint-disable array-callback-return */
import EquipWeapon from "./Slots/Weapon";
import EquipSubWeapon from "./Slots/SubWeapon";
import EquipHelmet from "./Slots/Helemt";
import EquipArmor from "./Slots/Armor";
import EquipGloves from "./Slots/Gloves";
import EquipShoes from "./Slots/Shoes";

function EquipContainer({
  mainWeaponData,
  HelmetData,
  ArmorData,
  ShoesData,
  GlovesData,
  ShieldAndDaggerData,
  setGlovesData,
  setMainWeaponData,
  setArmorData,
  setHelmetData,
  setShoesData,
  setShieldAndDaggerData,
  FullInv,
  ce,
}: {
  mainWeaponData: any;
  HelmetData: any;
  ArmorData: any;
  ShoesData: any;
  GlovesData: any;
  ShieldAndDaggerData: any;
  setGlovesData: any;
  setMainWeaponData: any;
  setArmorData: any;
  setHelmetData: any;
  setShoesData: any;
  setShieldAndDaggerData: any;
  FullInv: any;
  ce: any;
}) {
  return (
    <>
      <div
        className="weaponContainer"
        style={{
          display: ce ? "flex" : "none",
        }}
      >
        <EquipWeapon
          mainWeaponData={mainWeaponData}
          setMainWeaponData={setMainWeaponData}
          FullInv={FullInv}
        />
        <EquipSubWeapon
          ShieldAndDaggerData={ShieldAndDaggerData}
          setShieldAndDaggerData={setShieldAndDaggerData}
          FullInv={FullInv}
        />
      </div>
      <div
        className="ArmorContainer"
        style={{
          display: ce ? "flex" : "none",
        }}
      >
        <EquipHelmet
          HelmetData={HelmetData}
          setHelmetData={setHelmetData}
          FullInv={FullInv}
        />
        <EquipArmor
          ArmorData={ArmorData}
          setArmorData={setArmorData}
          FullInv={FullInv}
        />
        <EquipGloves
          GlovesData={GlovesData}
          setGlovesData={setGlovesData}
          FullInv={FullInv}
        />
        <EquipShoes
          ShoesData={ShoesData}
          setShoesData={setShoesData}
          FullInv={FullInv}
        />
      </div>
    </>
  );
}

export default EquipContainer;
