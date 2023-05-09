import { Link } from "react-router-dom";
import "../assets/css/Normal/Pond/pond.css";
import Fishing from "../hook/Fishing";

function Pond() {
  return (
    <>
      <div id="pond">
        <Link to="/" className="BackToVillage"></Link>
        <Fishing />
      </div>
    </>
  );
}

export default Pond;
