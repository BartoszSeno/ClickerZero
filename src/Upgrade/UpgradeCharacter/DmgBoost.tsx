import { useEffect, useState } from "react";

const DmgBoost = ({
  savePontsForUpgrade,
  setsavePontsForUpgrade,
  MaxPoint,
  setUpgradeCount,
  upgradeCount,
}: {
  savePontsForUpgrade: number;
  setsavePontsForUpgrade: any;
  MaxPoint: number;
  setUpgradeCount: any;
  upgradeCount: number;
}) => {
  function UpgradeDmg() {
    if (savePontsForUpgrade === 0) {
    } else {
      setsavePontsForUpgrade(savePontsForUpgrade - 1);
      setUpgradeCount(upgradeCount + 1);
    }
  }

  function DawngradeDmg() {
    if (MaxPoint === savePontsForUpgrade) {
    } else {
      setsavePontsForUpgrade(savePontsForUpgrade + 1);
      setUpgradeCount(upgradeCount - 1);
    }
  }

  return (
    <div className="row">
      <div onClick={DawngradeDmg}>-</div>
      <div>DMG {upgradeCount}</div>
      <div onClick={UpgradeDmg}>+</div>
    </div>
  );
};

export default DmgBoost;
