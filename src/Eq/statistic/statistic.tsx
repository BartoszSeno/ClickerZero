import { useEffect, useState } from "react";

const Statistic = ({
  savedDMG,
  mainWeaponDara,
  UpgradedDmgMainWeapon,
}: {
  savedDMG: any;
  mainWeaponDara: any;
  UpgradedDmgMainWeapon: any;
}) => {
  //main dmg that is gived per click
  return (
    <>
      <div id="statistic-container">
        <div className="MainWeaponDmg">
          <span>AP</span>
          <span className="statsDmg">{savedDMG}</span>
        </div>
        <div className="AweWeaponDmg">
          <span>AAP</span>
          <span className="statsDmg">Null</span>
        </div>
        <div className="SubWeaponDmg">
          <span>DP</span>
          <span className="statsDmg">Null</span>
        </div>
      </div>
      <div className="GS">
        <span>GS</span>
        <span className="statsDmg">{savedDMG}</span>
      </div>
    </>
  );
};

export default Statistic;
