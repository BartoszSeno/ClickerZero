import React, { useEffect } from "react";
import "../assets/css/Normal/ClickerMain/clicker.css";
import { formatNumber } from "./FormatNumber";
import PerClickPoints from "./PerClick";

const Clicker = ({
  setCount,
  count,
  FullCountPerClick,
  handleButtonClick,
  setFullCountPerClick,
  UpgradeOne,
  FullDmgValue,
  FullDefValue,
}: {
  setCount: any;
  count: number;
  FullCountPerClick: number;
  handleButtonClick: any;
  setFullCountPerClick: any;
  UpgradeOne: number;
  FullDmgValue: number;
  FullDefValue: number;
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
      <button
        onClick={() => {
          setCount(count + FullCountPerClick);
          handleButtonClick();
        }}
        id="Click"
      >
        <span className="silver">
          <p>Silver</p>
          <p className="sc">{formatNumber(count)}</p>
        </span>
        <PerClickPoints
          FullCountPerClick={FullCountPerClick}
          setFullCountPerClick={setFullCountPerClick}
          UpgradeOne={UpgradeOne}
          FullDmgValue={FullDmgValue}
          FullDefValue={FullDefValue}
        />
      </button>
    </div>
  );
};

export default Clicker;
