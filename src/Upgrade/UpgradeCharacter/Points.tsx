const Points = ({ savePontsForUpgrade }: { savePontsForUpgrade: number }) => {
  return (
    <>
      <div className="PointCharacter">
        <p>Points</p>
        <p>{savePontsForUpgrade}</p>
      </div>
    </>
  );
};

export default Points;
