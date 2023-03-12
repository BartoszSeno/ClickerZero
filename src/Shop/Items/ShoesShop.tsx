/* eslint-disable array-callback-return */
import React from "react";

const ShoesShop = ({
  count,
  setCount,
  SelectedOption,
  ShoesData,
  setShoesData,
}: {
  count: number;
  setCount: any;
  SelectedOption: any;
  ShoesData: any;
  setShoesData: any;
}) => {
  const handleClickShoes = (index: any) => {
    //Shoes
    const newShoesData = [...ShoesData];
    newShoesData[index].isBought = true;
    newShoesData[index].count = (newShoesData[index].count || 0) + 1;
    setShoesData(newShoesData);
    localStorage.setItem(
      "ShoesImageAndNameAndCost",
      JSON.stringify(newShoesData)
    );
  };

  return (
    <>
      {ShoesData.map((data: any, index: any) => {
        if (data.isVisible) {
          return (
            <button
              id={data.tier}
              className={`itemsForPurchasable ${index} `}
              key={index}
              onClick={(e) => {
                handleClickShoes(index);
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

export default ShoesShop;
