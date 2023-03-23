/* eslint-disable react-hooks/exhaustive-deps */
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

  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [timeLeftRAP, settimeLeftRAP] = useState<number>(120);

  useEffect(() => {
    const interval1 = setInterval(() => {
      const randomIndexes: number[] = [];
      while (randomIndexes.length < 2) {
        const randomIndex = Math.floor(Math.random() * mainWeaponData.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }
      const selectedItems = randomIndexes.map((index) => mainWeaponData[index]);
      setSelectedItems(selectedItems);
      localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
      settimeLeftRAP(120); // resetujemy czas pozostały do zresetowania przedmiotu na 60 sekund
    }, 120000);

    const savedItems = localStorage.getItem("selectedItems");
    if (savedItems) {
      setSelectedItems(JSON.parse(savedItems));
    }

    const interval2 = setInterval(() => {
      settimeLeftRAP((prevtimeLeftRAP) => prevtimeLeftRAP - 1);
    }, 1000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <>
      <div style={{ position: "absolute", color: "white" }}>{timeLeftRAP}s</div>
      {selectedItems.map((data: any, index: any) => {
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
      })}
    </>
  );
};

export default RedAndPurpleMainWeaponShop;
