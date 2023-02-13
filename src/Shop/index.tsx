import React, { useState, useEffect } from "react";
import "../assets/css/Normal/shop/shop.css";
import { MainWeaponImageAndNameAndCost } from "../data/equipment/mainWeapon";

const Shop = () => {
  const [mainWeaponImageAndNameAndCost, setMainWeaponImageAndNameAndCost] =
    useState(MainWeaponImageAndNameAndCost);

  const handleClick = (index: any) => {
    const newMainWeaponData = [...mainWeaponImageAndNameAndCost];
    newMainWeaponData[index].isAvailable =
      !newMainWeaponData[index].isAvailable;
    setMainWeaponImageAndNameAndCost(newMainWeaponData);
    localStorage.setItem(
      "MainWeaponImageAndNameAndCost",
      JSON.stringify(newMainWeaponData)
    );
  };

  return (
    <>
      <div id="shop-container">
        {mainWeaponImageAndNameAndCost.map((data, index) => {
          if (!data.isAvailable) {
            return (
              <div
                className={`itemsForPurchasable ${index} `}
                key={index}
                onClick={(e) => handleClick(index)}
              >
                <img
                  className="OptionWeaponImg"
                  src={data.image}
                  alt={`${data.name} weapon`}
                />
                <span className={`itemName ${data.tier}C`}>{data.name}</span>
                <span className="PriceForPurchasable">{data.upgrade0}</span>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Shop;
