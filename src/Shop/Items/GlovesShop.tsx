/* eslint-disable array-callback-return */
import React from "react";

const GlovesShop = ({
  count,
  setCount,
  SelectedOption,
  GlovesData,
  setGlovesData,
}: {
  count: number;
  setCount: any;
  SelectedOption: any;
  GlovesData: any;
  setGlovesData: any;
}) => {
  const handleClickGloves = (index: any) => {
    //Gloves
    const newGlovesData = [...GlovesData];
    newGlovesData[index].isBought = true;
    newGlovesData[index].count = (newGlovesData[index].count || 0) + 1;
    setGlovesData(newGlovesData);
    localStorage.setItem(
      "GlovesImageAndNameAndCost",
      JSON.stringify(newGlovesData)
    );
  };

  return (
    <>
      {GlovesData.map((data: any, index: any) => {
        if (data.isVisible) {
          return (
            <button
              id={data.tier}
              className={`itemsForPurchasable ${index} `}
              key={index}
              onClick={(e) => {
                handleClickGloves(index);
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

export default GlovesShop;
