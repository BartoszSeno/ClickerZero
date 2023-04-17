/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import "../assets/css/Normal/Characters/char.css";
import { CharacterSelectionStart } from "../data/character/character";

const CharacterSelection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCharacterId, setSelectedCharacterId] = useState<number>();
  const [ItsSelected, setItsSelected] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // Add a loading state

  const handleCharacterClick = (characterId: number) => {
    setSelectedCharacterId(characterId);
    setItsSelected(true);
    localStorage.setItem("selectedCharacterID", characterId.toString());
    localStorage.setItem("ItsSelected", "true"); // Save ItsSelected value in localStorage
  };

  useEffect(() => {
    const savedItsSelected = localStorage.getItem("ItsSelected");
    if (savedItsSelected === "true") {
      setItsSelected(true);
    }
    setLoading(false); // Set loading to false after fetching data from localStorage
  }, []);

  if (loading) {
    return <div>...</div>; // Render a loading message or spinner while data is being fetched
  }

  console.log(selectedCharacterId);

  const characters = [...CharacterSelectionStart, ...CharacterSelectionStart];

  const handleArrowClick = (direction: string) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? characters.length / 2 - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (characters.length / 2));
    }
  };

  return (
    <>
      <div
        id="CharacterSlect"
        style={{ display: ItsSelected ? "none" : "false" }}
      >
        <div className="Arrow" onClick={() => handleArrowClick("left")}>
          {"<"}
        </div>
        <div className="CharacterSelection">
          <h1>Character Selection</h1>
        </div>
        {characters.slice(currentIndex, currentIndex + 4).map((data: any) => (
          <div
            className="Border"
            onClick={() => handleCharacterClick(data.id)}
            style={{
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
              className="CharacterImg"
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize:
                  data.name === "Divine Fist"
                    ? "350px"
                    : data.name === "Nightfall"
                    ? "250px"
                    : data.name === "Joanna"
                    ? "300px"
                    : data.name === "Luna"
                    ? "170px"
                    : data.name === "Takeshi"
                    ? "170px"
                    : "",
                backgroundPosition:
                  data.name === "Divine Fist"
                    ? "50% 260%"
                    : data.name === "Eleonore"
                    ? "50% -370%"
                    : data.name === "Joanna"
                    ? "70% 100%"
                    : data.name === "Nightfall"
                    ? "50% -100%"
                    : data.name === "Luna"
                    ? "50% 132%"
                    : data.name === "Takeshi"
                    ? "50% 102%"
                    : "",
              }}
            ></div>
            <span className="flor"></span>
            <div className="NameCharacer">{data.name}</div>
            <div className="TwoLine">
              <span
                className="Line"
                style={{
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
              ></span>
              <span
                className="Line"
                style={{
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
              ></span>
            </div>
          </div>
        ))}
        <div className="Arrow" onClick={() => handleArrowClick("right")}>
          {">"}
        </div>
      </div>
    </>
  );
};

export default CharacterSelection;
