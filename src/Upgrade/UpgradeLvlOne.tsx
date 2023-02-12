import "../assets/css/Normal/Update/upgrade.css";
import React, { useState, useEffect } from "react";

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
  // number that increases after buying an upgrade
  //number that exponent * 2
  function multiplyWithExponent(base: number, exponent: number) {
    return Math.pow(base, exponent);
  }
  const AmoutCostForBuy = multiplyWithExponent(lvlOne, 2);

  const minusCost = 10 + AmoutCostForBuy;

  function PayForUpgrade() {
    // Get the count from local storage

    count -= minusCost;
    localStorage.setItem("count", count.toString());
    // Subtracts a number for each click

    lvlOne += 1;
    localStorage.setItem("upgradeOneLvl", lvlOne.toString());

    //amount pre click
    UpgradeOne += 0.1;
    localStorage.setItem("UpgradeOneCount", UpgradeOne.toString());
  }

  const [active, setActive] = useState<boolean>(true);

  useEffect(() => {
    if (minusCost >= count) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

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
        //disabled={active}
      >
        <div className="count-price">{minusCost.toFixed(0)}</div>
        <div className="count-number">{lvlOne.toFixed(0)}</div>
      </button>
    </>
  );
};

export default UpdateLvlOne;
