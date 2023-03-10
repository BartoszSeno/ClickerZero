import React, { useEffect } from "react";
import "../assets/css/Normal/ClickerMain/clicker.css";
import { formatNumber } from "./FormatNumber";

const Clicker = ({
  setCount,
  count,
  FullCountPerClick,
}: {
  setCount: any;
  count: number;
  FullCountPerClick: number;
}) => {
  /*
  useEffect(() => {
    localStorage.setItem("count", count.toString());

    const intervalId = setInterval(() => {
      setCount((count: number) => count + 0 + FullCountPerClick);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [FullCountPerClick]);
*/

  // This useEffect hook updates the localStorage item "count" every time the "count" variable changes.
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <div>
      <p>{formatNumber(count)} silver</p>
      <button
        onClick={() => setCount(count + FullCountPerClick)}
        id="Click"
      ></button>
    </div>
  );
};

export default Clicker;
