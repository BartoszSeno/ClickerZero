import { useState } from "react";
import "../../assets/css/Normal/Chess/Chess.css";
import ChessBoard from "./Chess";

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
          <ChessBoard />
        </div>
      </div>
    </>
  );
}

export default Chess;
