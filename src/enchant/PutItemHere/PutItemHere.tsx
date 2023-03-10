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
}: {
  mainWeaponData: any;
  savedItemUpgrade: any;
  UpgradedNamesMainWeapon: any;
  setSelectedItemIndex: any;
  setUpgradedDmgMainWeapon: any;
  savedImage: any;
  savedName: any;
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
            savedImage
              ? savedImage
              : "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/images/default.png"
          }
          alt={`${savedName || "No name"} weapon`}
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
          />
        </div>
      </div>
    </>
  );
};

export default PutItemHere;
