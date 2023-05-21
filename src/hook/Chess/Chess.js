import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

function ChessBoard() {
  const [game, setGame] = useState(new Chess());
  const [isGameOver, setIsGameOver] = useState(false); // Dodatkowy stan dla sprawdzenia, czy gra jest skończona
  const [moveFrom, setMoveFrom] = useState("");
  const [rightClickedSquares, setRightClickedSquares] = useState({});
  const [moveSquares, setMoveSquares] = useState({});
  const [optionSquares, setOptionSquares] = useState({});

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }
  const winner = game.turn() === "w" ? "Black" : "White";

  function WiningRewards() {
    console.log("nagroda");
  }

  function resetBoard() {
    game.reset(); // Restart board to default
  }

  //Check who win and if its win or draw
  useEffect(() => {
    console.log(game.turn());
    if (game.in_checkmate()) {
      setIsGameOver(true);
      alert(`Szach-mat! Wygrywają: ${winner}`);
      if (winner === "Białe") {
        WiningRewards();
      }
      resetBoard();
    } else if (game.in_draw()) {
      setIsGameOver(true);
      alert(`Brak ruchu? Koniec gry. ${winner}`);
      if (winner === "Białe") {
        WiningRewards();
      }
      resetBoard();
    }
  }, [game]);

  //move on click
  function getMoveOptions(square) {
    const moves = game.moves({
      square,
      verbose: true,
    });
    if (moves.length === 0) {
      return false;
    }

    const newSquares = {};
    //move dot
    moves.map((move) => {
      newSquares[move.to] = {
        background:
          game.get(move.to) &&
          game.get(move.to).color !== game.get(square).color
            ? "radial-gradient(circle, rgba(255,0,0,.5) 85%, transparent 85%)"
            : "radial-gradient(circle, rgba(255,0,0,.5) 25%, transparent 25%)",
        borderRadius: "50%",
      };
      return move;
    });
    newSquares[square] = {
      background: "rgba(255, 255, 0, 0.4)",
    };
    setOptionSquares(newSquares);
    return true;
  }

  //bot move
  function makeRandomMove() {
    const possibleMoves = game.moves();

    // exit if the game is over
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0)
      return;

    console.log(possibleMoves);

    // Find move with letter "x" if it exists
    const xMove = possibleMoves.find((move) => move.includes("x"));

    if (xMove) {
      safeGameMutate((game) => {
        console.log(xMove);
        game.move(xMove);
      });
    } else {
      const randomIndex = Math.floor(Math.random() * possibleMoves.length);
      safeGameMutate((game) => {
        console.log(possibleMoves[randomIndex]);
        game.move(possibleMoves[randomIndex]);
      });
    }
  }

  function onSquareClick(square) {
    setRightClickedSquares({});

    function resetFirstMove(square) {
      const hasOptions = getMoveOptions(square);
      if (hasOptions) setMoveFrom(square);
    }

    // from square
    if (!moveFrom) {
      resetFirstMove(square);
      return;
    }

    // attempt to make move
    const gameCopy = { ...game };
    const move = gameCopy.move({
      from: moveFrom,
      to: square,
      promotion: "q", // always promote to a queen for example simplicity
    });
    setGame(gameCopy);

    // if invalid, setMoveFrom and getMoveOptions
    if (move === null) {
      resetFirstMove(square);
      return;
    }

    setTimeout(makeRandomMove, 300);
    setMoveFrom("");
    setOptionSquares({});
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
      {!isGameOver ? (
        <div className="GameOver">
          <p style={{ fontSize: "90px" }}>
            {" "}
            {winner === "White" ? "You Win" : "You Lose"}
          </p>
          <p> Winner: {winner}</p>
        </div>
      ) : null}{" "}
      <Chessboard
        id="ClickToMove"
        boardWidth={770}
        animationDuration={200}
        arePiecesDraggable={false}
        position={game.fen()}
        onSquareClick={onSquareClick}
        customBoardStyle={{
          borderRadius: "4px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
        }}
        customSquareStyles={{
          ...moveSquares,
          ...optionSquares,
          ...rightClickedSquares,
          border: "5px solid crimson",
          borderRadius: "5px",
          opacity: isGameOver ? "0.5" : "1",
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
      />{" "}
    </>
  );
}

export default ChessBoard;
