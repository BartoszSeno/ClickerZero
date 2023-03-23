/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

const RedAndPurpleMainWeaponShop = ({
  mainWeaponData,
  setMainWeaponData,
  count,
  setCount,
  SelectedOption,
}: {
  mainWeaponData: any;
  setMainWeaponData: any;
  count: number;
  setCount: any;
  SelectedOption: any;
}) => {
  const handleClick = (index: any) => {
    //MAIN WEAPON
    // Create a new array with the same elements as `mainWeaponData`
    const newMainWeaponData = [...mainWeaponData];
    // Set the `isBought` property of the item at `index` to `true`
    newMainWeaponData[index].isBought = true;
    // Increment the `count` property of the item at `index`, or set it to 1 if it doesn't exist
    newMainWeaponData[index].count = (newMainWeaponData[index].count || 0) + 1;
    // Update the `mainWeaponData` state with the new array
    setMainWeaponData(newMainWeaponData);
    // Set an item in local storage serialized as JSON
    localStorage.setItem(
      "MainWeaponImageAndNameAndCost",
      JSON.stringify(newMainWeaponData)
    );
  };

  function shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const [timeLeftRAP, settimeLeftRAP] = useState(60);

  useEffect(() => {
    let counter = 0;

    const intervalId = setInterval(() => {
      settimeLeftRAP((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          shuffle(mainWeaponData);
          settimeLeftRAP(60);
          return 60;
        } else {
          return prevTime - 1;
        }
      });

      counter++;
      if (counter === 60) {
        shuffle(mainWeaponData);
        settimeLeftRAP(60);
        counter = 0;
      }
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div style={{ position: "absolute", color: "white" }}>
        Time left: {timeLeftRAP}s
      </div>

      {mainWeaponData
        .filter((data: any) => data.id >= 43)
        .slice(0, 2)
        .map((data: any, index: any) => {
          if (data.isVisible) {
            return (
              <button
                id={data.tier}
                className={`RAPitemsForPurchasable ${index} `}
                key={index}
                onClick={(e) => {
                  handleClick(index);
                  setCount(count - data.cost);
                }}
                disabled={count < data.cost}
                style={{
                  display:
                    SelectedOption === data.tier || SelectedOption === ""
                      ? "flex"
                      : "none",
                }}
              >
                <img
                  className="OptionWeaponImg"
                  src={data.image}
                  alt={`${data.name} weapon`}
                />
              </button>
            );
          }
        })}
    </>
  );
};

export default RedAndPurpleMainWeaponShop;
