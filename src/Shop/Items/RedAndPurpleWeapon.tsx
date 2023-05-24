/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import ShowWeapon from "../ShowStats/ShowWeapon";

const RedAndPurpleMainWeaponShop = ({
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
    setNoR("ShowStatsWeaponRare");
  };

  return (
    <>
      <div style={{ position: "absolute", color: "white" }}>{timeLeft}s</div>

      {Array.isArray(SelectedItems) &&
        SelectedItems.filter((data: any) => data.id > 1)
          .slice(0, 2)
          .map((data: any, index: any) => {
            return (
              <button
                id={`Weapon${index}`}
                className={`RAPitemsForPurchasable ${index} Weapon${index}`}
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
          })}
      <div
        style={{
          display: NoR === "ShowStatsWeapon" ? "none" : "",
          position: "absolute",
          marginLeft: NoR === "ShowStatsWeaponRare" ? "385px" : "",
          marginTop: NoR === "ShowStatsWeaponRare" ? "-305px" : "",
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
    </>
  );
};

export default RedAndPurpleMainWeaponShop;
