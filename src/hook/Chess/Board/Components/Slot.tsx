import React, { ReactNode, useState } from "react";

const ItemSlot = (
  props: {
    slot: any;
    data: {
      catchCount: ReactNode;
      image: any;
      type: any;
    };
    catchCount: any;
  },
  FishData: any
) => {
  return (
    <>
      <div
        id={`item-slot-${props.slot}`}
        className={`item-slot-chess`}
        data-slot={props.slot}
        data-type={`item`}
      >
        <div className="content-chess">
          <div
            className="ChessPice"
            style={{
              backgroundImage: `url("${props.data.image}")`,
            }}
          />
        </div>
      </div>
    </>
  );
};

const EmptySlot = (props: { slot: any }) => {
  return (
    <>
      <div
        className="item-slot-chess empty"
        data-slot={props.slot}
        data-type={`empty-slot`}
      >
        <div className="content-chess" />
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
