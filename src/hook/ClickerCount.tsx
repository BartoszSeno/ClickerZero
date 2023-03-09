import React, { useEffect } from "react";
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

  // This useEffect hook updates the localStorage item "count" every time the "count" variable changes.
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  // This function formats a number with suffixes like K, M, B, T, etc.
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
    // The base of the logarithm in the suffix formula
    const base = Math.floor(Math.log10(Math.abs(num)) / 3);
    // The suffix for the formatted number
    const suffix = suffixes[base];
    // The formatted number as a string
    const formattedNum = (num / Math.pow(10, base * 3)).toFixed(decimalPlaces);
    // Return the formatted number with the suffix
    return formattedNum + suffix;
  }

  return (
    <div>
      <p>{formatNumber(count || 1)} silver</p>
      <button
        onClick={() => setCount(count + 1 + FullCountPerClick)}
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
