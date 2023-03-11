/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import "../assets/css/Normal/shop/shop.css";

const Shop = ({
  mainWeaponData,
  setMainWeaponData,
  count,
  setCount,
  SelectedOption,
  ShelfHeight,
  ArmorData,
  setArmorData,
}: {
  mainWeaponData: any;
  setMainWeaponData: any;
  count: number;
  setCount: any;
  SelectedOption: any;
  ShelfHeight: any;
  ArmorData: any;
  setArmorData: any;
}) => {
  const handleClick = (index: any) => {
    //MAIN WEAPON
    // Create a new array with the same elements as `mainWeaponData`
    const newMainWeaponData = [...mainWeaponData];
    // Set the `isBought` property of the item at `index` to `true`
    newMainWeaponData[index].isBought = true;
    // Increment the `count` property of the item at `index`, or set it to 1 if it doesn't exist
    newMainWeaponData[index].count = (newMainWeaponData[index].count || 0) + 1;
    // Update the `mainWeaponData` state with the new array
    setMainWeaponData(newMainWeaponData);
    // Set an item in local storage serialized as JSON
    localStorage.setItem(
      "MainWeaponImageAndNameAndCost",
      JSON.stringify(newMainWeaponData)
    );
  };
  const handleClickArmor = (index: any) => {
    //ARMOR
    const newArmorData = [...ArmorData];
    newArmorData[index].isBought = true;
    newArmorData[index].count = (newArmorData[index].count || 0) + 1;
    setArmorData(newArmorData);
    localStorage.setItem(
      "ArmorImageAndNameAndCost",
      JSON.stringify(newArmorData)
    );
  };

  // Set an effect to run whenever the `count` state changes
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <>
      <div id="shop-container">
        <div className="shelf" style={{ height: ShelfHeight }}>
          {mainWeaponData.map((data: any, index: any) => {
            if (data.isVisible) {
              return (
                <button
                  id={data.tier}
                  className={`itemsForPurchasable ${index} `}
                  key={index}
                  onClick={(e) => {
                    handleClick(index);
                    setCount(count - data.cost);
                  }}
                  disabled={count < data.cost}
                  style={{
                    display:
                      SelectedOption === data.tier || SelectedOption === ""
                        ? "flex"
                        : "none",
                  }}
                >
                  <div className="CostAndPrice">
                    <span className={`itemName ${data.tier}C`}>
                      {data.name}
                    </span>
                    <span className="PriceForPurchasable">
                      {data.cost}({data.count})
                    </span>
                  </div>

                  <img
                    className="OptionWeaponImg"
                    src={data.image}
                    alt={`${data.name} weapon`}
                  />
                </button>
              );
            }
          })}
          {ArmorData.map((data: any, index: any) => {
            if (data.isVisible) {
              return (
                <button
                  id={data.tier}
                  className={`itemsForPurchasable ${index} `}
                  key={index}
                  onClick={(e) => {
                    handleClickArmor(index);
                    setCount(count - data.cost);
                  }}
                  disabled={count < data.cost}
                  style={{
                    display:
                      SelectedOption === data.tier || SelectedOption === ""
                        ? "flex"
                        : "none",
                  }}
                >
                  <div className="CostAndPrice">
                    <span className={`itemName ${data.tier}C`}>
                      {data.name}
                    </span>
                    <span className="PriceForPurchasable">
                      {data.cost}({data.count})
                    </span>
                  </div>

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
      </div>
    </>
  );
};

export default Shop;
