/* eslint-disable array-callback-return */
import React from "react";

const ShieldAndDaggerShop = ({
  count,
  setCount,
  SelectedOption,
  ShieldAndDaggerData,
  setShieldAndDaggerData,
}: {
  count: number;
  setCount: any;
  SelectedOption: any;
  ShieldAndDaggerData: any;
  setShieldAndDaggerData: any;
}) => {
  const handleClickShieldAndDagger = (index: any) => {
    //ShieldAndDagger
    const newShieldAndDaggerData = [...ShieldAndDaggerData];
    newShieldAndDaggerData[index].isBought = true;
    newShieldAndDaggerData[index].count =
      (newShieldAndDaggerData[index].count || 0) + 1;
    setShieldAndDaggerData(newShieldAndDaggerData);
    localStorage.setItem(
      "ShieldAndDaggerImageAndNameAndCost",
      JSON.stringify(newShieldAndDaggerData)
    );
  };

  return (
    <>
      {ShieldAndDaggerData.map((data: any, index: any) => {
        if (data.isVisible) {
          return (
            <button
              id={data.tier}
              className={`itemsForPurchasable ${index} `}
              key={index}
              onClick={(e) => {
                handleClickShieldAndDagger(index);
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

export default ShieldAndDaggerShop;
