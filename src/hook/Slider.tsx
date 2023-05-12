import Slider from "@mui/material/Slider";
import { FishArray } from "../data/fish/fish";
import { useEffect, useState } from "react";
import { formatNumber } from "./FormatNumber";

function SliderFish({
  FishData,
  setFishData,
  setCount,
  count,
}: {
  FishData: any;
  setFishData: any;
  setCount: any;
  count: number;
}) {
  const [wartosc, setWartosc] = useState(1);

  const handleChange = (event: any, newValue: any) => {
    setWartosc(newValue);
  };

  const openSliderFishValue = localStorage.getItem("OSF");

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  function SellFish(index: any) {
    const item = FishArray[index - 1];
    const newFishData = [...FishData];
    console.log(item.catchCount);
    if (newFishData[index - 1].catchCount > 0) {
      newFishData[index - 1].catchCount =
        newFishData[index - 1].catchCount - wartosc;
      const FullSell = item.Cost * wartosc;
      setFishData(newFishData);
      setCount(count + FullSell);
      localStorage.setItem("FishArray", JSON.stringify(newFishData));
      if (newFishData[index - 1].catchCount === 0) {
        console.log("sprzedane");
        newFishData[index - 1].isBought = false;
        setFishData(newFishData);
        localStorage.setItem("FishArray", JSON.stringify(newFishData));
      } else {
      }
    } else {
    }
  }

  return (
    <div className="Slider">
      {FishData.map((data: any, index: number) => {
        const FishId = localStorage.getItem("selectedFishItemId");

        if (index === Number(FishId) - 1) {
          return (
            <Slider
              key={index}
              min={1}
              max={Number(data.catchCount)}
              value={wartosc}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
              sx={{
                width: "200px",
                color: "success.main",
                "& .MuiSlider-thumb": {
                  borderRadius: "0px",
                },
              }}
            />
          );
        } else {
          return null;
        }
      })}
      <div className="CatchValue">Wartość : {wartosc}</div>
      <div>
        {FishData.map((data: any, index: number) => {
          const FishId = localStorage.getItem("selectedFishItemId");
          const FullSell = data.Cost * wartosc;

          if (index === Number(FishId) - 1) {
            return (
              <>
                <div className="SilverAmounght">
                  Silver: {formatNumber(FullSell)}
                </div>
                <button
                  className="BS"
                  onClick={(e) => {
                    SellFish(data.id);
                  }}
                >
                  SELL
                </button>
              </>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default SliderFish;
