/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

const RedAndPurpleMainWeaponShop = ({
  mainWeaponData,
  setMainWeaponData,
  count,
  setCount,
  SelectedOption,
  FullInv,
}: {
  mainWeaponData: any;
  setMainWeaponData: any;
  count: number;
  setCount: any;
  SelectedOption: any;
  FullInv: any;
}) => {
  const [SelectedItems, setSelectedItems] = useState<any[]>([]);
  const [timeLeft, settimeLeft] = useState<number>(5);

  const handleClick = (selectedItem: any) => {
    const newMainWeaponData = [...mainWeaponData];
    const index = newMainWeaponData.findIndex(
      (item) => item.id === selectedItem.id
    );
    newMainWeaponData[index].isBought = true;
    setMainWeaponData(newMainWeaponData);
    localStorage.setItem(
      "MainWeaponImageAndNameAndCost",
      JSON.stringify(newMainWeaponData)
    );
  };

  const changeSelectedItems = () => {
    const randomIndexes: number[] = [];
    while (randomIndexes.length < 2) {
      const randomIndex =
        Math.floor(Math.random() * (mainWeaponData.length - 43)) + 43;

      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const SelectedItems = randomIndexes.map((index) => mainWeaponData[index]);
    setSelectedItems(SelectedItems);
    localStorage.setItem("SelectedItems", JSON.stringify(SelectedItems));
    settimeLeft(5);
  };

  useEffect(() => {
    const interval1 = setInterval(() => {
      changeSelectedItems();
    }, 5000);

    const savedItems = localStorage.getItem("SelectedItems");
    if (savedItems) {
      setSelectedItems(JSON.parse(savedItems));
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

      {Array.isArray(SelectedItems) &&
        SelectedItems.filter((data: any) => data.id > 1)
          .slice(0, 2)
          .map((data: any, index: any) => {
            return (
              <button
                id={data.tier}
                className={`RAPitemsForPurchasable ${index} `}
                key={index}
                onClick={(e) => {
                  handleClick(data);
                  setCount(count - data.cost);
                }}
                disabled={
                  count < data.cost ||
                  FullInv === true ||
                  data.isBought === true
                }
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
