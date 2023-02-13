const Statistic = () => {
  const savedDmg = localStorage.getItem("selectedItemDmg");
  // do zrobienie statystyki AP main
  // nastepnie dodanie dmg do count per click
  // sprawdzenie kazdej broni
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
    </>
  );
};

export default Statistic;
