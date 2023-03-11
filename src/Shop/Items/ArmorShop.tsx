/* eslint-disable array-callback-return */
import React from "react";

const ArmorShop = ({
  count,
  setCount,
  SelectedOption,
  ArmorData,
  setArmorData,
}: {
  count: number;
  setCount: any;
  SelectedOption: any;
  ArmorData: any;
  setArmorData: any;
}) => {
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

  return (
    <>
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

export default ArmorShop;
