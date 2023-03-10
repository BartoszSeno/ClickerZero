import "../assets/css/Normal/information/info.css";

const Information = ({ infoOpenClose }: { infoOpenClose: any }) => {
  return (
    <>
      <div
        id="information-container"
        style={{ display: infoOpenClose ? "flex" : "none" }}
      >
        <div className="workingon">
          <h1>Now working on:</h1>
          <p>
            <h2>making readable code</h2>
          </p>
          <p>
            Adding new weapon - subWeapon <b>DONE</b>
          </p>
          <p>
            Adding new Armor all types <b>DONE</b>
          </p>
          <p>
            Changing store options sorting between: Armor's (all type), weapon
            (all type)
          </p>
          <p>
            zmienic tak by kazdy przedmiot mogl byc kupiony raz zmienic wygląd
            po kupionym na szary dalsza widocznosc przedmiotu bez mozliwosci
            klikniecia na niego bron np wisi rekojecia do gory arory ubrane na
            manekina kaski na głowe manekina
          </p>
          <p>sell option</p>
        </div>
        <div className="news">
          <h1>What's next:</h1>
          <p>New background</p>
          <p>Better Info box</p>
          <p>Create an item cost</p>
          <p>Adding cost for upgrade for each itmes</p>
          <p>Dmg/def optimization</p>
          <p>Change GUI</p>
          <p>Adding credit's</p>
        </div>
        <div className="tofix">
          <h1>To fix:</h1>
          <p>button style when enchant is open</p>
        </div>
      </div>
    </>
  );
};

export default Information;
