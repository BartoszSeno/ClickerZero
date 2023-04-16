import { formatNumber } from "../../hook/FormatNumber";

const ShowShoes = ({
  ShoesData,
  count,
  setCount,
  idShoes,
  ShoesDef,
  handleClickShoes,
  AoSoH,
}: {
  ShoesData: any;
  count: number;
  setCount: any;
  idShoes: any;
  ShoesDef: any;
  handleClickShoes: any;
  AoSoH: any;
}) => {
  return (
    <>
      {idShoes === undefined ? null : (
        <div id="ShowStatsArmor">
          <div
            className="ArmorImgShow"
            id={String(idShoes)}
            style={{
              backgroundImage: `url(${ShoesData[Number(idShoes)].image})`,
              backgroundSize: idShoes === 16 ? "60px" : "",
            }}
          ></div>
          <div className="ArmorName">{ShoesData[Number(idShoes)].name}</div>
          <div className="ArmorDef">
            <span>DEf: </span>
            <span
              className="DefCount"
              style={{
                color:
                  ShoesData[Number(idShoes)].defLvl0 > ShoesDef
                    ? "#33CC33"
                    : "#EA0001",
              }}
            >
              {formatNumber(ShoesData[Number(idShoes)].defLvl0)}
            </span>
          </div>
          <button
            onClick={(e) => {
              handleClickShoes(ShoesData[Number(idShoes)]);
              setCount(count - ShoesData[Number(idShoes)].cost);
            }}
          >
            Purchase
          </button>
        </div>
      )}
    </>
  );
};

export default ShowShoes;
