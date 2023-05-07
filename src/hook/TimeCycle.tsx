/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import "../assets/css/Normal/dayTime/dayTime.css";
const TimeCycleBg = ({ hours }: { hours: number }) => {
  const [TimeCycleBg, setTimeCycleBg] = useState<string>("");
  const [OpacityCycleBg, setOpacityCycleBg] = useState<number>(0.14);

  useEffect(() => {
    const colors = [
      { hours: 1, color: "#080502", opacity: 0.35 },
      { hours: 2, color: "#140C05", opacity: 0.35 },
      { hours: 3, color: "#1F1308", opacity: 0.35 },
      { hours: 4, color: "#36200D", opacity: 0.35 },
      { hours: 5, color: "#4D2E12", opacity: 0.2 },
      { hours: 6, color: "#7A4A1C", opacity: 0.14 },
      { hours: 7, color: "#A66526", opacity: 0.14 },
      { hours: 8, color: "#D38130", opacity: 0.14 },
      { hours: 9, color: "#FF9C3A", opacity: 0.14 },
      { hours: 10, color: "#FFB56C", opacity: 0.14 },
      { hours: 11, color: "#FFCE9D", opacity: 0.14 },
      { hours: 12, color: "#ffffff00", opacity: 0.14 },
      { hours: 13, color: "#ffffff00", opacity: 0.14 },
      { hours: 14, color: "#ffffff00", opacity: 0.14 },
      { hours: 15, color: "#ffffff00", opacity: 0.14 },
      { hours: 16, color: "#ffffff00", opacity: 0.14 },
      { hours: 17, color: "#E0B4A2", opacity: 0.14 },
      { hours: 18, color: "#C06845", opacity: 0.14 },
      { hours: 19, color: "#AA3507", opacity: 0.14 },
      { hours: 20, color: "#551B04", opacity: 0.14 },
      { hours: 21, color: "#2B0E02", opacity: 0.2 },
      { hours: 22, color: "#000000", opacity: 0.25 },
      { hours: 23, color: "#040301", opacity: 0.3 },
      { hours: 24, color: "#060402", opacity: 0.35 },
    ];
    const currentColor = colors.find((color) => color.hours === hours);
    if (currentColor) {
      setOpacityCycleBg(currentColor.opacity);
      setTimeCycleBg(currentColor.color);
    }
  }, [hours]);

  return (
    <>
      <div
        className="Cycle"
        style={{
          backgroundColor: TimeCycleBg,
          transition: "background-color 1s ease-in-out",
          opacity: OpacityCycleBg,
        }}
      ></div>
    </>
  );
};

export default TimeCycleBg;
