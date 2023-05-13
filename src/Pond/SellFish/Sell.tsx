import { useState } from "react";
import SliderFish from "../../hook/Slider";

function SellFish({
  FishData,
  setFishData,
  setCount,
  count,
  setopenSellShop,
  openSellShop,
  OpenAndCloseSellShop,
  fishId,
}: {
  FishData: any;
  setFishData: any;
  setCount: any;
  count: number;
  setopenSellShop: any;
  openSellShop: boolean;
  OpenAndCloseSellShop: any;
  fishId: any;
}) {
  function CloseSellShop() {
    setopenSellShop(false);
  }

  const [SellIsOpen, setSellIsOpen] = useState<boolean>(true);

  localStorage.setItem("SelIsOpen", openSellShop.toString());

  return (
    <>
      <div
        id="SellShop"
        onMouseDown={(e) => {
          e.stopPropagation();
          CloseSellShop();
        }}
      >
        <div
          className="openSellShop"
          onMouseDown={(e) => {
            e.stopPropagation();
            OpenAndCloseSellShop();
          }}
        ></div>
        <div
          className="SellConteiner"
          onMouseDown={(e) => {
            e.stopPropagation();
            setSellIsOpen(true);
          }}
          style={{ display: openSellShop && SellIsOpen ? "flex" : "none" }}
        >
          {FishData.map((data: any, index: number) => {
            if (index === Number(fishId) - 1) {
              return (
                <span
                  className="FishForSell"
                  key={index}
                  style={{
                    backgroundImage: `url(${data.image}), url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/invenory/FishEq.png)`,
                  }}
                >
                  {data.id}
                </span>
              );
            } else {
              return null;
            }
          })}
          <SliderFish
            FishData={FishData}
            setFishData={setFishData}
            setCount={setCount}
            count={count}
          />
        </div>
      </div>
    </>
  );
}

export default SellFish;
