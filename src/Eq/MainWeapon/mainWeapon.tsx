import { MainWeaponImageAndNameAndCost } from "../../data/equipment/mainWeapon";

function MainWeapon() {
  return (
    <>
      <div className="items-box MainWeapon">
        <div id="option-container">
          {MainWeaponImageAndNameAndCost.map((data, index) => {
            return (
              <div className="option" key={index}>
                <img
                  className="mainWeaponImg"
                  src={data.image}
                  alt={"Yuria weapon"}
                />
                <span className="itemName">{data.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainWeapon;
