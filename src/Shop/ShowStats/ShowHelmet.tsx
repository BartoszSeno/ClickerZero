import { formatNumber } from "../../hook/FormatNumber";

const ShowHelmet = ({
  HelmetData,
  count,
  setCount,
  idHelmet,
  HelmetDef,
  handleClickHelmet,
  AoSoH,
  FullInv,
}: {
  HelmetData: any;
  count: number;
  setCount: any;
  idHelmet: any;
  HelmetDef: any;
  handleClickHelmet: any;
  AoSoH: any;
  FullInv: any;
}) => {
  return (
    <>
      {idHelmet === undefined ? null : (
        <div id="ShowStatsArmor">
          <div
            className="ArmorImgShow"
            id={String(idHelmet)}
            style={{
              backgroundImage: `url(${HelmetData[Number(idHelmet)].image})`,
              backgroundSize: idHelmet === 10 ? "50px" : "",
            }}
          ></div>
          <div className="ArmorName">{HelmetData[Number(idHelmet)].name}</div>
          <span className="cost">
            Cost: {HelmetData[Number(idHelmet)].cost}
          </span>
          <div className="ArmorDef">
            <span>DEf: </span>
            <span
              className="DefCount"
              style={{
                color:
                  HelmetData[Number(idHelmet)].defLvl0 > HelmetDef
                    ? "#33CC33"
                    : "#EA0001",
              }}
            >
              {formatNumber(HelmetData[Number(idHelmet)].defLvl0)}
            </span>
          </div>
          <button
            onClick={(e) => {
              handleClickHelmet(HelmetData[Number(idHelmet)]);
              setCount(count - HelmetData[Number(idHelmet)].cost);
            }}
            disabled={
              count < HelmetData[Number(idHelmet)].cost ||
              FullInv === true ||
              HelmetData[Number(idHelmet)].isBought === true
            }
          >
            Purchase
          </button>
        </div>
      )}
    </>
  );
};

export default ShowHelmet;
