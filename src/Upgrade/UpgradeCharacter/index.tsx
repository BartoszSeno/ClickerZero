import "../../assets/css/Normal/Update/UpgradeCharacter.css";
import DmgBoost from "./DmgBoost";
import DefBoost from "./DefBoost";
import Points from "./Points";
import { useEffect, useState } from "react";

const UpgradeCharacter = ({
  UpgradeCharacters,
  setUpgradeCharacters,
  savePontsForUpgrade,
  setsavePontsForUpgrade,
}: {
  UpgradeCharacters: any;
  setUpgradeCharacters: any;
  savePontsForUpgrade: number;
  setsavePontsForUpgrade: any;
}) => {
  function CloseUpChar() {
    setUpgradeCharacters(false);
  }
  const MaxPoint = Number(localStorage.getItem("fillCount"));
  const [upgradeCount, setUpgradeCount] = useState<number>(
    Number(localStorage.getItem("upgradeCount")) || 0
  );
  const [upgradeCountDef, setUpgradeCountDef] = useState<number>(
    Number(localStorage.getItem("upgradeCountDef")) || 0
  );

  const MainCount = MaxPoint - upgradeCount - upgradeCountDef;

  setsavePontsForUpgrade(MainCount);

  useEffect(() => {
    localStorage.setItem("savePontsForUpgrade", savePontsForUpgrade.toString());
    localStorage.setItem("upgradeCount", upgradeCount.toString());
    localStorage.setItem("upgradeCountDef", upgradeCountDef.toString());
  }, [savePontsForUpgrade, upgradeCount, upgradeCountDef]);

  return (
    <>
      <div
        id="CharacterUpgrade"
        style={{ display: UpgradeCharacters ? "flex" : "none" }}
      >
        <div className="ChrUpg">Character Upgrade</div>
        <div className="CloseUC" onClick={CloseUpChar}></div>
        <div className="MainUpgradeBox">
          <Points savePontsForUpgrade={savePontsForUpgrade} />
          <DmgBoost
            setsavePontsForUpgrade={setsavePontsForUpgrade}
            savePontsForUpgrade={savePontsForUpgrade}
            MaxPoint={MaxPoint}
            setUpgradeCount={setUpgradeCount}
            upgradeCount={upgradeCount}
          />
          <DefBoost
            setsavePontsForUpgrade={setsavePontsForUpgrade}
            savePontsForUpgrade={savePontsForUpgrade}
            MaxPoint={MaxPoint}
            setUpgradeCountDef={setUpgradeCountDef}
            upgradeCountDef={upgradeCountDef}
          />
        </div>
      </div>
    </>
  );
};

export default UpgradeCharacter;
