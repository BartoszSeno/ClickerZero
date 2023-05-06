import { useEffect, useState } from "react";

const Motel = ({
  MO,
  setWSO,
  setBSO,
  setASO,
  setMO,
  setSleep,
  sleep,
  SleepHandleClick,
  sleepTimeout,
  setSleepTimeout,
}: {
  MO: boolean;
  setWSO: any;
  setBSO: any;
  setASO: any;
  setMO: any;
  setSleep: any;
  sleep: boolean;
  SleepHandleClick: any;
  sleepTimeout: any;
  setSleepTimeout: any;
}) => {
  const [MotelIsOpen, setMotelIsOpen] = useState(true);

  function colseAll() {
    setWSO(false);
    setBSO(false);
    setASO(false);
    setMO(false);
  }

  useEffect(() => {
    localStorage.setItem("sleep", sleep.toString());
    if (sleepTimeout) {
      localStorage.setItem("sleepTimeout", sleepTimeout.toString());
    } else {
      localStorage.removeItem("sleepTimeout");
    }
  }, [sleep, sleepTimeout]);

  useEffect(() => {
    if (sleepTimeout) {
      const remainingTime = Number(sleepTimeout) - Date.now();
      if (remainingTime > 0) {
        const timeoutId = setTimeout(() => {
          setSleep(false);
          console.log("u can sleep again");
          setSleepTimeout(null);
        }, remainingTime);
        return () => clearTimeout(timeoutId);
      } else {
        setSleep(false);
        setSleepTimeout(null);
        console.log("u can sleep again");
      }
    }
  }, [setSleep, setSleepTimeout, sleepTimeout]);

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
          <button
            className="SleepButton"
            onClick={(e) => {
              SleepHandleClick();
            }}
            disabled={sleep === true}
          >
            Sleep
          </button>
        </div>
      </div>
    </>
  );
};

export default Motel;
