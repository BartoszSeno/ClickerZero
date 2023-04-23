/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import ShowShoes from "../ShowStats/ShowShoes";

const ShoesShop = ({
  count,
  setCount,
  SelectedOption,
  ShoesData,
  setShoesData,
  FullInv,
  setAoSoH,
  AoSoH,
}: {
  count: number;
  setCount: any;
  SelectedOption: any;
  ShoesData: any;
  setShoesData: any;
  FullInv: any;
  setAoSoH: any;
  AoSoH: any;
}) => {
  const [selectedItemsS, setselectedItemsS] = useState<any[]>([]);
  const [timeLeft, settimeLeft] = useState<number>(5);

  const handleClickShoes = (selectedItem: any) => {
    const newShoesData = [...ShoesData];
    const index = newShoesData.findIndex((item) => item.id === selectedItem.id);
    newShoesData[index].isBought = true;
    setShoesData(newShoesData);
    localStorage.setItem(
      "ShoesImageAndNameAndCost",
      JSON.stringify(newShoesData)
    );
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
    settimeLeft(5);
  };

  useEffect(() => {
    const interval1 = setInterval(() => {
      changeselectedItemsS();
    }, 5000);

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
  //===================
  // full Def Stats
  const [ShoesDef, setShoesDef] = useState<any>();
  const imgUp =
    "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/stats/up.png";
  const imgDown =
    "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/stats/down.png";

  setTimeout(() => {
    // export data from statistic
    const currentDefH = document.querySelector(
      ".statsShoesDefHiden"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const text = currentDefH?.textContent;
    setShoesDef(text);
  }, 1000);
  //==============
  const [idShoes, setidShoes] = useState<number>();

  const GetId = (selectedItem: any) => {
    const newShoesData = [...ShoesData];
    const index = newShoesData.findIndex((item) => item.id === selectedItem.id);
    console.log(idShoes);
    setidShoes(index);
    setAoSoH("ShowStatsShoes");
  };

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
                    GetId(data);
                  }}
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
                  <div
                    className="UpgradeDefStats"
                    style={{
                      backgroundImage: `url(${
                        data.defLvl0 > ShoesDef ? imgUp : imgDown
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
            AoSoH === "ShowStatsHelmet" || AoSoH === "ShowStatsArmors"
              ? "none"
              : "",
          position: "absolute",
          marginLeft: AoSoH === "ShowStatsShoes" ? "-157px" : "",
          marginTop: AoSoH === "ShowStatsShoes" ? "403px" : "",
        }}
      >
        <ShowShoes
          ShoesData={ShoesData}
          count={count}
          setCount={setCount}
          idShoes={idShoes}
          ShoesDef={ShoesDef}
          handleClickShoes={handleClickShoes}
          AoSoH={AoSoH}
          FullInv={FullInv}
        />
      </div>
    </>
  );
};

export default ShoesShop;
