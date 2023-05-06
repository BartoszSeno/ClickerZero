import { useState } from "react";

const Motel = ({
  MO,
  setWSO,
  setBSO,
  setASO,
  setMO,
  setSleep,
  sleep,
}: {
  MO: boolean;
  setWSO: any;
  setBSO: any;
  setASO: any;
  setMO: any;
  setSleep: any;
  sleep: boolean;
}) => {
  const [MotelIsOpen, setMotelIsOpen] = useState(true);

  function colseAll() {
    setWSO(false);
    setBSO(false);
    setASO(false);
    setMO(false);
  }

  function SleepFunction() {
    setSleep(true);
    setTimeout(() => {
      setSleep(false);
      console.log("u can sleep again");
    }, 5000);
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
          id="MotelContainer"
          style={{ display: MotelIsOpen ? "flex" : "none" }}
          onClick={(e) => {
            e.stopPropagation();
            setMotelIsOpen(true);
          }}
        >
          <button className="SleepButton" onClick={SleepFunction}>
            Sleep
          </button>
        </div>
      </div>
    </>
  );
};

export default Motel;
