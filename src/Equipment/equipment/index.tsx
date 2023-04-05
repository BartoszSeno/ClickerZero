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
}: {
  mainWeaponData: any;
  HelmetData: any;
  ArmorData: any;
  ShoesData: any;
  GlovesData: any;
  ShieldAndDaggerData: any;
  setGlovesData: any;
  setMainWeaponData: any;
}) {
  return (
    <>
      <div className="weaponContainer">
        <EquipWeapon
          mainWeaponData={mainWeaponData}
          setMainWeaponData={setMainWeaponData}
        />
        <EquipSubWeapon />
      </div>
      <div className="ArmorContainer">
        <EquipHelmet />
        <EquipArmor />
        <EquipGloves GlovesData={GlovesData} setGlovesData={setGlovesData} />
        <EquipShoes />
      </div>
    </>
  );
}

export default EquipContainer;
