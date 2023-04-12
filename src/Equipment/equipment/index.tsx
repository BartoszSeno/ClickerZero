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
}) {
  return (
    <>
      <div className="weaponContainer">
        <EquipWeapon
          mainWeaponData={mainWeaponData}
          setMainWeaponData={setMainWeaponData}
        />
        <EquipSubWeapon
          ShieldAndDaggerData={ShieldAndDaggerData}
          setShieldAndDaggerData={setShieldAndDaggerData}
        />
      </div>
      <div className="ArmorContainer">
        <EquipHelmet HelmetData={HelmetData} setHelmetData={setHelmetData} />
        <EquipArmor ArmorData={ArmorData} setArmorData={setArmorData} />
        <EquipGloves GlovesData={GlovesData} setGlovesData={setGlovesData} />
        <EquipShoes ShoesData={ShoesData} setShoesData={setShoesData} />
      </div>
    </>
  );
}

export default EquipContainer;
