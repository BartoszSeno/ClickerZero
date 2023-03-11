import { useState } from "react";
import LoopItemForEnchant from "./LoopItemsForEnchant";

const PutItemHere = ({
  mainWeaponData,
  savedItemUpgrade,
  UpgradedNamesMainWeapon,
  setSelectedItemIndex,
  setUpgradedDmgMainWeapon,
  savedImage,
  savedName,
  itsMainWeapon,
  setitsMainWeapon,
  ArmorData,
  savedArmorItemUpgrade,
  UpgradedNamesArmor,
  savedArmorImage,
  savedArmorName,
  setSelectedArmorItemIndex,
  setUpgradedDefArmor,
  setitsArmor,
  itsArmor,
  HelmetData,
  savedHelmetItemUpgrade,
  UpgradedNamesHelmet,
  savedHelmetImage,
  savedHelmetName,
  setSelectedHelmetItemIndex,
  setUpgradedDefHelmet,
  itsHelmet,
  setitsHelmet,
}: {
  mainWeaponData: any;
  savedItemUpgrade: any;
  UpgradedNamesMainWeapon: any;
  setSelectedItemIndex: any;
  setUpgradedDmgMainWeapon: any;
  savedImage: any;
  savedName: any;
  itsMainWeapon: any;
  setitsMainWeapon: any;
  ArmorData: any;
  savedArmorItemUpgrade: any;
  UpgradedNamesArmor: any;
  savedArmorImage: any;
  savedArmorName: any;
  setSelectedArmorItemIndex: any;
  setUpgradedDefArmor: any;
  setitsArmor: any;
  itsArmor: any;
  HelmetData: any;
  savedHelmetItemUpgrade: any;
  UpgradedNamesHelmet: any;
  savedHelmetImage: any;
  savedHelmetName: any;
  setSelectedHelmetItemIndex: any;
  setUpgradedDefHelmet: any;
  itsHelmet: any;
  setitsHelmet: any;
}) => {
  // open and close menu
  const [OpenAndClose, setOpenAndClose] = useState<boolean>(false);
  function OpenClose() {
    setOpenAndClose(!OpenAndClose);
  }
  return (
    <>
      <div
        className="putItemThere"
        onClick={() => {
          OpenClose();
        }}
      >
        <img
          className="mainWeaponImg"
          src={
            itsMainWeapon
              ? savedImage
              : itsArmor
              ? savedArmorImage
              : itsHelmet
              ? savedHelmetImage
              : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
          }
          alt={`${
            itsMainWeapon
              ? savedName
              : itsArmor
              ? savedArmorName
              : itsHelmet
              ? savedHelmetName
              : "No name weapon"
          }`}
        />
        <div
          id="EnchantMenuChouseWeapon"
          className={OpenAndClose ? "open" : "close"}
        >
          <LoopItemForEnchant
            mainWeaponData={mainWeaponData}
            savedItemUpgrade={savedItemUpgrade}
            UpgradedNamesMainWeapon={UpgradedNamesMainWeapon}
            setSelectedItemIndex={setSelectedItemIndex}
            setUpgradedDmgMainWeapon={setUpgradedDmgMainWeapon}
            ArmorData={ArmorData}
            savedArmorItemUpgrade={savedArmorItemUpgrade}
            UpgradedNamesArmor={UpgradedNamesArmor}
            setSelectedArmorItemIndex={setSelectedArmorItemIndex}
            setUpgradedDefArmor={setUpgradedDefArmor}
            setitsMainWeapon={setitsMainWeapon}
            setitsArmor={setitsArmor}
            HelmetData={HelmetData}
            savedHelmetItemUpgrade={savedHelmetItemUpgrade}
            UpgradedNamesHelmet={UpgradedNamesHelmet}
            setSelectedHelmetItemIndex={setSelectedHelmetItemIndex}
            setUpgradedDefHelmet={setUpgradedDefHelmet}
            setitsHelmet={setitsHelmet}
          />
        </div>
      </div>
    </>
  );
};

export default PutItemHere;
