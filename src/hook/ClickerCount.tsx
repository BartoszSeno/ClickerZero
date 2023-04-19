import React, { useEffect } from "react";
import "../assets/css/Normal/ClickerMain/clicker.css";
import { formatNumber } from "./FormatNumber";

const Clicker = ({
  setCount,
  count,
  FullCountPerClick,
  handleButtonClick,
}: {
  setCount: any;
  count: number;
  FullCountPerClick: number;
  handleButtonClick: any;
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
    <div id="SilverCountInfo">
      <p>{formatNumber(count)} silver</p>
      <button
        onClick={() => {
          setCount(count + FullCountPerClick + 10000);
          handleButtonClick();
        }}
        id="Click"
      ></button>
    </div>
  );
};

export default Clicker;
