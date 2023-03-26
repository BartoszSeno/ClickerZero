/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

const HelmetShop = ({
  count,
  setCount,
  SelectedOption,
  HelmetData,
  setHelmetData,
}: {
  count: number;
  setCount: any;
  SelectedOption: any;
  HelmetData: any;
  setHelmetData: any;
}) => {
  const [disabledButtons, setDisabledButtons] = useState<any>([]);
  const [selectedItemsH, setselectedItemsH] = useState<any[]>([]);
  const [timeLeft, settimeLeft] = useState<number>(60);

  const handleClickHelmet = (selectedItem: any) => {
    const newHelmetData = [...HelmetData];
    const index = newHelmetData.findIndex(
      (item) => item.id === selectedItem.id
    );
    newHelmetData[index].isBought = true;
    newHelmetData[index].count = newHelmetData[index].count || 1;
    setHelmetData(newHelmetData);
    localStorage.setItem(
      "HelmetImageAndNameAndCost",
      JSON.stringify(newHelmetData)
    );
    setDisabledButtons([...disabledButtons, index]);
  };

  const changeselectedItemsH = () => {
    const randomIndexes: number[] = [];
    while (randomIndexes.length < 4) {
      const randomIndex = Math.floor(Math.random() * HelmetData.length);

      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const selectedItemsH = randomIndexes.map((index) => HelmetData[index]);
    setselectedItemsH(selectedItemsH);
    localStorage.setItem("selectedItemsH", JSON.stringify(selectedItemsH));
    settimeLeft(60);
  };

  useEffect(() => {
    const interval1 = setInterval(() => {
      changeselectedItemsH();
    }, 60000);

    const savedItems = localStorage.getItem("selectedItemsH");
    if (savedItems) {
      setselectedItemsH(JSON.parse(savedItems));
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

      {Array.isArray(selectedItemsH) &&
        selectedItemsH
          .filter((data: any) => data.id > 1)
          .slice(0, 4)
          .map((data: any, index: any) => {
            if (data.tier !== "purple") {
              return (
                <button
                  id={data.tier}
                  className={`itemsForPurchasableH ${index} `}
                  key={index}
                  onClick={(e) => {
                    handleClickHelmet(data);
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

export default HelmetShop;
