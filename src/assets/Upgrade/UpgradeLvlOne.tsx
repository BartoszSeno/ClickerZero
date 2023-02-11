import "../css/Normal/Update/UPone.css";
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
  // Get the count from local storage

  // Subtracts a number for each click

  function PayForUpgrade() {
    count -= 10;
    lvlOne += 1;
    localStorage.setItem("count", count.toString());
    localStorage.setItem("count-upgrade-one", lvlOne.toString());
    console.log(count);
  }

  return (
    <>
      <div
        id="UpgradeOne"
        onClick={(e) => {
          PayForUpgrade();
          setCount(count);
          setLvlOne(lvlOne);
        }}
      >
        One
      </div>
      <div className="count-number">count:{lvlOne}</div>
    </>
  );
};

export default UpdateLvlOne;
