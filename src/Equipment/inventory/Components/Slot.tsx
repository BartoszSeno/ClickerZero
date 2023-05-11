import React, { ReactNode, useState } from "react";
import Slider from "@mui/material/Slider";

const ItemSlot = (props: {
  slot: any;
  data: {
    catchCount: ReactNode;
    image: any;
    type: any;
  };
  catchCount: any;
}) => {
  const [wartosc, setWartosc] = useState(10);

  const handleChange = (event: any, newValue: any) => {
    setWartosc(newValue);
  };

  return (
    <>
      <div
        id={`item-slot-${props.slot}`}
        className={`item-slot`}
        data-slot={props.slot}
        data-type={`item`}
      >
        <div className="content">
          <div
            className="img"
            style={{
              backgroundImage: `url("${props.data.image}")`,
              backgroundSize: props.data.type === "Fish" ? "65px" : "",
            }}
          />
        </div>
        <div
          className="FishCount"
          style={{
            display:
              props.data.catchCount === 1
                ? "none"
                : props.data.type === "Fish"
                ? "flex"
                : "none",
          }}
        >
          {props.data.catchCount}
        </div>
        {props.data.type === "Fish" && (
          <div className="slider">
            <Slider
              min={1}
              max={Number(props.data.catchCount)}
              value={wartosc}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
              sx={{
                color: "success.main",
                "& .MuiSlider-thumb": {
                  borderRadius: "0px",
                },
              }}
            />
            <div>wartoSC : {wartosc}</div>
          </div>
        )}
      </div>
    </>
  );
};

const EmptySlot = (props: { slot: any }) => {
  return (
    <>
      <div
        className="item-slot empty"
        data-slot={props.slot}
        data-type={`empty-slot`}
      >
        <div className="content" />
      </div>
    </>
  );
};

const MainComponent = (props: any & { slot: any }) => {
  return props.data !== null ? (
    <ItemSlot {...props} />
  ) : (
    <EmptySlot {...props} />
  );
};

export default MainComponent;
