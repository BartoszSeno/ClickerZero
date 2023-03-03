/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "../assets/css/Normal/shop/shop.css";

const Shop = ({
  mainWeaponDara,
  setMainWeaponData,
  count,
  setCount,
  setHowMenyTimeBoughtWeapon,
}: {
  mainWeaponDara: any;
  setMainWeaponData: any;
  count: number;
  setCount: any;
  setHowMenyTimeBoughtWeapon: any;
}) => {
  const [selectedUpgrade, setSelectedUpgrade] = useState(0);

  const handleClick = (index: any) => {
    const newMainWeaponData = [...mainWeaponDara];
    newMainWeaponData[index].isBought = true;
    newMainWeaponData[index].count = (newMainWeaponData[index].count || 0) + 1;
    setMainWeaponData(newMainWeaponData);
    localStorage.setItem(
      "MainWeaponImageAndNameAndCost",
      JSON.stringify(newMainWeaponData)
    );
    setSelectedUpgrade(newMainWeaponData[index].cost);
    setHowMenyTimeBoughtWeapon(newMainWeaponData[index].count);

    console.log(count);
  };

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <>
      <div id="shop-container">
        {mainWeaponDara.map((data: any, index: any) => {
          if (!data.isBought || data.isBought) {
            return (
              <button
                className={`itemsForPurchasable ${index} `}
                key={index}
                onClick={(e) => {
                  handleClick(index);
                  setCount(count - data.cost);
                }}
                disabled={count < data.cost}
              >
                <span className={`itemName ${data.tier}C`}>{data.name}</span>
                <span className="PriceForPurchasable">
                  {data.cost}({data.count})
                </span>
                <img
                  className="OptionWeaponImg"
                  src={data.image}
                  alt={`${data.name} weapon`}
                />
              </button>
            );
          }
        })}
      </div>
    </>
  );
};

export default Shop;
