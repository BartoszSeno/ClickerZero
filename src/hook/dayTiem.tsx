/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import "../assets/css/Normal/dayTime/dayTime.css";

const DayTime = ({
  setDays,
  days,
  hours,
  setHours,
  setMinutes,
  minutes,
  setTurn,
  turn,
}: {
  setDays: any;
  days: number;
  hours: number;
  setHours: any;
  setMinutes: any;
  minutes: number;
  setTurn: any;
  turn: boolean;
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes((prevMinutes: number) => prevMinutes + 1);
    }, 1666); // 1h in game = 1min if is 1000 (24h = 24min) / 1666 = 40 min

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHours((prevHours: number) => prevHours + 1);
    }
  }, [minutes]);

  useEffect(() => {
    if (hours === 24) {
      setHours(0);
      setDays((prevDays: number) => prevDays + 1);
    }
  }, [hours]);

  useEffect(() => {
    localStorage.setItem("days", days.toString());
    localStorage.setItem("hours", hours.toString());
    localStorage.setItem("minutes", minutes.toString());
  }, [days, hours, minutes]);

  const Morning =
    "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/DayNightCycle/dawn.gif";
  const Afternoon =
    "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/DayNightCycle/day.gif";
  const Evening =
    "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/DayNightCycle/noon.gif";
  const Night =
    "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/DayNightCycle/night.gif";

  const [cycle, setCycle] = useState<string>(
    localStorage.getItem("cycle") || Morning
  );
  const [previousCycle, setPreviousCycle] = useState("");

  useEffect(() => {
    if (hours === 6) {
      setPreviousCycle(cycle);
      setCycle(Morning);
      localStorage.setItem("cycle", Morning.toString());
    } else if (hours === 12) {
      setPreviousCycle(cycle);
      setCycle(Afternoon);
      localStorage.setItem("cycle", Afternoon.toString());
    } else if (hours === 18) {
      setPreviousCycle(cycle);
      setCycle(Evening);
      localStorage.setItem("cycle", Evening.toString());
    } else if (hours === 22) {
      setPreviousCycle(cycle);
      setCycle(Night);
      localStorage.setItem("cycle", Night.toString());
    }
  }, [hours]);
  //======================
  const [setings, setSetings] = useState<boolean>(false);
  function OpenSetings() {
    setSetings(!setings);
  }

  const [onOff, setOnOff] = useState("ON");

  useEffect(() => {
    const storedTurn = localStorage.getItem("turn");
    if (storedTurn) {
      setTurn(JSON.parse(storedTurn));
    }
  }, []);

  useEffect(() => {
    if (turn === true) {
      setOnOff("ON");
    } else {
      setOnOff("OFF");
    }
  });

  function TurnOnOff() {
    setTurn(!turn);
    localStorage.setItem("turn", JSON.stringify(!turn));
  }

  const on =
    "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/any/On.png)";
  const off =
    "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/any/off.png)";

  return (
    <div id="DayTimeContainer">
      <div
        onClick={OpenSetings}
        className={`DayNightCycle ${
          cycle !== previousCycle ? "transitioning" : ""
        }`}
        style={{
          backgroundImage: `url(${cycle})`,
          transition: "background-image 1s ease-in-out",
        }}
      ></div>
      <div
        className={`Setings ${setings ? "show" : "hide"}`}
        onClick={TurnOnOff}
        style={{ backgroundImage: turn ? on : off }}
      >
        {onOff}
      </div>
      <div className="DaysTime">
        <div className="DTC">
          <p>{days} Days</p>
          <p>
            {hours}:{minutes}h
          </p>
        </div>
      </div>
    </div>
  );
};

export default DayTime;
