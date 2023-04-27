const DefBoost = ({
  savePontsForUpgrade,
  setsavePontsForUpgrade,
  MaxPoint,
  setUpgradeCountDef,
  upgradeCountDef,
}: {
  savePontsForUpgrade: number;
  setsavePontsForUpgrade: any;
  MaxPoint: number;
  setUpgradeCountDef: any;
  upgradeCountDef: number;
}) => {
  function UpgradeDef() {
    if (savePontsForUpgrade === 0) {
    } else {
      setsavePontsForUpgrade(savePontsForUpgrade - 1);
      setUpgradeCountDef(upgradeCountDef + 1);
    }
  }

  function DawngradeDef() {
    if (MaxPoint === savePontsForUpgrade) {
    } else {
      setsavePontsForUpgrade(savePontsForUpgrade + 1);
      setUpgradeCountDef(upgradeCountDef - 1);
    }
  }
  return (
    <div className="row">
      <div onClick={DawngradeDef} className="ClickUpgrade">
        -
      </div>
      <div>
        <p>DEF</p>
        <p>{upgradeCountDef}</p>
      </div>
      <div onClick={UpgradeDef} className="ClickUpgrade">
        +
      </div>
    </div>
  );
};

export default DefBoost;
