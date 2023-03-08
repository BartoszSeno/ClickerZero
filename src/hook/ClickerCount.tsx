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
  /*
  useEffect(() => {
    localStorage.setItem("count", count.toString());

    const intervalId = setInterval(() => {
      setCount((count: number) => count + 0 + FullCountPerClick);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [FullCountPerClick]);
*/

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  function formatNumber(num: any, decimalPlaces = 0) {
    const suffixes = [
      "",
      "K",
      "M",
      "B",
      "T",
      "Qa",
      "Qi",
      "Sx",
      "Sp",
      "Oc",
      "Un",
      "Do",
      "Tr",
      "Qa",
      "Qi",
      "Sx",
      "Sp",
      "Oc",
      "No",
      "D",
      "V",
      "T",
      "Qa",
      "Qi",
      "Sx",
      "Sp",
      "O",
      "N",
    ];
    const base = Math.floor(Math.log10(Math.abs(num)) / 3);
    const suffix = suffixes[base];
    const formattedNum = (num / Math.pow(10, base * 3)).toFixed(decimalPlaces);
    return formattedNum + suffix;
  }

  return (
    <div>
      <p>{formatNumber(count)} silver</p>
      <button
        onClick={() => setCount(count + 100 + FullCountPerClick)}
        id="Click"
      ></button>
    </div>
  );
};

export default Clicker;

export function formatNumber(num: any, decimalPlaces = 0) {
  const suffixes = [
    "",
    " K",
    " M",
    " B",
    " T",
    " Qa",
    " Qi",
    " Sx",
    " Sp",
    " Oc",
    " Un",
    " Do",
    " Tr",
    " Qa",
    " Qi",
    " Sx",
    " Sp",
    " Oc",
    " No",
    " D",
    " V",
    " T",
    " Qa",
    " Qi",
    " Sx",
    " Sp",
    " O",
    " N",
  ];
  const base = Math.floor(Math.log10(Math.abs(num)) / 3);
  const suffix = suffixes[base];
  const formattedNum = (num / Math.pow(10, base * 3)).toFixed(decimalPlaces);
  return formattedNum + suffix;
}
