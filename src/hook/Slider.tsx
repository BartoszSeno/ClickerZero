import Slider from "@mui/material/Slider";
import { FishArray } from "../data/fish/fish";
import { useState } from "react";

function SliderFish({ FishData }: { FishData: any }) {
  const [wartosc, setWartosc] = useState(10);

  const handleChange = (event: any, newValue: any) => {
    setWartosc(newValue);
  };

  const openSliderFishValue = localStorage.getItem("OSF");
  const parsedOpenSliderFishValue =
    openSliderFishValue !== null ? JSON.parse(openSliderFishValue) : false;

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
    </div>
  );
}

export default SliderFish;
