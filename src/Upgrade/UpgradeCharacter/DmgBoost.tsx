const DmgBoostt = ({
  savePontsForUpgrade,
  setsavePontsForUpgrade,
  MaxPoint,
  setUpgradeCount,
  upgradeCount,
  setDmgBoost,
  DmgBoost,
}: {
  savePontsForUpgrade: number;
  setsavePontsForUpgrade: any;
  MaxPoint: number;
  setUpgradeCount: any;
  upgradeCount: number;
  setDmgBoost: any;
  DmgBoost: number;
}) => {
  function UpgradeDmg() {
    if (savePontsForUpgrade === 0) {
    } else {
      setsavePontsForUpgrade(savePontsForUpgrade - 1);
      setUpgradeCount(upgradeCount + 1);
      setDmgBoost(DmgBoost + 0.02);
    }
  }

  function DawngradeDmg() {
    if (MaxPoint === savePontsForUpgrade) {
      // Perform the desired operation
    } else if (savePontsForUpgrade > 0 && upgradeCount > 0) {
      setDmgBoost(DmgBoost - 0.02);
      setsavePontsForUpgrade(savePontsForUpgrade + 1);
      setUpgradeCount(upgradeCount - 1);
    } else if (savePontsForUpgrade === 0 && upgradeCount > 0) {
      setUpgradeCount(upgradeCount - 1);
    }
  }

  return (
    <div className="row">
      <div onClick={DawngradeDmg} className="ClickUpgrade">
        -
      </div>
      <div>
        <p>DMG</p>
        <p>{upgradeCount}</p>
      </div>
      <div onClick={UpgradeDmg} className="ClickUpgrade">
        +
      </div>
    </div>
  );
};

export default DmgBoostt;
