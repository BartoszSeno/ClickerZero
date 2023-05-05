/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import "../assets/css/Normal/dayTime/dayTime.css";

const DayTime = () => {
  const [days, setDays] = useState(
    parseInt(localStorage.getItem("days") ?? "") || 0
  );
  const [hours, setHours] = useState(
    parseInt(localStorage.getItem("hours") ?? "") || 0
  );
  const [minutes, setMinutes] = useState(
    parseInt(localStorage.getItem("minutes") ?? "") || 0
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes((prevMinutes) => prevMinutes + 1);
    }, 1000); // Czas w milisekundach, 60000ms = 1 minuta

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHours((prevHours) => prevHours + 1);
    }
  }, [minutes]);

  useEffect(() => {
    if (hours === 24) {
      setHours(0);
      setDays((prevDays) => prevDays + 1);
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

  return (
    <div id="DayTimeContainer">
      <div
        className={`DayNightCycle ${
          cycle !== previousCycle ? "transitioning" : ""
        }`}
        style={{
          backgroundImage: `url(${cycle})`,
          transition: "background-image 1s ease-in-out",
        }}
      ></div>
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
