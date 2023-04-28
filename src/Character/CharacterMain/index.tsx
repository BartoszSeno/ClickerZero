/* eslint-disable array-callback-return */
import "../../assets/css/Normal/Characters/char.css";
import { CharacterSelectionStart } from "../../data/character/character";
import UpgradeCharacter from "../../Upgrade/UpgradeCharacter";

const CharacterMain = ({
  UpgradeCharacters,
  setUpgradeCharacters,
  setUpgradeVillageAndClicks,
  savePontsForUpgrade,
  setsavePontsForUpgrade,
  setDmgBoost,
  DmgBoost,
  setDefBoosts,
  DefBoosts,
}: {
  UpgradeCharacters: boolean;
  setUpgradeCharacters: any;
  setUpgradeVillageAndClicks: any;
  savePontsForUpgrade: number;
  setsavePontsForUpgrade: any;
  setDmgBoost: any;
  DmgBoost: number;
  setDefBoosts: any;
  DefBoosts: number;
}) => {
  const savedIdCharacter = localStorage.getItem("selectedCharacterID");

  function OpenUpChar() {
    setUpgradeCharacters(!UpgradeCharacters);
    setUpgradeVillageAndClicks(false);
  }

  return (
    <>
      {CharacterSelectionStart.filter(
        (data: any) => data.id === Number(savedIdCharacter)
      ).map((data: any) => (
        <div className="CharMainBox" onClick={OpenUpChar}>
          <div
            className="CharacterImgEq"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize:
                data.name === "Zephyr"
                  ? "160px"
                  : data.name === "Nightfall"
                  ? "150px"
                  : data.name === "Merlin"
                  ? "130px"
                  : data.name === "Luna"
                  ? "100px"
                  : data.name === "Takeshi"
                  ? "100px"
                  : "",
            }}
          ></div>
        </div>
      ))}
      <UpgradeCharacter
        UpgradeCharacters={UpgradeCharacters}
        setUpgradeCharacters={setUpgradeCharacters}
        savePontsForUpgrade={savePontsForUpgrade}
        setsavePontsForUpgrade={setsavePontsForUpgrade}
        setDmgBoost={setDmgBoost}
        DmgBoost={DmgBoost}
        setDefBoosts={setDefBoosts}
        DefBoosts={DefBoosts}
      />
    </>
  );
};

export default CharacterMain;
