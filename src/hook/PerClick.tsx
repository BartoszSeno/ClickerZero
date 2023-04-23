import { useEffect, useState } from "react";
import { formatNumber } from "./FormatNumber";

function PerClickPoints({
  FullCountPerClick,
  setFullCountPerClick,
  UpgradeOne,
  FullDmgValue,
  FullDefValue,
}: {
  FullCountPerClick: number;
  setFullCountPerClick: any;
  UpgradeOne: number;
  FullDmgValue: number;
  FullDefValue: number;
}) {
  //constant value ' 1 '

  const [OnePerClick] = useState<number>(1);
  // per-click update
  useEffect(() => {
    setFullCountPerClick(
      OnePerClick +
        UpgradeOne +
        (Number(FullDmgValue) || 0) +
        (Number(FullDefValue) || 0)
    );
  }, [
    UpgradeOne,
    FullDmgValue,
    setFullCountPerClick,
    OnePerClick,
    FullDefValue,
  ]);

  return (
    <>
      <div className="countPerClick">
        Per Click: {formatNumber(FullCountPerClick.toFixed(0))}
      </div>
    </>
  );
}

export default PerClickPoints;
