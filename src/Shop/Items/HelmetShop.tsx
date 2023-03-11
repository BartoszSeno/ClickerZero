/* eslint-disable array-callback-return */
import React from "react";

const HelmetShop = ({
  count,
  setCount,
  SelectedOption,
  HelmetData,
  setHelmetData,
}: {
  count: number;
  setCount: any;
  SelectedOption: any;
  HelmetData: any;
  setHelmetData: any;
}) => {
  const handleClickHelmet = (index: any) => {
    //Helmet
    const newHelmetData = [...HelmetData];
    newHelmetData[index].isBought = true;
    newHelmetData[index].count = (newHelmetData[index].count || 0) + 1;
    setHelmetData(newHelmetData);
    localStorage.setItem(
      "HelmetImageAndNameAndCost",
      JSON.stringify(newHelmetData)
    );
  };

  return (
    <>
      {HelmetData.map((data: any, index: any) => {
        if (data.isVisible) {
          return (
            <button
              id={data.tier}
              className={`itemsForPurchasable ${index} `}
              key={index}
              onClick={(e) => {
                handleClickHelmet(index);
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

export default HelmetShop;
