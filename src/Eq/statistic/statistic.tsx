const Statistic = () => {
  const savedDmg = localStorage.getItem("selectedItemDmg");
  // do zrobienie statystyki AP main
  // nastepnie dodanie dmg do count per click
  // sprawdzenie kazdej broni

  //main dmg that is gived per click

  const MainDmg = savedDmg;
  return (
    <>
      <div id="statistic-container">
        <div className="MainWeaponDmg">
          <span>AP</span>
          <span className="statsDmg">{savedDmg}</span>
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
        <span className="statsDmg">{MainDmg}</span>
      </div>
    </>
  );
};

export default Statistic;
