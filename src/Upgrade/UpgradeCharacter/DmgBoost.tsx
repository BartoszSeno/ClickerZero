import { useEffect, useState } from "react";

const DmgBoost = ({
  savePontsForUpgrade,
  setsavePontsForUpgrade,
}: {
  savePontsForUpgrade: number;
  setsavePontsForUpgrade: any;
}) => {
  const MaxPoint = Number(localStorage.getItem("fillCount"));
  const [upgradeCount, setUpgradeCount] = useState<number>(
    Number(localStorage.getItem("upgradeCount")) || 0
  );

  const MainCount = MaxPoint - upgradeCount;

  console.log("m ", MainCount);

  setsavePontsForUpgrade(MainCount);

  useEffect(() => {
    localStorage.setItem("savePontsForUpgrade", savePontsForUpgrade.toString());
    localStorage.setItem("upgradeCount", upgradeCount.toString());
  }, [savePontsForUpgrade, upgradeCount]);

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
