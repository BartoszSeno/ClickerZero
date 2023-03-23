/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

const MainWeaponShop = ({
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

    // Save the shuffled array to localStorage
    localStorage.setItem("mainWeaponDataShop", JSON.stringify(array));

    return array;
  }

  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    let counter = 0;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          shuffle(mainWeaponData);
          setTimeLeft(60);
          return 60;
        } else {
          return prevTime - 1;
        }
      });

      counter++;
      if (counter === 60) {
        shuffle(mainWeaponData);
        setTimeLeft(60);
        counter = 0;
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("mainWeaponDataShop");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setMainWeaponData(parsedData);
    }
  }, []);
  return (
    <>
      <div style={{ position: "absolute", color: "white" }}>
        Time left: {timeLeft}s
      </div>

      {mainWeaponData
        .filter((data: any) => data.id > 1)
        .slice(0, 20)
        .map((data: any, index: any) => {
          if (data.tier !== "purple" && data.tier !== "red") {
            return (
              <button
                id={data.tier}
                className={`itemsForPurchasable ${index} `}
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

export default MainWeaponShop;
