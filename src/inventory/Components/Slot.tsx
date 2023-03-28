import React from "react";

const ItemSlot = ({
  id,
  data,
  mainWeaponData,
  UpgradedNamesMainWeapon,
  handleItemSelect,
  GetIdPerClick,
}: {
  id: number;
  data: { image: string };
  mainWeaponData: any;
  UpgradedNamesMainWeapon: any;
  handleItemSelect: any;
  GetIdPerClick: any;
}) => {
  return (
    <div
      id={`item-slot-${id}`}
      className={`item-slot`}
      data-slot={id}
      data-type={`item`}
    >
      <div className="content">
        <div
          className="img"
          style={{
            backgroundImage: `url("${data.image}")`,
          }}
        />
      </div>
    </div>
  );
};

const EmptySlot = (props: { id: any }) => {
  return (
    <>
      <div
        className="item-slot empty"
        data-slot={props.id}
        data-type={`empty-slot`}
      >
        <div className="content" />
      </div>
    </>
  );
};

const MainComponent = (props: any & { id: any }) => {
  return props.data !== null ? (
    <ItemSlot {...props} />
  ) : (
    <EmptySlot {...props} />
  );
};

export default MainComponent;
