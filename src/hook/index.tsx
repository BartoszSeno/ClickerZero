import React, { useState } from "react";
import "../assets/css/Normal/hpBar/hpbar.css";

const HealthBar = () => {
  const maxHP = 100;
  const [currentHP, setCurrentHP] = useState(100); // Inicjalne wartości currentHP

  const healthPercentage = (currentHP / maxHP) * 100;

  const barStyles = {
    width: `${healthPercentage}%`,
    height: "30px",
    backgroundColor: "red",
    transition: "width 0.5s ease-in-out",
  };

  const handleGetDmgClick = () => {
    if (currentHP === 0) {
    } else {
      setCurrentHP((prevHP) => prevHP - 10); // Odejmowanie 10 od bieżącego HP
    }
  };

  const handleRegenHpClick = () => {
    if (maxHP === currentHP) {
    } else {
      setCurrentHP((prevHP) => prevHP + 10); // Odejmowanie 10 od bieżącego HP
    }
  };

  return (
    <div className="HpBarContainer">
      <div className="hpBar">
        <div style={barStyles}>
          <p>{`${currentHP}/${maxHP} HP`}</p>
        </div>
      </div>
      <div className="GetDmg" onClick={handleGetDmgClick}>
        Get Dmg
      </div>
      <div className="Regenhp" onClick={handleRegenHpClick}>
        Regen hp
      </div>
    </div>
  );
};

export default HealthBar;
