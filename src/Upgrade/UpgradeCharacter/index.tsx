import "../../assets/css/Normal/Update/UpgradeCharacter.css";
import DmgBoost from "./DmgBoost";
import DefBoost from "./DefBoost";
import Points from "./Points";

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
          />
          <DefBoost />
        </div>
      </div>
    </>
  );
};

export default UpgradeCharacter;
