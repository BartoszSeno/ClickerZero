import { useEffect, useState } from "react";
import { formatNumber } from "./FormatNumber";

function PerClickPoints({
  FullCountPerClick,
  setFullCountPerClick,
  UpgradeOne,
  MainWeaponFullDmgText,
  FullArmorDefText,
  FullHelmetDefText,
  FullShoesDefText,
  FullGlovesDefText,
}: {
  FullCountPerClick: number;
  setFullCountPerClick: any;
  UpgradeOne: number;
  MainWeaponFullDmgText: number;
  FullArmorDefText: number;
  FullHelmetDefText: number;
  FullShoesDefText: number;
  FullGlovesDefText: number;
}) {
  //constant value ' 1 '

  const [OnePerClick] = useState<number>(1);
  // per-click update
  useEffect(() => {
    setFullCountPerClick(
      OnePerClick +
        UpgradeOne +
        (Number(MainWeaponFullDmgText) || 0) +
        (Number(FullArmorDefText) || 0) +
        (Number(FullHelmetDefText) || 0) +
        (Number(FullShoesDefText) || 0) +
        (Number(FullGlovesDefText) || 0)
    );
  }, [
    UpgradeOne,
    MainWeaponFullDmgText,
    setFullCountPerClick,
    OnePerClick,
    FullArmorDefText,
    FullHelmetDefText,
    FullShoesDefText,
    FullGlovesDefText,
  ]);

  return (
    <>
      <div className="MainWeaponFullDmgText count per click">
        Per Click: {formatNumber(FullCountPerClick.toFixed(0))}
      </div>
    </>
  );
}

export default PerClickPoints;
