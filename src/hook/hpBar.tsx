import React, { useEffect, useState } from "react";
import "../assets/css/Normal/hpBar/hpbar.css";

const HealthBar = ({
  FullDefValue,
  DefBoosts,
}: {
  FullDefValue: number;
  DefBoosts: number;
}) => {
  const maxHP = (100 + Number(FullDefValue)) * DefBoosts;
  const [currentHP, setCurrentHP] = useState(100); // Inicjalne wartości currentHP

  const healthPercentage = (currentHP / maxHP) * 100;

  const barStyles = {
    width: `${healthPercentage}%`,
    backgroundColor: "red",
    transition: "width 0.5s ease-in-out",
  };

  const handleGetDmgClick = () => {
    if (currentHP === 0) {
      // Obsługa braku HP
    } else {
      setCurrentHP((prevHP) => prevHP - 10); // Odejmowanie 10 od bieżącego HP
    }
  };

  const handleRegenHpClick = () => {
    if (maxHP === currentHP) {
      // Obsługa pełnego HP
    } else {
      setCurrentHP((prevHP) => prevHP + 10); // Dodawanie 10 do bieżącego HP
    }
  };

  useEffect(() => {
    if (currentHP > maxHP) {
      setCurrentHP(maxHP);
    }
  }, [maxHP]);

  useEffect(() => {
    const regenInterval = setInterval(() => {
      if (currentHP < maxHP) {
        setCurrentHP((prevHP) => Math.min(prevHP + maxHP * 0.1, maxHP));
      }
    }, 5000);

    return () => clearInterval(regenInterval); // Czyszczenie interwału przy odmontowaniu komponentu
  }, [currentHP, maxHP]);

  return (
    <div className="HpBarContainer">
      <div className="testhp"></div>
      <div className="hpBar">
        <div style={barStyles}>
          <p>{`${currentHP.toFixed(0)}/${maxHP.toFixed(0)} HP`}</p>
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
