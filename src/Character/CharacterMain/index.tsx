/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import "../../assets/css/Normal/Characters/char.css";
import { CharacterSelectionStart } from "../../data/character/character";

const CharacterMain = () => {
  const savedIdCharacter = localStorage.getItem("selectedCharacterID");

  return (
    <>
      {CharacterSelectionStart.filter(
        (data: any) => data.id === Number(savedIdCharacter)
      ).map((data: any) => (
        <div className="CharMainBox">
          <div
            className="CharacterImgEq"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize:
                data.name === "Zephyr"
                  ? "160px"
                  : data.name === "Nightfall"
                  ? "150px"
                  : data.name === "Merlin"
                  ? "130px"
                  : data.name === "Luna"
                  ? "100px"
                  : data.name === "Takeshi"
                  ? "100px"
                  : "",
            }}
          ></div>
        </div>
      ))}
    </>
  );
};

export default CharacterMain;
