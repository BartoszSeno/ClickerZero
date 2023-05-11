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
                  style={{ backgroundImage: `url(${data.image})` }}
                ></span>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default SellFish;
