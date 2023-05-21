import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

function ChessBoard() {
  const [game, setGame] = useState(new Chess());
  const [isGameOver, setIsGameOver] = useState(false); // Dodatkowy stan dla sprawdzenia, czy gra jest skończona
  //Let's perform a function on the game state

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  useEffect(() => {
    if (game.in_checkmate()) {
      setIsGameOver(true);
      alert("Szach-mat! Koniec gry.");
    }
  }, [game]);

  //Movement of computer
  function makeRandomMove() {
    const possibleMove = game.moves();

    //exit if the game is over

    if (game.game_over() || game.in_draw() || possibleMove.length === 0) return;
    //select random move

    const randomIndex = Math.floor(Math.random() * possibleMove.length);
    //play random move
    safeGameMutate((game) => {
      game.move(possibleMove[randomIndex]);
    });
  }

  //Perform an action when a piece is droped by a user

  function onDrop(source, target) {
    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: source,
        to: target,
        promotion: "q",
      });
    });
    //illegal move
    if (move == null) return false;
    //valid move
    setTimeout(makeRandomMove, 200);
    return true;
  }

  const customPiecesx = {
    //White Pice
    wP: ({ isDragging, squareWidth }) => (
      <div
        style={{
          width: squareWidth,
          height: squareWidth,
          cursor: "grab",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-35px",
            left: "0px",
            backgroundImage:
              "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/White/PawnWhite.png)",
            backgroundSize: "100px",
            backgroundRepeat: "no-repeat",
            width: squareWidth,
            height: squareWidth + 40,
            backgroundPositionY: "-30px",
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    wB: ({ isDragging, squareWidth }) => (
      <div
        style={{
          width: squareWidth,
          height: squareWidth,
          cursor: "grab",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-35px",
            left: "0px",
            backgroundImage:
              "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/White/BishopWhite.png)",
            backgroundSize: "100px",
            backgroundRepeat: "no-repeat",
            width: squareWidth,
            height: squareWidth + 40,
            backgroundPositionY: "-30px",
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    wN: ({ isDragging, squareWidth }) => (
      <div
        style={{
          width: squareWidth,
          height: squareWidth,
          cursor: "grab",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "0px",
            backgroundImage:
              "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/White/KnightWhite.png)",
            backgroundSize: "100px",
            backgroundRepeat: "no-repeat",
            width: squareWidth,
            height: squareWidth + 40,
            backgroundPositionY: "0px",
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    wR: ({ isDragging, squareWidth }) => (
      <div
        style={{
          width: squareWidth,
          height: squareWidth,
          cursor: "grab",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-70px",
            left: "2px",
            backgroundImage:
              "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/White/RookWhite.png)",
            backgroundSize: "90px",
            backgroundRepeat: "no-repeat",
            width: squareWidth,
            height: squareWidth + 100,
            backgroundPositionY: "20px",
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    wQ: ({ isDragging, squareWidth }) => (
      <div
        style={{
          width: squareWidth,
          height: squareWidth,
          cursor: "grab",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-55px",
            left: "-3px",
            backgroundImage:
              "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/White/QueenWhite.png)",
            backgroundSize: "100px",
            backgroundRepeat: "no-repeat",
            width: squareWidth + 10,
            height: squareWidth + 40,
            backgroundPositionY: "0px",
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    wK: ({ isDragging, squareWidth }) => (
      <div
        style={{
          width: squareWidth,
          height: squareWidth,
          cursor: "grab",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-65px",
            left: "-1px",
            backgroundImage:
              "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/White/KingWhite.png)",
            backgroundSize: "100px",
            backgroundRepeat: "no-repeat",
            width: squareWidth + 10,
            height: squareWidth + 40,
            backgroundPositionY: "0px",
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    //Black Pice
    bP: ({ isDragging, squareWidth }) => (
      <div
        style={{
          width: squareWidth,
          height: squareWidth,
          cursor: "grab",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-35px",
            left: "0px",
            backgroundImage:
              "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/Black/Pawn.png)",
            backgroundSize: "100px",
            backgroundRepeat: "no-repeat",
            width: squareWidth,
            height: squareWidth + 40,
            backgroundPositionY: "-30px",
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    bB: ({ isDragging, squareWidth }) => (
      <div
        style={{
          width: squareWidth,
          height: squareWidth,
          cursor: "grab",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-35px",
            left: "0px",
            backgroundImage:
              "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/Black/BishopBlack.png)",
            backgroundSize: "100px",
            backgroundRepeat: "no-repeat",
            width: squareWidth,
            height: squareWidth + 40,
            backgroundPositionY: "-30px",
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    bN: ({ isDragging, squareWidth }) => (
      <div
        style={{
          width: squareWidth,
          height: squareWidth,
          cursor: "grab",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-35px",
            left: "0px",
            backgroundImage:
              "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/Black/KnightBlack.png)",
            backgroundSize: "100px",
            backgroundRepeat: "no-repeat",
            width: squareWidth,
            height: squareWidth + 40,
            backgroundPositionY: "-30px",
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    bR: ({ isDragging, squareWidth }) => (
      <div
        style={{
          width: squareWidth,
          height: squareWidth,
          cursor: "grab",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-70px",
            left: "2px",
            backgroundImage:
              "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/Black/RookBlack.png)",
            backgroundSize: "90px",
            backgroundRepeat: "no-repeat",
            width: squareWidth,
            height: squareWidth + 100,
            backgroundPositionY: "20px",
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    bQ: ({ isDragging, squareWidth }) => (
      <div
        style={{
          width: squareWidth,
          height: squareWidth,
          cursor: "grab",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-55px",
            left: "-3px",
            backgroundImage:
              "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/Black/QueenBlack.png)",
            backgroundSize: "100px",
            backgroundRepeat: "no-repeat",
            width: squareWidth + 10,
            height: squareWidth + 40,
            backgroundPositionY: "0px",
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    bK: ({ isDragging, squareWidth }) => (
      <div
        style={{
          width: squareWidth,
          height: squareWidth,
          cursor: "grab",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-65px",
            left: "-1px",
            backgroundImage:
              "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/Black/KingBlack.png)",
            backgroundSize: "100px",
            backgroundRepeat: "no-repeat",
            width: squareWidth + 10,
            height: squareWidth + 40,
            backgroundPositionY: "0px",
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    // Add custom pieces for other chess pieces as needed
  };
  return (
    <>
      {isGameOver ? <div>Gra skończona</div> : null}{" "}
      <Chessboard
        position={game.fen()}
        onPieceDrop={onDrop}
        boardWidth={770}
        customBoardStyle={{
          borderRadius: "5px",
        }}
        customLightSquareStyle={{
          width: "96px",
          height: "96px",
          backgroundImage:
            "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/WhiteSquares.png)",
        }}
        customDarkSquareStyle={{
          width: "96px",
          height: "96px",
          backgroundImage:
            "url(https://raw.githubusercontent.com/BartoszSeno/ClickerZero/main/src/assets/MainImg/Chess/BlackSquares.png)",
        }}
        customPieces={customPiecesx}
      />
    </>
  );
}

export default ChessBoard;
