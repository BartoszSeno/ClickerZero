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
          <h2>making readable code</h2>
          <p>in the process of creating graphics for the village</p>
          <p>separate graphics for each house</p>
          <p>delete the current ui and create new one</p>
          <p>sell option</p>
        </div>
        <div className="news">
          <h1>What's next:</h1>
          <p>Better Info box</p>
          <p>Create an item cost</p>
          <p>Adding cost for upgrade for each itmes</p>
          <p>Dmg/def optimization</p>
          <p>Change GUI</p>
          <p>Adding credit's</p>
        </div>
        <div className="tofix">
          <h1>To fix:</h1>
        </div>
      </div>
    </>
  );
};

export default Information;
