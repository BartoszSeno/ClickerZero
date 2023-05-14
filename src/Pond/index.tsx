import { Link } from "react-router-dom";
import "../assets/css/Normal/Pond/pond.css";
import Fishing from "./Fishing";
import SellFish from "../hook/SellFish/Sell";
import { useState } from "react";

function Pond({
  FishData,
  setFishData,
  setCount,
  count,
  fishId,
  ValueCatch,
  setValueCatch,
}: {
  FishData: any;
  setFishData: any;
  setCount: any;
  count: number;
  fishId: any;
  ValueCatch: number;
  setValueCatch: any;
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
  function Close() {
    setopenSellShop(false);
  }

  return (
    <>
      <div id="pond">
        <Link to="/" className="BackToVillage" onMouseEnter={Close}></Link>
        <Fishing
          setFishCount={setFishCount}
          FishCount={FishCount}
          setFishData={setFishData}
          FishData={FishData}
          setLastCaughtFish={setLastCaughtFish}
          LastCaughtFish={LastCaughtFish}
        />
      </div>
    </>
  );
}

export default Pond;
