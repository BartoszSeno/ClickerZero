import { formatNumber } from "../../hook/FormatNumber";

const ShowArmor = ({
  mainArmorData,
  count,
  setCount,
  idArmor,
  MainArmorDmg,
  handleClick,
  NoR,
}: {
  mainArmorData: any;
  count: number;
  setCount: any;
  idArmor: any;
  MainArmorDmg: any;
  handleClick: any;
  NoR: any;
}) => {
  return (
    <>
      {idArmor === undefined ? null : (
        <div id="ShowStatsArmor">
          <div
            className="ArmorImgShow"
            id={String(idArmor)}
            style={{
              backgroundImage: `url(${mainArmorData[Number(idArmor)].image})`,
              backgroundSize: idArmor === 28 ? "16px" : "",
            }}
          ></div>
          <div className="ArmorName">{mainArmorData[Number(idArmor)].name}</div>
          <div className="ArmorDmg">
            <span>DMG: </span>
            <span
              className="dmgCount"
              style={{
                color:
                  mainArmorData[Number(idArmor)].dmgLvl0 > MainArmorDmg
                    ? "#33CC33"
                    : "#EA0001",
              }}
            >
              {formatNumber(mainArmorData[Number(idArmor)].dmgLvl0)}
            </span>
            <button
              onClick={(e) => {
                handleClick(mainArmorData[Number(idArmor)]);
                setCount(count - mainArmorData[Number(idArmor)].cost);
              }}
            >
              Purchase
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowArmor;
