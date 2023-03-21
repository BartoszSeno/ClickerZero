import { useState } from "react";

const BlackSmith = ({
  BSO,
  setWSO,
  setBSO,
  setASO,
  setMO,
}: {
  BSO: boolean;
  setWSO: any;
  setBSO: any;
  setASO: any;
  setMO: any;
}) => {
  const [BlackSmitchIsOpen, setBlackSmitchIsOpen] = useState(true);

  function colseAll() {
    setWSO(false);
    setBSO(false);
    setASO(false);
    setMO(false);
  }
  return (
    <>
      <div
        className="MainBlackSmith"
        style={{ display: BSO ? "flex" : "none" }}
        onClick={(e) => {
          e.stopPropagation();
          colseAll();
        }}
      >
        <div
          className="test"
          style={{ display: BlackSmitchIsOpen ? "flex" : "none" }}
          onClick={(e) => {
            e.stopPropagation();
            setBlackSmitchIsOpen(true);
          }}
        >
          BlackSmitch
        </div>
      </div>
    </>
  );
};

export default BlackSmith;
