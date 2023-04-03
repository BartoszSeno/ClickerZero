/* eslint-disable array-callback-return */
import EquipWeapon from "./Slots/Weapon";
import EquipSubWeapon from "./Slots/SubWeapon";
import EquipHelmet from "./Slots/Helemt";
import EquipArmor from "./Slots/Armor";
import EquipGloves from "./Slots/Gloves";
import EquipShoes from "./Slots/Shoes";

function EquipContainer() {
  return (
    <>
      <div className="weaponContainer">
        <EquipWeapon />
        <EquipSubWeapon />
      </div>
      <div className="ArmorContainer">
        <EquipHelmet />
        <EquipArmor />
        <EquipGloves />
        <EquipShoes />
      </div>
    </>
  );
}

export default EquipContainer;
