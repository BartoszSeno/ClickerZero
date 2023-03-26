function HelmetLoop({
  HelmetData,
  UpgradedNamesHelmet,
  handleHelmetItemSelect,
  GetIdPerClick,
}: {
  HelmetData: any;
  UpgradedNamesHelmet: any;
  handleHelmetItemSelect: any;
  GetIdPerClick: any;
}) {
  return (
    <>
      {HelmetData.map((data: any, index: any) => {
        const upgradedName = UpgradedNamesHelmet[index];
        return (
          <div key={`${data.id}_${index}`}>
            {Array.from({ length: data.count }, (_, i) => {
              return (
                <div
                  className={`option ${index} `}
                  id={`${index}${i}`}
                  key={`${data.id}_${index}_${i}`}
                  onClick={(e) => {
                    handleHelmetItemSelect(index);
                    GetIdPerClick(index);
                  }}
                >
                  <img
                    className="OptionEquipmentImg"
                    src={data.image}
                    alt={`${data.name} Helmet`}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default HelmetLoop;
