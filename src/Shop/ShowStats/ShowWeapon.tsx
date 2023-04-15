import { formatNumber } from "../../hook/FormatNumber";

const ShowWeapon = ({
  mainWeaponData,
  count,
  setCount,
  idWeapon,
  MainWeaponDmg,
  handleClick,
  NoR,
}: {
  mainWeaponData: any;
  count: number;
  setCount: any;
  idWeapon: any;
  MainWeaponDmg: any;
  handleClick: any;
  NoR: any;
}) => {
  return (
    <>
      {idWeapon === undefined ? null : (
        <div id="ShowStatsWeapon">
          <div
            className="weaponImgShow"
            id={String(idWeapon)}
            style={{
              backgroundImage: `url(${mainWeaponData[Number(idWeapon)].image})`,
              backgroundSize:
                idWeapon === 28
                  ? "16px"
                  : idWeapon === 24
                  ? "24px"
                  : idWeapon === 8
                  ? "24px"
                  : idWeapon === 26
                  ? "24px"
                  : idWeapon === 6
                  ? "28px"
                  : idWeapon === 35
                  ? "28px"
                  : idWeapon === 27
                  ? "50px"
                  : idWeapon === 9
                  ? "30px"
                  : idWeapon === 12
                  ? "30px"
                  : idWeapon === 21
                  ? "45px"
                  : idWeapon === 19
                  ? "50px"
                  : idWeapon === 4
                  ? "25px"
                  : "",
            }}
          ></div>
          <div className="WeaponName">
            {mainWeaponData[Number(idWeapon)].name}
          </div>
          <div className="WeaponDmg">
            <span>DMG: </span>
            <span
              className="dmgCount"
              style={{
                color:
                  mainWeaponData[Number(idWeapon)].dmgLvl0 > MainWeaponDmg
                    ? "#33CC33"
                    : "#EA0001",
              }}
            >
              {formatNumber(mainWeaponData[Number(idWeapon)].dmgLvl0)}
            </span>
            <button
              onClick={(e) => {
                handleClick(mainWeaponData[Number(idWeapon)]);
                setCount(count - mainWeaponData[Number(idWeapon)].cost);
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

export default ShowWeapon;
