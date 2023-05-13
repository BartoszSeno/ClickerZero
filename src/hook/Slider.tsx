import Slider from "@mui/material/Slider";
import { FishArray } from "../data/fish/fish";
import { useEffect, useState } from "react";
import { formatNumber } from "./FormatNumber";

function SliderFish({
  FishData,
  setFishData,
  setCount,
  count,
  ValueCatch,
  setValueCatch,
  fishId,
}: {
  FishData: any;
  setFishData: any;
  setCount: any;
  count: number;
  ValueCatch: number;
  setValueCatch: any;
  fishId: number;
}) {
  const handleChange = (event: any, newValue: any) => {
    setValueCatch(newValue);
  };

  const FishId = localStorage.getItem("selectedFishItemId");

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  function SellFish(index: any) {
    const item = FishArray[index - 1];
    const newFishData = [...FishData];
    console.log(item.catchCount);
    if (newFishData[index - 1].catchCount > 0) {
      newFishData[index - 1].catchCount =
        newFishData[index - 1].catchCount - ValueCatch;
      const FullSell = item.Cost * ValueCatch;
      setFishData(newFishData);
      setCount(count + FullSell);
      localStorage.setItem("FishArray", JSON.stringify(newFishData));
      if (newFishData[index - 1].catchCount === 0) {
        console.log("sprzedane");
        newFishData[index - 1].isBought = false;
        setFishData(newFishData);
        localStorage.setItem("FishArray", JSON.stringify(newFishData));
        localStorage.setItem("selectedFishItemId", "0");
      } else {
      }
    } else {
    }
  }

  return (
    <div className="Slider">
      {FishData.map((data: any, index: number) => {
        if (index === Number(FishId) - 1) {
          return (
            <Slider
              key={index}
              min={1}
              max={Number(data.catchCount)}
              value={ValueCatch}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
              valueLabelDisplay="on"
              sx={{
                color: "#83a448",
                width: "200px",
                "& .MuiSlider-thumb": {
                  borderRadius: "0px",
                  color: "transparent",
                  backgroundImage: `url(${data.image})`,
                  backgroundPosition: "center",
                  backgroundSize: `${
                    ValueCatch > 300 ? "160" : 100 + Math.floor(ValueCatch / 5)
                  }px`,
                  transform: "rotate(20deg)",
                  marginTop: "-45px",
                  marginLeft: "-50px",
                  width: "100px",
                  height: "100px",
                  "&:hover": {
                    boxShadow: "none",
                    border: "none",
                    outline: "none",
                  },
                  "&:not(hover)": {
                    boxShadow: "none",
                    border: "none",
                    outline: "none",
                  },
                  "&:before": {
                    boxShadow: "none",
                  },
                  "& .MuiSlider-valueLabel": {
                    backgroundColor: "transparent",
                    height: "0px",
                    transform: "rotate(-20deg)",
                    top: "-30px",
                    fontFamily: "Alagard",
                    right: "68px",
                    "& > span": {
                      backgroundColor: "transparent",
                      marginTop: "50px",
                      height: "0px",
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#000",
                      zIndex: "-1",
                    },
                  },
                },
                "& .MuiSlider-track": {
                  color: "#667a31",
                  height: "8px",
                  borderRadius: "0px",
                },
              }}
            />
          );
        } else {
          return null;
        }
      })}

      {FishData.map((data: any, index: number) => {
        const FullSell = data.Cost * ValueCatch;

        if (index === Number(FishId) - 1) {
          return (
            <>
              <button
                className="BS"
                onClick={(e) => {
                  SellFish(data.id);
                }}
              >
                SELL FOR: {formatNumber(FullSell)}
              </button>
            </>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default SliderFish;
