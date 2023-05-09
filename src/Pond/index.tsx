import { Link } from "react-router-dom";
import "../assets/css/Normal/Pond/pond.css";
import Fishing from "./Fishing";
import { useState } from "react";

function Pond() {
  const [FishCount, setFishCount] = useState<number>(
    Number(localStorage.getItem("fish")) || 0
  );

  return (
    <>
      <div id="pond">
        <Link to="/" className="BackToVillage"></Link>
        <Fishing setFishCount={setFishCount} FishCount={FishCount} />
        <span className="FC">
          <p>Fish</p>
          <p>{FishCount}</p>
        </span>
      </div>
    </>
  );
}

export default Pond;
