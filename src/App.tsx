import "./App.css";
import Clicker from "./hook/ClickerCount";
import ClearLocalStorageButton from "./hook/RemoveLS";
import { useEffect, useState } from "react";
import Eq from "./Eq";
import UpdateLvlOne from "./Upgrade/UpgradeLvlOne";
import LeftNav from "./assets/LeftNav";
import Shop from "./Shop";
import { MainWeaponImageAndNameAndCost } from "./data/equipment/mainWeapon";

function App() {
  //main count
  const [count, setCount] = useState(() =>
    Number(localStorage.getItem("count") || 0)
  );

  // writing out what lvl has the first upgrade
  const [lvlOne, setLvlOne] = useState(() =>
    Number(localStorage.getItem("upgradeOneLvl") || 0)
  );
  //the amount you get after leveling up the first upgrades
  const [UpgradeOne, setUpgradeOne] = useState(() =>
    Number(localStorage.getItem("UpgradeOneCount") || 0)
  );

  //from saved localstorage
  const savedDmg = localStorage.getItem("selectedItemDmg");

  // for adding the total number per click
  const [FullCountPerClick, setFullCountPerClick] = useState(
    UpgradeOne + Number(savedDmg || 0)
  );

  useEffect(() => {
    setFullCountPerClick(UpgradeOne + Number(savedDmg || 0));
  }, [UpgradeOne, savedDmg]);

  //Shop
  const [mainWeaponDara, setMainWeaponData] = useState(
    JSON.parse(
      localStorage.getItem("MainWeaponImageAndNameAndCost") ||
        JSON.stringify(MainWeaponImageAndNameAndCost)
    )
  );

  //count weapon time

  const [HowMenyTimeBoughtWeapon, setHowMenyTimeBoughtWeapon] = useState(0);

  return (
    <>
      <main id="App-container">
        <div className="left-container">
          <LeftNav />
          <Shop
            setMainWeaponData={setMainWeaponData}
            mainWeaponDara={mainWeaponDara}
            count={count}
            setCount={setCount}
            setHowMenyTimeBoughtWeapon={setHowMenyTimeBoughtWeapon}
          />
        </div>
        <div className="App">
          <Clicker
            setCount={setCount}
            count={count}
            FullCountPerClick={FullCountPerClick}
          />
          <ClearLocalStorageButton />
          <UpdateLvlOne
            setCount={setCount}
            count={count}
            lvlOne={lvlOne}
            setLvlOne={setLvlOne}
            UpgradeOne={UpgradeOne}
            setUpgradeOne={setUpgradeOne}
          />
          <div className="test count per click">
            Per Click: {FullCountPerClick.toFixed(0)}
          </div>
        </div>
        <div className="right-container">
          <Eq
            setMainWeaponData={setMainWeaponData}
            mainWeaponDara={mainWeaponDara}
            HowMenyTimeBoughtWeapon={HowMenyTimeBoughtWeapon}
          />
        </div>
      </main>
    </>
  );
}

export default App;
