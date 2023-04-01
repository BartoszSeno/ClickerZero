import React from "react";

const ItemSlot = (props: { slot: any; data: { image: any } }) => {
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
