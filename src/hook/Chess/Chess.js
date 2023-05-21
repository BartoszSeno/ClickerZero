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

  const customBoardStyles = {
    lightSquare: {
      backgroundColor: "lightblue", // Replace with your desired color or image URL
    },
    darkSquare: {
      backgroundColor: "red", // Replace with your desired color or image URL
    },
  };
  return (
    <div className="ChessBoard">
      {isGameOver ? <div>Gra skończona</div> : null}{" "}
      <Chessboard
        position={game.fen()}
        onPieceDrop={onDrop}
        customBoardStyle={{
          borderRadius: "5px",
        }}
        customLightSquareStyle={{
          backgroundColor: "red",
        }}
        customDarkSquareStyle={{
          backgroundColor: "red",
        }}
      />
    </div>
  );
}

export default ChessBoard;
