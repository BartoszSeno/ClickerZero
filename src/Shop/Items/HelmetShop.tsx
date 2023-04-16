/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import ShowHelmet from "../ShowStats/ShowHelmet";

const HelmetShop = ({
  count,
  setCount,
  SelectedOption,
  HelmetData,
  setHelmetData,
  FullInv,
  setAoSoH,
  AoSoH,
}: {
  count: number;
  setCount: any;
  SelectedOption: any;
  HelmetData: any;
  setHelmetData: any;
  FullInv: any;
  setAoSoH: any;
  AoSoH: any;
}) => {
  const [selectedItemsH, setselectedItemsH] = useState<any[]>([]);
  const [timeLeft, settimeLeft] = useState<number>(5);

  const handleClickHelmet = (selectedItem: any) => {
    const newHelmetData = [...HelmetData];
    const index = newHelmetData.findIndex(
      (item) => item.id === selectedItem.id
    );

    newHelmetData[index].isBought = true;
    setHelmetData(newHelmetData);
    localStorage.setItem(
      "HelmetImageAndNameAndCost",
      JSON.stringify(newHelmetData)
    );
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
    settimeLeft(5);
  };

  useEffect(() => {
    const interval1 = setInterval(() => {
      changeselectedItemsH();
    }, 5000);

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

  //===================
  // full Def Stats
  const [HelmetDef, setHelmetDef] = useState<any>();
  const imgUp =
    "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/stats/up.png";
  const imgDown =
    "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/stats/down.png";

  setTimeout(() => {
    // export data from statistic
    const currentDefH = document.querySelector(
      ".statsHelmetDefHiden"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const text = currentDefH?.textContent;
    setHelmetDef(text);
  }, 1000);
  //==============
  const [idHelmet, setidHelmet] = useState<number>();

  const GetId = (selectedItem: any) => {
    const newHelmetData = [...HelmetData];
    const index = newHelmetData.findIndex(
      (item) => item.id === selectedItem.id
    );
    console.log(idHelmet);
    setidHelmet(index);
    setAoSoH("ShowStatsHelmet");
  };

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
                    GetId(data);
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
                  {/*
              <div className="CostAndPrice">
                <span className={`itemName ${data.tier}C`}>{data.name}</span>
                <span className="PriceForPurchasable">
                  {data.cost}({data.count})
                </span>
              </div>
            */}
                  <img
                    className="OptionHelmetImg"
                    src={data.image}
                    alt={`${data.name} Helemt`}
                  />
                  <div
                    className="UpgradeDefStats"
                    style={{
                      backgroundImage: `url(${
                        data.defLvl0 > HelmetDef ? imgUp : imgDown
                      })`,
                    }}
                  ></div>
                </button>
              );
            }
          })}
      <div
        style={{
          display:
            AoSoH === "ShowStatsArmors" || AoSoH === "ShowStatsShoes"
              ? "none"
              : "",
          position: "absolute",
          marginLeft: AoSoH === "ShowStatsHelmet" ? "-24px" : "",
          marginTop: AoSoH === "ShowStatsHelmet" ? "119px" : "",
        }}
      >
        <ShowHelmet
          HelmetData={HelmetData}
          count={count}
          setCount={setCount}
          idHelmet={idHelmet}
          HelmetDef={HelmetDef}
          handleClickHelmet={handleClickHelmet}
          AoSoH={AoSoH}
        />
      </div>
    </>
  );
};

export default HelmetShop;
