/* eslint-disable array-callback-return */
import "../../assets/css/Normal/Characters/char.css";
import { CharacterSelectionStart } from "../../data/character/character";

const CharacterSelectionEq = ({ ce }: { ce: any }) => {
  const savedIdCharacter = localStorage.getItem("selectedCharacterID");

  return (
    <>
      {CharacterSelectionStart.filter(
        (data: any) => data.id === Number(savedIdCharacter)
      ).map((data: any) => (
        <div
          className="CharBox"
          style={{
            display: ce ? "flex" : "none",

            backgroundColor:
              data.name === "Divine Fist"
                ? "#855B1C"
                : data.name === "Nightfall"
                ? "#3E4572"
                : data.name === "Eleonore"
                ? "#6b4748"
                : data.name === "Joanna"
                ? "#76428A"
                : data.name === "Zephyr"
                ? "#B0AEA7"
                : data.name === "Merlin"
                ? "#5f212d"
                : data.name === "Luna"
                ? "#C167E6"
                : data.name === "Takeshi"
                ? "#939446"
                : "",
          }}
        >
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
                  ? "100px"
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

export default CharacterSelectionEq;
