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
  const handleClickHelmet = (index: any) => {
    //Helmet
    const newHelmetData = [...HelmetData];
    newHelmetData[index].isBought = true;
    newHelmetData[index].count = newHelmetData[index].count || 1;
    setHelmetData(newHelmetData);
    localStorage.setItem(
      "HelmetImageAndNameAndCost",
      JSON.stringify(newHelmetData)
    );
  };

  const [selectedItemsH, setselectedItemsH] = useState<any[]>([]);
  const [timeLeft, settimeLeft] = useState<number>(60);

  useEffect(() => {
    const interval1 = setInterval(() => {
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
      settimeLeft(60); // resetujemy czas pozostały do zresetowania przedmiotu na 60 sekund
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

      {selectedItemsH
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
                  handleClickHelmet(index);
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
