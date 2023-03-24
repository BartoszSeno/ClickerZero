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

  const [selectedItemsN, setselectedItemsN] = useState<any[]>([]);
  const [timeLeft, settimeLeft] = useState<number>(60);

  useEffect(() => {
    const interval1 = setInterval(() => {
      const randomIndexes: number[] = [];
      while (randomIndexes.length < 20) {
        const randomIndex = Math.floor(Math.random() * mainWeaponData.length);

        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }
      const selectedItemsN = randomIndexes.map(
        (index) => mainWeaponData[index]
      );
      setselectedItemsN(selectedItemsN);
      localStorage.setItem("selectedItemsN", JSON.stringify(selectedItemsN));
      settimeLeft(60); // resetujemy czas pozostały do zresetowania przedmiotu na 60 sekund
    }, 60000);

    const savedItems = localStorage.getItem("selectedItemsN");
    if (savedItems) {
      setselectedItemsN(JSON.parse(savedItems));
    }

    const interval2 = setInterval(() => {
      settimeLeft((prevtimeLeft) => prevtimeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);
  return (
    <>
      <div style={{ position: "absolute", color: "white" }}>{timeLeft}s</div>

      {selectedItemsN
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
