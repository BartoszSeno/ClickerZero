import "../css/Normal/Update/upgrade.css";
import React, { useState, useEffect } from "react";

const UpdateLvlOne = ({
  setCount,
  count,
  lvlOne,
  setLvlOne,
}: {
  setCount: any;
  count: number;
  lvlOne: number;
  setLvlOne: any;
}) => {
  // number that increases after buying an upgrade

  const minusCost = 10 * lvlOne;
  const minusCostTwo = 0.9 * minusCost;
  const finalCost = minusCost + minusCostTwo * 2;

  function PayForUpgrade() {
    // Get the count from local storage

    count -= finalCost;
    localStorage.setItem("count", count.toString());
    // Subtracts a number for each click

    lvlOne += 1;
    localStorage.setItem("count-upgrade-one", lvlOne.toString());
  }

  const [active, setActive] = useState<boolean>(true);

  useEffect(() => {
    if (finalCost >= count) {
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
        }}
        disabled={active}
      >
        <div className="count-price">{finalCost.toFixed(0)}</div>
        <div className="count-number">{lvlOne}</div>
      </button>
    </>
  );
};

export default UpdateLvlOne;
