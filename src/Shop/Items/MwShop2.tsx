/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import ShowWeapon from "../ShowStats/ShowWeapon";

const MainWeaponShopTwo = ({
  mainWeaponData,
  setMainWeaponData,
  count,
  setCount,
  SelectedOption,
  FullInv,
  setNoR,
  NoR,
}: {
  mainWeaponData: any;
  setMainWeaponData: any;
  count: number;
  setCount: any;
  SelectedOption: any;
  FullInv: any;
  setNoR: any;
  NoR: any;
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
    while (randomIndexes.length < 5) {
      const randomIndex = Math.floor(Math.random() * mainWeaponData.length);

      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const selectedItemsN = randomIndexes.map((index) => mainWeaponData[index]);
    setselectedItemsN(selectedItemsN);
    localStorage.setItem("selectedItemsN2", JSON.stringify(selectedItemsN));
    settimeLeft(5);
  };

  useEffect(() => {
    const interval1 = setInterval(() => {
      changeSelectedItemsN();
    }, 5000);

    const savedItems = localStorage.getItem("selectedItemsN2");
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
  const imgUp =
    "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/stats/up.png";
  const imgDown =
    "https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/stats/down.png";

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
  const [idWeapon, setidWeapon] = useState<number>();

  const GetId = (selectedItem: any) => {
    const newMainWeaponData = [...mainWeaponData];
    const index = newMainWeaponData.findIndex(
      (item) => item.id === selectedItem.id
    );
    setidWeapon(index);
    setNoR("ShowStatsWeaponW2");
  };

  return (
    <>
      <div style={{ position: "absolute", color: "white" }}>{timeLeft}s</div>

      {Array.isArray(selectedItemsN) &&
        selectedItemsN
          .filter((data: any) => data.id > 1)
          .slice(0, 5)
          .map((data: any, index: any) => {
            if (data.tier !== "purple" && data.tier !== "red") {
              return (
                <button
                  id={`WeaponN${index}`}
                  className={`itemsForPurchasable ${index} `}
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
                  <img
                    className="OptionWeaponImg"
                    src={data.image}
                    alt={`${data.name} weapon`}
                  />
                  <div
                    className="UpgradeDmgStats"
                    style={{
                      backgroundImage: `url(${
                        data.dmgLvl0 > MainWeaponDmg ? imgUp : imgDown
                      })`,
                    }}
                  ></div>
                </button>
              );
            }
          })}
      {NoR === null ? null : (
        <div
          style={{
            display:
              NoR === "ShowStatsWeaponRare"
                ? "none"
                : NoR === "ShowStatsWeapon"
                ? "none"
                : "",
            position: "absolute",
            marginLeft: NoR === "ShowStatsWeaponW2" ? "-597px" : "",
            marginTop: NoR === "ShowStatsWeaponW2" ? "-160px" : "",
          }}
        >
          <ShowWeapon
            mainWeaponData={mainWeaponData}
            count={count}
            setCount={setCount}
            idWeapon={idWeapon}
            MainWeaponDmg={MainWeaponDmg}
            handleClick={handleClick}
            NoR={NoR}
            FullInv={FullInv}
          />
        </div>
      )}
    </>
  );
};

export default MainWeaponShopTwo;
