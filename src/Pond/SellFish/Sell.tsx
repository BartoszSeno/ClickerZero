import { useState } from "react";
import SliderFish from "../../hook/Slider";
import Cat from "../../hook/CAT";

function SellFish({
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

  return (
    <>
      <div
        id="SellShop"
        onMouseDown={(e) => {
          e.stopPropagation();
          setSellFishByCat(false);
        }}
      >
        <div
          className="SellConteiner"
          onMouseDown={(e) => {
            e.stopPropagation();
            setSellIsOpen(true);
          }}
          style={{ display: SellFishByCat ? "flex" : "none" }}
        >
          <div className="ShopCat"></div>

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
      </div>
    </>
  );
}

export default SellFish;
