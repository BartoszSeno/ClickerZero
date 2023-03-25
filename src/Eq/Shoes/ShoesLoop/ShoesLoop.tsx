function ShoesLoop({
  ShoesData,
  UpgradedNamesShoes,
  handleShoesItemSelect,
  GetIdPerClick,
}: {
  ShoesData: any;
  UpgradedNamesShoes: any;
  handleShoesItemSelect: any;
  GetIdPerClick: any;
}) {
  return (
    <>
      {ShoesData.map((data: any, index: any) => {
        const upgradedName = UpgradedNamesShoes[index];
        return (
          <div key={`${data.id}_${index}`} id="loopItems">
            {Array.from({ length: data.count }, (_, i) => {
              return (
                <div
                  className={`option ${index} `}
                  id={`${index}${i}`}
                  key={`${data.id}_${index}_${i}`}
                  onClick={(e) => {
                    handleShoesItemSelect(index);
                    GetIdPerClick(index);
                  }}
                >
                  <img
                    className="OptionEquipmentImg"
                    src={data.image}
                    alt={`${data.name} Shoes`}
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

export default ShoesLoop;
