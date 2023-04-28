import "../../assets/css/Normal/Update/UpgradeCharacter.css";
import DmgBoostt from "./DmgBoost";
import DefBoost from "./DefBoost";
import Points from "./Points";
import { useEffect, useState } from "react";

const UpgradeCharacter = ({
  UpgradeCharacters,
  setUpgradeCharacters,
  savePontsForUpgrade,
  setsavePontsForUpgrade,
  setDmgBoost,
  DmgBoost,
  setDefBoosts,
  DefBoosts,
}: {
  UpgradeCharacters: any;
  setUpgradeCharacters: any;
  savePontsForUpgrade: number;
  setsavePontsForUpgrade: any;
  setDmgBoost: any;
  DmgBoost: number;
  setDefBoosts: any;
  DefBoosts: number;
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
    localStorage.setItem("DmgBoost", DmgBoost.toString());
    localStorage.setItem("savePontsForUpgrade", savePontsForUpgrade.toString());
    localStorage.setItem("upgradeCount", upgradeCount.toString());
    localStorage.setItem("upgradeCountDef", upgradeCountDef.toString());
  }, [savePontsForUpgrade, upgradeCount, upgradeCountDef, DmgBoost]);

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
          <DmgBoostt
            setsavePontsForUpgrade={setsavePontsForUpgrade}
            savePontsForUpgrade={savePontsForUpgrade}
            MaxPoint={MaxPoint}
            setUpgradeCount={setUpgradeCount}
            upgradeCount={upgradeCount}
            setDmgBoost={setDmgBoost}
            DmgBoost={DmgBoost}
          />
          <DefBoost
            setsavePontsForUpgrade={setsavePontsForUpgrade}
            savePontsForUpgrade={savePontsForUpgrade}
            MaxPoint={MaxPoint}
            setUpgradeCountDef={setUpgradeCountDef}
            upgradeCountDef={upgradeCountDef}
            setDefBoosts={setDefBoosts}
            DefBoosts={DefBoosts}
          />
        </div>
      </div>
    </>
  );
};

export default UpgradeCharacter;
