import "../../assets/css/Normal/Update/UpVillAndClick.css";

const UpgradeVillageAndClick = ({
  UpgradeVillageAndClicks,
  setUpgradeVillageAndClicks,
}: {
  UpgradeVillageAndClicks: any;
  setUpgradeVillageAndClicks: any;
}) => {
  function CloseUpgradeVillage() {
    setUpgradeVillageAndClicks(false);
  }

  return (
    <>
      <div
        id="CharacterUpgrade"
        style={{ display: UpgradeVillageAndClicks ? "flex" : "none" }}
      >
        <div className="ChrUpg">Village Upgrade</div>
        <div className="CloseUC" onClick={CloseUpgradeVillage}></div>
      </div>
    </>
  );
};

export default UpgradeVillageAndClick;
