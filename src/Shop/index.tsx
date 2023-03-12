/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import "../assets/css/Normal/shop/shop.css";
import MainWeaponShop from "./Items/MainWeaponShop";
import ArmorShop from "./Items/ArmorShop";
import HelmetShop from "./Items/HelmetShop";
import ShoesShop from "./Items/ShoesShop";

const Shop = ({
  mainWeaponData,
  setMainWeaponData,
  count,
  setCount,
  SelectedOption,
  ShelfHeight,
  ArmorData,
  setArmorData,
  HelmetData,
  setHelmetData,
  ShoesData,
  setShoesData,
}: {
  mainWeaponData: any;
  setMainWeaponData: any;
  count: number;
  setCount: any;
  SelectedOption: any;
  ShelfHeight: any;
  ArmorData: any;
  setArmorData: any;
  HelmetData: any;
  setHelmetData: any;
  ShoesData: any;
  setShoesData: any;
}) => {
  // Set an effect to run whenever the `count` state changes
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <>
      <div id="shop-container">
        <div className="shelf" style={{ height: ShelfHeight }}>
          <MainWeaponShop
            mainWeaponData={mainWeaponData}
            setMainWeaponData={setMainWeaponData}
            count={count}
            setCount={setCount}
            SelectedOption={SelectedOption}
          />
          <ArmorShop
            ArmorData={ArmorData}
            setArmorData={setArmorData}
            count={count}
            setCount={setCount}
            SelectedOption={SelectedOption}
          />
          <HelmetShop
            HelmetData={HelmetData}
            setHelmetData={setHelmetData}
            count={count}
            setCount={setCount}
            SelectedOption={SelectedOption}
          />
          <ShoesShop
            ShoesData={ShoesData}
            setShoesData={setShoesData}
            count={count}
            setCount={setCount}
            SelectedOption={SelectedOption}
          />
        </div>
      </div>
    </>
  );
};

export default Shop;
