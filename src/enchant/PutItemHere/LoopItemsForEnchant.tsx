import MainWeaponLoopEnchant from "./LoopItems/MainWeapon";
import ArmorLoopEnchant from "./LoopItems/Armor";
import HelmetLoopEnchant from "./LoopItems/Helmet";
import ShoesLoopEnchant from "./LoopItems/Shoes";
import GlovesLoopEnchant from "./LoopItems/Gloves";
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
  HelmetData,
  savedHelmetItemUpgrade,
  UpgradedNamesHelmet,
  setSelectedHelmetItemIndex,
  setUpgradedDefHelmet,
  setitsHelmet,
  ShoesData,
  savedShoesItemUpgrade,
  UpgradedNamesShoes,
  setSelectedShoesItemIndex,
  setUpgradedDefShoes,
  setitsShoes,
  GlovesData,
  savedGlovesItemUpgrade,
  UpgradedNamesGloves,
  setSelectedGlovesItemIndex,
  setUpgradedDefGloves,
  setitsGloves,
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
  HelmetData: any;
  savedHelmetItemUpgrade: any;
  UpgradedNamesHelmet: any;
  setSelectedHelmetItemIndex: any;
  setUpgradedDefHelmet: any;
  setitsHelmet: any;
  ShoesData: any;
  savedShoesItemUpgrade: any;
  UpgradedNamesShoes: any;
  setSelectedShoesItemIndex: any;
  setUpgradedDefShoes: any;
  setitsShoes: any;
  GlovesData: any;
  savedGlovesItemUpgrade: any;
  UpgradedNamesGloves: any;
  setSelectedGlovesItemIndex: any;
  setUpgradedDefGloves: any;
  setitsGloves: any;
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
        setitsHelmet(false);
        setitsShoes(false);
        setitsGloves(false);
      } else if (itemArray === ArmorData) {
        setitsArmor(true);
        setitsMainWeapon(false);
        setitsHelmet(false);
        setitsShoes(false);
        setitsGloves(false);
      } else if (itemArray === HelmetData) {
        setitsHelmet(true);
        setitsArmor(false);
        setitsMainWeapon(false);
        setitsShoes(false);
        setitsGloves(false);
      } else if (itemArray === ShoesData) {
        setitsShoes(true);
        setitsArmor(false);
        setitsMainWeapon(false);
        setitsHelmet(false);
        setitsGloves(false);
      } else if (itemArray === GlovesData) {
        setitsGloves(true);
        setitsArmor(false);
        setitsMainWeapon(false);
        setitsHelmet(false);
        setitsShoes(false);
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
      <HelmetLoopEnchant
        HelmetData={HelmetData}
        savedHelmetItemUpgrade={savedHelmetItemUpgrade}
        UpgradedNamesHelmet={UpgradedNamesHelmet}
        setSelectedHelmetItemIndex={setSelectedHelmetItemIndex}
        setUpgradedDefHelmet={setUpgradedDefHelmet}
        HandleItemClick={HandleItemClick}
      />
      <ShoesLoopEnchant
        ShoesData={ShoesData}
        savedShoesItemUpgrade={savedShoesItemUpgrade}
        UpgradedNamesShoes={UpgradedNamesShoes}
        setSelectedShoesItemIndex={setSelectedShoesItemIndex}
        setUpgradedDefShoes={setUpgradedDefShoes}
        HandleItemClick={HandleItemClick}
      />
      <GlovesLoopEnchant
        GlovesData={GlovesData}
        savedGlovesItemUpgrade={savedGlovesItemUpgrade}
        UpgradedNamesGloves={UpgradedNamesGloves}
        setSelectedGlovesItemIndex={setSelectedGlovesItemIndex}
        setUpgradedDefGloves={setUpgradedDefGloves}
        HandleItemClick={HandleItemClick}
      />
    </>
  );
};

export default LoopItemForEnchant;
