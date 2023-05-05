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

  return (
    <div id="DayTimeContainer">
      <div className="DayNightCycle"></div>
      {days} Days, {hours}:{minutes}h
    </div>
  );
};

export default DayTime;
