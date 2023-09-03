function HandEnemy({
  randomItemsE,
  setEnemyIdSelected,
  HandleItemClickE,
}: {
  randomItemsE: any;
  setEnemyIdSelected: any;
  HandleItemClickE: any;
}) {
  return (
    <>
      <div className="EnemyHandCard">
        <div className="scaleSize">
          {randomItemsE.map((data: any, index: any) => (
            <div
              className="CardConteiner"
              key={index}
              onClick={() => HandleItemClickE(data.id)}
            >
              <div className="imgCardAb"></div>
              <div className="ManaC">
                <div className="ManaPoints">{data.Mana}</div>
              </div>
              <div
                className="CardChar"
                style={{
                  backgroundImage: `url(${data.img})`,
                  backgroundPositionY:
                    data.id === 1
                      ? "-30px"
                      : data.id === 2
                      ? "0px"
                      : data.id === 3
                      ? "65px"
                      : data.id === 4
                      ? "47px"
                      : data.id === 5
                      ? "80px"
                      : data.id === 6
                      ? "55px"
                      : data.id === 7
                      ? "30px"
                      : data.id === 8
                      ? "30px"
                      : data.id === 9
                      ? "40px"
                      : data.id === 10
                      ? "60px"
                      : data.id === 11
                      ? "67px"
                      : data.id === 12
                      ? "57px"
                      : data.id === 13
                      ? "50px"
                      : data.id === 14
                      ? "15px"
                      : data.id === 15
                      ? "20px"
                      : data.id === 16
                      ? "45px"
                      : data.id === 17
                      ? "30px"
                      : data.id === 18
                      ? "70px"
                      : data.id === 19
                      ? "50px"
                      : data.id === 20
                      ? "50px"
                      : data.id === 21
                      ? "50px"
                      : data.id === 22
                      ? "20px"
                      : data.id === 23
                      ? "50px"
                      : data.id === 24
                      ? "40px"
                      : data.id === 25
                      ? "65px"
                      : data.id === 26
                      ? "32px"
                      : data.id === 27
                      ? "50px"
                      : data.id === 28
                      ? "20px"
                      : data.id === 29
                      ? "60px"
                      : data.id === 30
                      ? "40px"
                      : "",
                  backgroundSize:
                    data.id === 1
                      ? "300px"
                      : data.id === 2
                      ? "300px"
                      : data.id === 3
                      ? "120px"
                      : data.id === 4
                      ? "200px"
                      : data.id === 6
                      ? "160px"
                      : data.id === 7
                      ? "200px"
                      : data.id === 8
                      ? "150px"
                      : data.id === 9
                      ? "200px"
                      : data.id === 11
                      ? "200px"
                      : data.id === 13
                      ? "200px"
                      : data.id === 14
                      ? "200px"
                      : data.id === 15
                      ? "250px"
                      : data.id === 16
                      ? "150px"
                      : data.id === 17
                      ? "200px"
                      : data.id === 18
                      ? "160px"
                      : data.id === 19
                      ? "130px"
                      : data.id === 21
                      ? "150px"
                      : data.id === 22
                      ? "180px"
                      : data.id === 23
                      ? "160px"
                      : data.id === 28
                      ? "230px"
                      : data.id === 29
                      ? "130px"
                      : "",
                  backgroundPositionX:
                    data.id === 1
                      ? "-25px"
                      : data.id === 2
                      ? "-55px"
                      : data.id === 5
                      ? "-25px"
                      : data.id === 18
                      ? "10px"
                      : data.id === 19
                      ? "10px"
                      : data.id === 22
                      ? "20px"
                      : data.id === 24
                      ? "5px"
                      : data.id === 25
                      ? "10px"
                      : data.id === 28
                      ? "-10px"
                      : data.id === 29
                      ? "21px"
                      : "",
                }}
              ></div>
              <div className="CardName">{data.Name}</div>
              <div className="CardStats">
                <div className="AttackPoints">{data.Attack}</div>
                <div className="HpPoints">{data.Hp}</div>
                <div>{data.id}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HandEnemy;
