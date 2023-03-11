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
  ArmorData,
  savedArmorItemUpgrade,
  UpgradedNamesArmor,
  savedArmorImage,
  savedArmorName,
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
  savedImage: any;
  savedName: any;

  ArmorData: any;
  savedArmorItemUpgrade: any;
  UpgradedNamesArmor: any;
  savedArmorImage: any;
  savedArmorName: any;
  setSelectedArmorItemIndex: any;
  setUpgradedDefArmor: any;
  setitsMainWeapon: any;
  setitsArmor: any;
  itsMainWeapon: any;
  itsArmor: any;
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
              : savedArmorImage
              ? itsMainWeapon
                ? savedImage
                : savedArmorImage
              : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
          }
          alt={`${
            itsMainWeapon ? savedName : savedArmorName || "No name"
          } weapon`}
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
            itsMainWeapon={itsMainWeapon}
            itsArmor={itsArmor}
          />
        </div>
      </div>
    </>
  );
};

export default PutItemHere;
