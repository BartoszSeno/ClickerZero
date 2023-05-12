import SliderFish from "../../hook/Slider";

function SellFish({
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
  return (
    <>
      <div id="SellShop">
        <div className="SellConteiner">
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
