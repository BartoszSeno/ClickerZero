import SliderFish from "../../hook/Slider";

function SellFish({ FishData }: { FishData: any }) {
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
                    backgroundImage: `url(${data.image}), url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/invenory/emptSlot.png)`,
                  }}
                ></span>
              );
            } else {
              return null;
            }
          })}
          <SliderFish FishData={FishData} />
        </div>
      </div>
    </>
  );
}

export default SellFish;
