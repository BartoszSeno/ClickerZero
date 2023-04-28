const DefBoost = ({
  savePontsForUpgrade,
  setsavePontsForUpgrade,
  MaxPoint,
  setUpgradeCountDef,
  upgradeCountDef,
  setDefBoosts,
  DefBoosts,
}: {
  savePontsForUpgrade: number;
  setsavePontsForUpgrade: any;
  MaxPoint: number;
  setUpgradeCountDef: any;
  upgradeCountDef: number;
  setDefBoosts: any;
  DefBoosts: number;
}) => {
  function UpgradeDef() {
    if (savePontsForUpgrade === 0) {
    } else {
      setsavePontsForUpgrade(savePontsForUpgrade - 1);
      setUpgradeCountDef(upgradeCountDef + 1);
      setDefBoosts(DefBoosts + 0.02);
    }
  }

  function DawngradeDef() {
    if (MaxPoint === savePontsForUpgrade) {
      // Perform the desired operation
    } else if (savePontsForUpgrade > 0 && upgradeCountDef > 0) {
      setDefBoosts(DefBoosts - 0.02);
      setsavePontsForUpgrade(savePontsForUpgrade + 1);
      setUpgradeCountDef(upgradeCountDef - 1);
    } else if (savePontsForUpgrade === 0 && upgradeCountDef > 0) {
      setUpgradeCountDef(upgradeCountDef - 1);
    }
  }

  console.log("def ", DefBoosts);

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
