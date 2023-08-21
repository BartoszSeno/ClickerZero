import { CatArray } from "../data/cat/cat";

const Cat = () => {
  return (
    <>
      {CatArray.map((data: any, index: number) => {
        if (index === 0) {
          return (
            <div
              className="Cat"
              key={data.id}
              style={{ backgroundImage: `url(${data.Laight})` }}
            ></div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default Cat;
