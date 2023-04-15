import React, { useEffect, useState } from "react";
import { formatNumber } from "../../../../hook/FormatNumber";
import DemageDagger from "./items/dagger";
import DemageMainWeapon from "./items/weapon";

function DmgStatistic({
  mainWeaponData,
  selectedItem,
  ShieldAndDaggerData,
  selectedShieldAndDaggerItem,
}: {
  mainWeaponData: any;
  selectedItem: any;
  ShieldAndDaggerData: any;
  selectedShieldAndDaggerItem: any;
}) {
  const [fullDmg, setFullDmg] = useState(0); // State for FullDmg value

  useEffect(() => {
    // Update FullDmg value whenever mainWeaponData, selectedItem, ShieldAndDaggerData, or selectedShieldAndDaggerItem changes
    const textMainWeapon = document.querySelector(
      ".statsDmgMainWeaponHiden"
    ) as HTMLElement;
    const textDagger = document.querySelector(
      ".statsDmgDaggerHiden"
    ) as HTMLElement;
    const updatedFullDmg =
      Number(textMainWeapon?.textContent || 0) +
      Number(textDagger?.textContent || 0);
    setFullDmg(updatedFullDmg);
  }, [
    mainWeaponData,
    selectedItem,
    ShieldAndDaggerData,
    selectedShieldAndDaggerItem,
  ]);

  return (
    <>
      <span>Weapon Dmg</span>
      <DemageMainWeapon
        mainWeaponData={mainWeaponData}
        selectedItem={selectedItem}
      />
      <span>Dagger Dmg</span>
      <DemageDagger
        ShieldAndDaggerData={ShieldAndDaggerData}
        selectedShieldAndDaggerItem={selectedShieldAndDaggerItem}
      />
      <span className="fullStats">Full dmg</span>
      <span className="statsFullDmg">{fullDmg}</span>
    </>
  );
}

export default DmgStatistic;
