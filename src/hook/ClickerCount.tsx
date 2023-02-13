import React, { useState, useEffect } from "react";
import "../assets/css/Normal/ClickerMain/clicker.css";

const Clicker = ({
  setCount,
  count,
  FullCountPerClick,
}: {
  setCount: any;
  count: number;
  FullCountPerClick: number;
}) => {
  useEffect(() => {
    localStorage.setItem("count", count.toString());

    const intervalId = setInterval(() => {
      setCount((count: number) => count + 0 + FullCountPerClick);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [FullCountPerClick]);

  return (
    <div>
      <p>{count.toFixed(0)} silver</p>
      <button
        onClick={() => setCount(count + 1 + FullCountPerClick)}
        id="Click"
      ></button>
    </div>
  );
};

export default Clicker;
