import { useEffect, useState } from "react";
import SliderFish from "../Slider";
import Cat from "../CAT";
import { CatArray } from "../../data/cat/cat";

function SellFish({
  numberCatP,
  FishData,
  setFishData,
  setCount,
  count,
  fishId,
  ValueCatch,
  setValueCatch,
  SellFishByCat,
  setSellFishByCat,
}: {
  numberCatP: number;
  FishData: any;
  setFishData: any;
  setCount: any;
  count: number;
  fishId: any;
  ValueCatch: number;
  setValueCatch: any;
  SellFishByCat: boolean;
  setSellFishByCat: any;
}) {
  const [SellIsOpen, setSellIsOpen] = useState<boolean>(true);

  const catArrayLength = CatArray.length;

  const [CatVariant, setCatVariant] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // generate a random number between 1 and 10
      const newNumber = Math.floor(Math.random() * catArrayLength);
      setCatVariant(newNumber);
    }, 5 * 60 * 100); // run every 5 minutes

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        id="SellShop"
        onMouseDown={(e) => {
          e.stopPropagation();
          setSellFishByCat(false);
        }}
      >
        {CatArray.map((data: any, index: number) => {
          if (index + 1 === catArrayLength) {
            return (
              <div
                className="SellConteiner"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  setSellIsOpen(true);
                }}
                style={{
                  display: SellFishByCat ? "flex" : "none",
                  backgroundImage: `url(${data.BG})`,
                }}
              >
                {data.Name}
                <div
                  className="ShopCat"
                  style={{
                    backgroundImage: `url(${CatArray[numberCatP].BigSit})`,
                  }}
                ></div>
                <SliderFish
                  FishData={FishData}
                  setFishData={setFishData}
                  setCount={setCount}
                  count={count}
                  ValueCatch={ValueCatch}
                  setValueCatch={setValueCatch}
                  fishId={fishId}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

export default SellFish;
