/* eslint-disable array-callback-return */
import React from "react";

const MainWeaponShop = ({
  mainWeaponData,
  setMainWeaponData,
  count,
  setCount,
  SelectedOption,
}: {
  mainWeaponData: any;
  setMainWeaponData: any;
  count: number;
  setCount: any;
  SelectedOption: any;
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

  return (
    <>
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
                <span className={`itemName ${data.tier}C`}>{data.name}</span>
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
    </>
  );
};

export default MainWeaponShop;
