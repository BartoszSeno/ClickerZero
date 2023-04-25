import "../../assets/css/Normal/Update/UpgradeCharacter.css";

const UpgradeCharacter = ({
  UpgradeCharacters,
  setUpgradeCharacters,
}: {
  UpgradeCharacters: any;
  setUpgradeCharacters: any;
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
      </div>
    </>
  );
};

export default UpgradeCharacter;
