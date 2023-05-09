import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainIndexVillage from "./Village/Village";
import Pond from "./Pond";
import Lvl from "./hook/Lvl";
import { useEffect, useState } from "react";
import DayTime from "./hook/dayTiem";
import HealthBar from "./hook/hpBar";
import TimeCycleBg from "./hook/TimeCycle";

function App() {
  //=========================DMG BOOST FOR CHARACTER UPGRADE=======================
  const [DmgBoost, setDmgBoost] = useState<number>(
    Number(localStorage.getItem("DmgBoost")) || 1
  );

  //=========================DEF BOOST FOR CHARACTER UPGRADE=======================
  const [DefBoosts, setDefBoosts] = useState<number>(
    Number(localStorage.getItem("DefBoosts")) || 1
  );
  //=================================================================================
  //==============================DEF AND DMG VALUE==================================
  //=================================================================================
  const [FullDefValue, setFullDefValue] = useState<any>();

  setTimeout(() => {
    // export data from statistic
    const FullDmgFromText = document.querySelector(
      ".statsFullDef"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const text = FullDmgFromText?.textContent;
    setFullDefValue(text);
  }, 10);
  //==============
  // full Dmg Stats
  const [FullDmgValue, setFullDmgValue] = useState<any>();

  setTimeout(() => {
    // export data from statistic
    const FullDmgFromText = document.querySelector(
      ".statsFullDmg"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const text = FullDmgFromText?.textContent;
    setFullDmgValue(text);
  }, 10);

  //=============================MAX VALUE DMG + DEF===============================
  // HERE NEW WARIABLES ARE ADDED WHICH ARE USED TO INCREASE POINTS PER CLICK
  const [FullCountPerClick, setFullCountPerClick] = useState<number>(
    (Number(FullDmgValue) || 0) + (Number(FullDefValue) || 0)
  );
  //=================================================================================
  //===================================Leveling======================================
  //=================================================================================

  const [clickCount, setClickCount] = useState(
    Number(localStorage.getItem("clickCount")) || 0
  );
  const [fillCount, setFillCount] = useState(
    Number(localStorage.getItem("fillCount")) || 0
  );
  const [maxClicks, setMaxClicks] = useState(
    Number(localStorage.getItem("maxClicks")) || 50
  );
  const [maxClicksCount, setMaxClicksCount] = useState(
    Number(localStorage.getItem("maxClicksCount")) || 1
  );
  const clickIncrease = FullCountPerClick;

  function handleButtonClick() {
    if (clickCount < maxClicks) {
      setClickCount(clickCount + clickIncrease);
      if (clickCount + clickIncrease >= maxClicks) {
        setFillCount(fillCount + 1);
        setClickCount(0);
        if (fillCount + 1 === maxClicksCount) {
          setMaxClicks(Number(maxClicks) * 1.8342);
          setMaxClicksCount(maxClicksCount + 1);
        }
      }
    }
  }

  useEffect(() => {
    localStorage.setItem("fillCount", fillCount.toString());
    localStorage.setItem("clickCount", clickCount.toString());
    localStorage.setItem("maxClicks", maxClicks.toString());
    localStorage.setItem("maxClicksCount", maxClicksCount.toString());
  }, [fillCount, clickCount, maxClicks, maxClicksCount]);
  //=================================================================================
  //================================TIME AND DAY=====================================
  //=================================================================================
  const [days, setDays] = useState(
    parseInt(localStorage.getItem("days") ?? "") || 0
  );
  const [hours, setHours] = useState(
    parseInt(localStorage.getItem("hours") ?? "") || 0
  );
  const [minutes, setMinutes] = useState(
    parseInt(localStorage.getItem("minutes") ?? "") || 0
  );
  //========================TURN ON / OFF BACKGROUND COLOR===========================

  const [turn, setTurn] = useState<boolean>(true);

  //=================================================================================
  //================================HP BAR===========================================
  //=================================================================================

  const maxHP = (100 + Number(FullDefValue)) * DefBoosts;
  const [currentHP, setCurrentHP] = useState(100); // Inicjalne wartości currentHP

  return (
    <>
      <BrowserRouter basename="/ClickerZero">
        <TimeCycleBg hours={hours} turn={turn} />
        <Routes>
          <Route
            path="/"
            element={
              <MainIndexVillage
                handleButtonClick={handleButtonClick}
                FullDmgValue={FullDmgValue}
                FullDefValue={FullDefValue}
                FullCountPerClick={FullCountPerClick}
                setFullCountPerClick={setFullCountPerClick}
                setDays={setDays}
                days={days}
                hours={hours}
                setHours={setHours}
                setMinutes={setMinutes}
                minutes={minutes}
                setTurn={setTurn}
                turn={turn}
                setCurrentHP={setCurrentHP}
                maxHP={maxHP}
                setDmgBoost={setDmgBoost}
                DmgBoost={DmgBoost}
                setDefBoosts={setDefBoosts}
                DefBoosts={DefBoosts}
              />
            }
          ></Route>
          <Route path="/Pond" element={<Pond />}></Route>
        </Routes>
        <Lvl
          clickCount={clickCount}
          maxClicks={maxClicks}
          fillCount={fillCount}
        />
        <DayTime
          setDays={setDays}
          days={days}
          hours={hours}
          setHours={setHours}
          setMinutes={setMinutes}
          minutes={minutes}
          setTurn={setTurn}
          turn={turn}
        />
        <HealthBar
          currentHP={currentHP}
          maxHP={maxHP}
          setCurrentHP={setCurrentHP}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
