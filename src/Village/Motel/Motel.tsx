import { useState } from "react";

const Motel = ({
  MO,
  setWSO,
  setBSO,
  setASO,
  setMO,
}: {
  MO: boolean;
  setWSO: any;
  setBSO: any;
  setASO: any;
  setMO: any;
}) => {
  const [MotelIsOpen, setMotelIsOpen] = useState(true);

  function colseAll() {
    setWSO(false);
    setBSO(false);
    setASO(false);
    setMO(false);
  }
  return (
    <>
      <div
        className="MainMotel"
        style={{ display: MO ? "flex" : "none" }}
        onClick={(e) => {
          e.stopPropagation();
          colseAll();
        }}
      >
        <div
          className="test"
          style={{ display: MotelIsOpen ? "flex" : "none" }}
          onClick={(e) => {
            e.stopPropagation();
            setMotelIsOpen(true);
          }}
        >
          Motel
        </div>
      </div>
    </>
  );
};

export default Motel;
