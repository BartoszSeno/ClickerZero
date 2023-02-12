import React, { useState, useEffect } from "react";
import "../assets/css/Normal/ClickerMain/clicker.css";

const Clicker = ({
  setCount,
  count,
  lvlOne,
  FullCountPerClick,
}: {
  setCount: any;
  count: number;
  lvlOne: number;
  FullCountPerClick: number;
}) => {
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

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
