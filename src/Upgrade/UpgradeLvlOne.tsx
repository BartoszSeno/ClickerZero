/* eslint-disable react-hooks/exhaustive-deps */
import "../assets/css/Normal/Update/upgrade.css";
import React, { useState, useEffect } from "react";
import { formatNumber } from "../hook/FormatNumber";

const UpdateLvlOne = ({
  setCount,
  count,
  lvlOne,
  setLvlOne,
  UpgradeOne,
  setUpgradeOne,
}: {
  setCount: any;
  count: number;
  lvlOne: number;
  setLvlOne: any;
  UpgradeOne: number;
  setUpgradeOne: any;
}) => {
  // This function calculates the result
  function multiplyWithExponent(base: number, exponent: number) {
    return Math.pow(base, exponent);
  }

  // This constant calculates the amount required to buy an upgrade.
  const AmoutCostForBuy = multiplyWithExponent(lvlOne, 2);
  const minusCost = 10 + AmoutCostForBuy;

  // This function subtracts the cost of an upgrade from the count stored in local storage and updates the local storage accordingly.
  // It also increases the lvlOne and UpgradeOne variables by 1 and updates their values in local storage.
  function PayForUpgrade() {
    // Get the count from local storage
    count -= minusCost;
    localStorage.setItem("count", count.toString());

    // Increase the lvlOne variable by 1 and update its value in local storage
    lvlOne += 1;
    localStorage.setItem("upgradeOneLvl", lvlOne.toString());

    // Increase the UpgradeOne variable by 1 and update its value in local storage
    UpgradeOne += 1;
    localStorage.setItem("UpgradeOneCount", UpgradeOne.toString());
  }

  // This state variable tracks whether the upgrade button should be active.
  const [active, setActive] = useState<boolean>(true);

  //This useEffect hook updates the active variable based on the count and minusCost values.
  useEffect(() => {
    if (minusCost >= count) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  return (
    <>
      <button
        id="Upgrade"
        onClick={(e) => {
          PayForUpgrade();
          setCount(count);
          setLvlOne(lvlOne);
          setUpgradeOne(UpgradeOne);
        }}
        disabled={active}
      >
        <div className="count-price">{formatNumber(minusCost.toFixed(0))}</div>
        <div className="count-number">{lvlOne.toFixed(0)}</div>
      </button>
    </>
  );
};

export default UpdateLvlOne;
