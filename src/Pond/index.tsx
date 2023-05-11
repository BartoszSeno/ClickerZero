import { Link } from "react-router-dom";
import "../assets/css/Normal/Pond/pond.css";
import Fishing from "./Fishing";
import SellFish from "./SellFish/Sell";
import { useState } from "react";

function Pond({ FishData, setFishData }: { FishData: any; setFishData: any }) {
  const [FishCount, setFishCount] = useState<number>(
    Number(localStorage.getItem("fish")) || 0
  );

  return (
    <>
      <div id="pond">
        <Link to="/" className="BackToVillage"></Link>
        <Fishing
          setFishCount={setFishCount}
          FishCount={FishCount}
          setFishData={setFishData}
          FishData={FishData}
        />
        <SellFish />
      </div>
    </>
  );
}

export default Pond;
