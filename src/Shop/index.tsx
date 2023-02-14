import React, { useState, useEffect } from "react";
import "../assets/css/Normal/shop/shop.css";

const Shop = ({
  mainWeaponDara,
  setMainWeaponData,
}: {
  mainWeaponDara: any;
  setMainWeaponData: any;
}) => {
  const handleClick = (index: any) => {
    const newMainWeaponData = [...mainWeaponDara];
    newMainWeaponData[index].isAvailable = true;
    setMainWeaponData(newMainWeaponData);
    localStorage.setItem(
      "MainWeaponImageAndNameAndCost",
      JSON.stringify(newMainWeaponData)
    );
  };

  return (
    <>
      <div id="shop-container">
        {mainWeaponDara.map((data: any, index: any) => {
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
