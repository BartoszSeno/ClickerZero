/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

const ShoesShop = ({
  count,
  setCount,
  SelectedOption,
  ShoesData,
  setShoesData,
}: {
  count: number;
  setCount: any;
  SelectedOption: any;
  ShoesData: any;
  setShoesData: any;
}) => {
  const [disabledButtons, setDisabledButtons] = useState<any>([]);
  const [selectedItemsS, setselectedItemsS] = useState<any[]>([]);
  const [timeLeft, settimeLeft] = useState<number>(60);

  const handleClickShoes = (selectedItem: any) => {
    const newShoesData = [...ShoesData];
    const index = newShoesData.findIndex((item) => item.id === selectedItem.id);
    newShoesData[index].isBought = true;
    newShoesData[index].count = newShoesData[index].count || 1;
    setShoesData(newShoesData);
    localStorage.setItem(
      "ShoesImageAndNameAndCost",
      JSON.stringify(newShoesData)
    );
    setDisabledButtons([...disabledButtons, index]);
  };

  const changeselectedItemsS = () => {
    const randomIndexes: number[] = [];
    while (randomIndexes.length < 6) {
      const randomIndex = Math.floor(Math.random() * ShoesData.length);

      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const selectedItemsS = randomIndexes.map((index) => ShoesData[index]);
    setselectedItemsS(selectedItemsS);
    localStorage.setItem("selectedItemsS", JSON.stringify(selectedItemsS));
    settimeLeft(60);
  };

  useEffect(() => {
    const interval1 = setInterval(() => {
      changeselectedItemsS();
    }, 60000);

    const savedItems = localStorage.getItem("selectedItemsS");
    if (savedItems) {
      setselectedItemsS(JSON.parse(savedItems));
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

      {Array.isArray(selectedItemsS) &&
        selectedItemsS
          .filter((data: any) => data.id > 1)
          .slice(0, 6)
          .map((data: any, index: any) => {
            if (data.tier !== "purple") {
              return (
                <button
                  id={data.tier}
                  className={`itemsForPurchasableS ${index} `}
                  key={index}
                  onClick={(e) => {
                    handleClickShoes(data);
                    setCount(count - data.cost);
                    setDisabledButtons([...disabledButtons, index]);
                  }}
                  disabled={
                    disabledButtons.includes(index) || count < data.cost
                  }
                  style={{
                    display:
                      SelectedOption === data.tier || SelectedOption === ""
                        ? "flex"
                        : "none",
                  }}
                >
                  {/*
              <div className="CostAndPrice">
                <span className={`itemName ${data.tier}C`}>{data.name}</span>
                <span className="PriceForPurchasable">
                  {data.cost}({data.count})
                </span>
              </div>
            */}
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

export default ShoesShop;
