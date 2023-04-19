import "../assets/css/Normal/Lvl/Lvl.css";
import { formatNumber } from "./FormatNumber";
function Lvl({
  clickCount,
  maxClicks,
  fillCount,
}: {
  clickCount: number;
  maxClicks: number;
  fillCount: number;
}) {
  const progressBarStyle = {
    width: `${(clickCount / maxClicks) * 100}%`,
    backgroundColor: "goldenrod",
    height: "5px",
  };

  return (
    <>
      <div className="greyexp">
        <div className="progress-bar" style={progressBarStyle}></div>
        <div className="ActualLvl"> {fillCount}</div>
        <div className="progress-lvl">
          Next Lvl: {formatNumber(clickCount)}/
          {formatNumber(maxClicks.toFixed(0))}
        </div>
      </div>
    </>
  );
}

export default Lvl;
