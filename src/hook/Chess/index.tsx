import { useState } from "react";
import "../../assets/css/Normal/Chess/Chess.css";
import BoardChess from "./Board/board";
import BoardChessJs from "./Chess.js";

function Chess({
  OpenChess,
  setOpenChess,
}: {
  OpenChess: boolean;
  setOpenChess: any;
}) {
  const [ChessIsOpen, setChessIsOpen] = useState<boolean>(true);

  function CloseChess() {
    setOpenChess(false);
  }

  return (
    <>
      <div
        id="MainChess"
        style={{ display: OpenChess ? "flex" : "none" }}
        onClick={(e) => {
          e.stopPropagation();
          CloseChess();
        }}
      >
        <div
          className="ChessG"
          style={{ display: ChessIsOpen ? "flex" : "none" }}
          onClick={(e) => {
            e.stopPropagation();
            setChessIsOpen(true);
          }}
        >
          <BoardChessJs />
        </div>
      </div>
    </>
  );
}

export default Chess;
