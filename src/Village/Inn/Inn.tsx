import { useState } from "react";
import "../../assets/css/Normal/Village/leftVillage.css";
import CardGame from "../../hook/CardGame";
import Cat from "../../hook/CAT";

function InnC({
  OpenInn,
  setOpenInn,
  numberCatP,
  OpenSellShop,
}: {
  OpenInn: boolean;
  setOpenInn: any;
  numberCatP: number;
  OpenSellShop: any;
}) {
  const [InIsOpen, setInIsOpen] = useState<boolean>(true);
  const [OpenCardGame, setOpenCardGame] = useState<boolean>(false);

  function CloseInn() {
    setOpenInn(false);
  }

  function OpenAndCloseCardGame() {
    setOpenCardGame(!OpenCardGame);
    console.log(OpenCardGame);
  }

  return (
    <>
      <div
        id="MainInn"
        style={{ display: OpenInn ? "flex" : "none" }}
        onClick={(e) => {
          e.stopPropagation();
          CloseInn();
        }}
      >
        <div
          className="InnG"
          style={{
            display: InIsOpen ? "flex" : "none",
            clipPath: OpenCardGame
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "",
            height: OpenCardGame ? "100%" : "",
            width: OpenCardGame ? "100%" : "",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setInIsOpen(true);
          }}
        >
          {numberCatP === 5 && (
            <div className="Cat-p5" onClick={OpenSellShop}>
              <Cat />
            </div>
          )}
          <div id="CardGameC" onClick={OpenAndCloseCardGame} style={{}}>
            <CardGame
              OpenCardGame={OpenCardGame}
              setOpenCardGame={setOpenCardGame}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default InnC;
