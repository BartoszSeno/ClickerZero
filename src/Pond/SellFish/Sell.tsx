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
}: {
  FishData: any;
  setFishData: any;
  setCount: any;
  count: number;
  setopenSellShop: any;
  openSellShop: boolean;
  OpenAndCloseSellShop: any;
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
        onClick={(e) => {
          e.stopPropagation();
          CloseSellShop();
        }}
      >
        <div
          className="openSellShop"
          onClick={(e) => {
            e.stopPropagation();
            OpenAndCloseSellShop();
          }}
        ></div>
        <div
          className="SellConteiner"
          onClick={(e) => {
            e.stopPropagation();
            setSellIsOpen(true);
          }}
          style={{ display: openSellShop && SellIsOpen ? "flex" : "none" }}
        >
          {FishData.map((data: any, index: number) => {
            const FishId = localStorage.getItem("selectedFishItemId");

            if (index === Number(FishId) - 1) {
              return (
                <span
                  className="FishForSell"
                  key={index}
                  style={{
                    backgroundImage: `url(${data.image}), url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/invenory/FishEq.png)`,
                  }}
                ></span>
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
