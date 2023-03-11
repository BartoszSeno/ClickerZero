import { MainWeaponImageAndNameAndCost } from "../../data/equipment/mainWeapon";
import { ArmorImageAndNameAndCost } from "../../data/equipment/armor";
import MainWeaponLoopEnchant from "./LoopItems/MainWeapon";
import ArmorLoopEnchant from "./LoopItems/Armor";
/* eslint-disable array-callback-return */
const LoopItemForEnchant = ({
  mainWeaponData,
  savedItemUpgrade,
  UpgradedNamesMainWeapon,
  setSelectedItemIndex,
  setUpgradedDmgMainWeapon,
  ArmorData,
  savedArmorItemUpgrade,
  UpgradedNamesArmor,
  setSelectedArmorItemIndex,
  setUpgradedDefArmor,
  setitsMainWeapon,
  setitsArmor,
  itsMainWeapon,
  itsArmor,
}: {
  mainWeaponData: any;
  savedItemUpgrade: any;
  UpgradedNamesMainWeapon: any;
  setSelectedItemIndex: any;
  setUpgradedDmgMainWeapon: any;
  ArmorData: any;
  savedArmorItemUpgrade: any;
  UpgradedNamesArmor: any;
  setSelectedArmorItemIndex: any;
  setUpgradedDefArmor: any;
  setitsMainWeapon: any;
  setitsArmor: any;
  itsMainWeapon: any;
  itsArmor: any;
}) => {
  // its weapon or armor?
  const HandleItemClick = (itemArray: any[], clickedItemId: string) => {
    const clickedItemIndex = itemArray.findIndex(
      (item) => item.id === Number(clickedItemId)
    );
    if (clickedItemIndex !== -1) {
      if (itemArray === mainWeaponData) {
        setitsMainWeapon(true);
        setitsArmor(false);
      } else if (itemArray === ArmorData) {
        setitsArmor(true);
        setitsMainWeapon(false);
      }
    }
  };

  return (
    <>
      <MainWeaponLoopEnchant
        mainWeaponData={mainWeaponData}
        savedItemUpgrade={savedItemUpgrade}
        UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
        setSelectedItemIndex={setSelectedItemIndex}
        setUpgradedDmgMainWeapon={setUpgradedDmgMainWeapon}
        HandleItemClick={HandleItemClick}
      />
      <ArmorLoopEnchant
        ArmorData={ArmorData}
        savedArmorItemUpgrade={savedArmorItemUpgrade}
        UpgradedNamesArmor={UpgradedNamesArmor}
        setSelectedArmorItemIndex={setSelectedArmorItemIndex}
        setUpgradedDefArmor={setUpgradedDefArmor}
        HandleItemClick={HandleItemClick}
      />
    </>
  );
};

export default LoopItemForEnchant;
