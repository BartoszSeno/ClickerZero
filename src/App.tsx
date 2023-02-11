import "./App.css";
import Clicker from "./hook/ClickerCount";
import ClearLocalStorageButton from "./hook/RemoveLS";
import UpdateLvlOne from "./assets/Upgrade/UpgradeLvlOne";
import { useState } from "react";

function App() {
  //main count
  const [count, setCount] = useState(() =>
    Number(localStorage.getItem("count") || 0)
  );

  // number up
  const [lvlOne, setLvlOne] = useState(() =>
    Number(localStorage.getItem("count-upgrade-one") || 1)
  );

  return (
    <>
      <div className="App">
        <Clicker setCount={setCount} count={count} lvlOne={lvlOne} />
        <ClearLocalStorageButton />
        <UpdateLvlOne
          setCount={setCount}
          count={count}
          lvlOne={lvlOne}
          setLvlOne={setLvlOne}
        />
      </div>
    </>
  );
}

export default App;
