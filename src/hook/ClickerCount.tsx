import React, { useState, useEffect } from "react";
import "../assets/css/Normal/ClickerMain/clicker.css";

const Clicker = ({
  setCount,
  count,
  lvlOne,
}: {
  setCount: any;
  count: number;
  lvlOne: number;
}) => {
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <div>
      <p>{count.toFixed(0)} times</p>
      <button onClick={() => setCount(count + lvlOne)} id="Click"></button>
    </div>
  );
};

export default Clicker;
