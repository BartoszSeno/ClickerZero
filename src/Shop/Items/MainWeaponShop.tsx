/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

const MainWeaponShop = ({
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
  const [selectedItemsN, setselectedItemsN] = useState<any[]>([]);
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

  const changeSelectedItemsN = () => {
    const randomIndexes: number[] = [];
    while (randomIndexes.length < 20) {
      const randomIndex = Math.floor(Math.random() * mainWeaponData.length);

      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const selectedItemsN = randomIndexes.map((index) => mainWeaponData[index]);
    setselectedItemsN(selectedItemsN);
    localStorage.setItem("selectedItemsN", JSON.stringify(selectedItemsN));
    settimeLeft(5);
  };

  useEffect(() => {
    const interval1 = setInterval(() => {
      changeSelectedItemsN();
    }, 5000);

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

  //===================
  // full Def Stats
  const [MainWeaponDmg, setMainWeaponDmg] = useState<any>();

  setTimeout(() => {
    // export data from statistic
    const currentDmgMW = document.querySelector(
      ".statsDmgMainWeaponHiden"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const text = currentDmgMW?.textContent;
    setMainWeaponDmg(text);
  }, 1000);
  //==============

  console.log(MainWeaponDmg);

  return (
    <>
      <div style={{ position: "absolute", color: "white" }}>{timeLeft}s</div>

      {Array.isArray(selectedItemsN) &&
        selectedItemsN
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
                    handleClick(data); // przekazujemy cały obiekt przedmiotu zamiast indeksu
                    setCount(count - data.cost);
                  }}
                  style={{
                    display:
                      SelectedOption === data.tier || SelectedOption === ""
                        ? "flex"
                        : "none",
                  }}
                  disabled={
                    count < data.cost ||
                    FullInv === true ||
                    data.isBought === true
                  }
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
