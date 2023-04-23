/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import ShowArmor from "../ShowStats/ShowArmor";

const ArmorShop = ({
  count,
  setCount,
  SelectedOption,
  ArmorData,
  setArmorData,
  FullInv,
  setAoSoH,
  AoSoH,
}: {
  count: number;
  setCount: any;
  SelectedOption: any;
  ArmorData: any;
  setArmorData: any;
  FullInv: any;
  setAoSoH: any;
  AoSoH: any;
}) => {
  const [selectedItemsA, setselectedItemsA] = useState<any[]>([]);
  const [timeLeft, settimeLeft] = useState<number>(5);

  const handleClickArmor = (selectedItem: any) => {
    const newArmorData = [...ArmorData];
    const index = newArmorData.findIndex((item) => item.id === selectedItem.id);
    newArmorData[index].isBought = true;
    setArmorData(newArmorData);
    localStorage.setItem(
      "ArmorImageAndNameAndCost",
      JSON.stringify(newArmorData)
    );
  };

  const changeselectedItemsA = () => {
    const randomIndexes: number[] = [];
    while (randomIndexes.length < 6) {
      const randomIndex = Math.floor(Math.random() * ArmorData.length);

      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const selectedItemsA = randomIndexes.map((index) => ArmorData[index]);
    setselectedItemsA(selectedItemsA);
    localStorage.setItem("selectedItemsA", JSON.stringify(selectedItemsA));
    settimeLeft(5);
  };

  useEffect(() => {
    const interval1 = setInterval(() => {
      changeselectedItemsA();
    }, 5000);

    const savedItems = localStorage.getItem("selectedItemsA");
    if (savedItems) {
      setselectedItemsA(JSON.parse(savedItems));
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
  const [ArmorDef, setArmorDef] = useState<any>();
  const imgUp =
    "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/stats/up.png";
  const imgDown =
    "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/stats/down.png";

  setTimeout(() => {
    // export data from statistic
    const currentDefH = document.querySelector(
      ".statsDefDefHiden"
    ) as HTMLElement;
    //if the data exists, convert it to a text
    const text = currentDefH?.textContent;
    setArmorDef(text);
  }, 1000);
  //==============
  const [idArmor, setidArmor] = useState<number>();

  const GetId = (selectedItem: any) => {
    const newArmorData = [...ArmorData];
    const index = newArmorData.findIndex((item) => item.id === selectedItem.id);
    console.log(idArmor);
    setidArmor(index);
    setAoSoH("ShowStatsArmors");
  };

  return (
    <>
      <div style={{ position: "absolute", color: "white" }}>{timeLeft}s</div>

      {Array.isArray(selectedItemsA) &&
        selectedItemsA
          .filter((data: any) => data.id > 1)
          .slice(0, 6)
          .map((data: any, index: any) => {
            if (data.tier !== "purple") {
              return (
                <button
                  id={data.tier}
                  className={`itemsForPurchasableA ${index} `}
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
                        data.defLvl0 > ArmorDef ? imgUp : imgDown
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
            AoSoH === "ShowStatsHelmet" || AoSoH === "ShowStatsShoes"
              ? "none"
              : "",
          position: "absolute",
          marginLeft: AoSoH === "ShowStatsArmors" ? "441px" : "",
          marginTop: AoSoH === "ShowStatsArmors" ? "46px" : "",
        }}
      >
        <ShowArmor
          ArmorData={ArmorData}
          count={count}
          setCount={setCount}
          idArmor={idArmor}
          ArmorDef={ArmorDef}
          handleClickArmor={handleClickArmor}
          AoSoH={AoSoH}
          FullInv={FullInv}
        />
      </div>
    </>
  );
};

export default ArmorShop;
