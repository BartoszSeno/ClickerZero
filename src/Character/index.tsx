/* eslint-disable array-callback-return */
import "../assets/css/Normal/Characters/char.css";
import { CharacterSelectionStart } from "../data/character/character";

const CharacterSelection = () => {
  return (
    <>
      <div id="CharacterSlect">
        {CharacterSelectionStart.map((data: any) => (
          <div className="Border">
            <div
              className="CharacterImg"
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize:
                  data.name === "Divine Fist"
                    ? "350px"
                    : data.name === "Eleonore"
                    ? "350px"
                    : data.name === "Nightfall"
                    ? "250px"
                    : data.name === "Luna"
                    ? "170px"
                    : data.name === "Takeshi"
                    ? "170px"
                    : "",
                backgroundPosition:
                  data.name === "Divine Fist"
                    ? "50% 260%"
                    : data.name === "Eleonore"
                    ? "50% 100%"
                    : data.name === "Nightfall"
                    ? "50% -100%"
                    : data.name === "Luna"
                    ? "50% 130%"
                    : "",
              }}
            ></div>
            <div className="NameCharacer">{data.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CharacterSelection;
