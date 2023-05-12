import { Link } from "react-router-dom";
import "../assets/css/Normal/Pond/pond.css";
import Fishing from "./Fishing";
import SellFish from "./SellFish/Sell";
import { useState } from "react";

function Pond({
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
  const [FishCount, setFishCount] = useState<number>(
    Number(localStorage.getItem("fish")) || 0
  );

  const [LastCaughtFish, setLastCaughtFish] = useState(0);

  const [openSellShop, setopenSellShop] = useState<boolean>(false);

  function OpenAndCloseSellShop() {
    setTimeout(() => {
      setopenSellShop(!openSellShop);
    }, 10);
  }
  return (
    <>
      <div id="pond">
        <Link
          to="/"
          className="BackToVillage"
          onMouseEnter={OpenAndCloseSellShop}
        ></Link>
        <Fishing
          setFishCount={setFishCount}
          FishCount={FishCount}
          setFishData={setFishData}
          FishData={FishData}
          setLastCaughtFish={setLastCaughtFish}
          LastCaughtFish={LastCaughtFish}
        />
        <SellFish
          FishData={FishData}
          setFishData={setFishData}
          setCount={setCount}
          count={count}
          setopenSellShop={setopenSellShop}
          openSellShop={openSellShop}
          OpenAndCloseSellShop={OpenAndCloseSellShop}
        />
      </div>
    </>
  );
}

export default Pond;
