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
        id="VillageUpgrade"
        style={{ display: UpgradeVillageAndClicks ? "flex" : "none" }}
      >
        <div className="VilUpg">Village Upgrade</div>
        <div className="CloseVil" onClick={CloseUpgradeVillage}></div>
      </div>
    </>
  );
};

export default UpgradeVillageAndClick;
