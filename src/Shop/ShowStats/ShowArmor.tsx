import { formatNumber } from "../../hook/FormatNumber";

const ShowArmor = ({
  ArmorData,
  count,
  setCount,
  idArmor,
  ArmorDef,
  handleClickArmor,
  AoSoH,
}: {
  ArmorData: any;
  count: number;
  setCount: any;
  idArmor: any;
  ArmorDef: any;
  handleClickArmor: any;
  AoSoH: any;
}) => {
  return (
    <>
      {idArmor === undefined ? null : (
        <div id="ShowStatsArmor">
          <div
            className="ArmorImgShow"
            id={String(idArmor)}
            style={{
              backgroundImage: `url(${ArmorData[Number(idArmor)].image})`,
              backgroundSize:
                idArmor === 10 ? "90px" : idArmor === 9 ? "85px" : "",
            }}
          ></div>
          <div className="ArmorName">{ArmorData[Number(idArmor)].name}</div>
          <div className="ArmorDef">
            <span>DEf: </span>
            <span
              className="DefCount"
              style={{
                color:
                  ArmorData[Number(idArmor)].defLvl0 > ArmorDef
                    ? "#33CC33"
                    : "#EA0001",
              }}
            >
              {formatNumber(ArmorData[Number(idArmor)].defLvl0)}
            </span>
          </div>
          <button
            onClick={(e) => {
              handleClickArmor(ArmorData[Number(idArmor)]);
              setCount(count - ArmorData[Number(idArmor)].cost);
            }}
          >
            Purchase
          </button>
        </div>
      )}
    </>
  );
};

export default ShowArmor;
