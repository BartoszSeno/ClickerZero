import "./App.css";
import Clicker from "./hook/ClickerCount";
import ClearLocalStorageButton from "./hook/RemoveLS";
import { useEffect, useState } from "react";
import Eq from "./Eq";
import UpdateLvlOne from "./Upgrade/UpgradeLvlOne";

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

  // for adding the total number per click
  const FullCountPerClick = UpgradeOne;

  return (
    <>
      <main id="App-container">
        <div className="App">
          <Clicker
            setCount={setCount}
            count={count}
            lvlOne={lvlOne}
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
            Per Click: {FullCountPerClick.toFixed(1)}
          </div>
        </div>
        <div className="right-container">
          <Eq />
        </div>
      </main>
    </>
  );
}

export default App;
