import { useEffect, useState } from "react";
import "../assets/css/Normal/Pond/fishing.css";

function Fishing({
  setFishCount,
  FishCount,
  FishData,
  setFishData,
}: {
  setFishCount: any;
  FishCount: number;
  FishData: any;
  setFishData: any;
}) {
  const [FishingLetters, setFishingLetters] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [StartGame, setStartGame] = useState<boolean>(false);
  const [incorrectLetter, setincorrectLetter] = useState<boolean>(false);
  const [TimeToPlay, setTimeToPlay] = useState<number>(4);
  const [timeLeft, setTimeLeft] = useState<number>(TimeToPlay);
  const [LastCaughtFish, setLastCaughtFish] = useState(0);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10) + 5; // Random number from 5 to 14
    const randomLetters = Array(randomNumber)
      .fill("")
      .map(() => ["A", "W", "S", "D"][Math.floor(Math.random() * 4)]); // random render letters
    setFishingLetters(randomLetters);
  }, []);

  function setFishCountAndUpdateLocalStorage(count: number) {
    const randomId = Math.floor(Math.random() * 10) + 1; // Random id from 1 to 10
    setFishCount(count);
    localStorage.setItem("fish", count.toString());
    const updatedFishArray = [...FishData]; // Create a copy of the original FishArray
    const indexToUpdate = updatedFishArray.findIndex(
      (fish) => fish.id === randomId
    ); // Find the index of the fish with the random id
    if (indexToUpdate !== -1) {
      // If a fish with the random id is found
      updatedFishArray[indexToUpdate].catchCount += 1; // Increment the catchCount of that fish
      updatedFishArray[indexToUpdate].isBought = true; // Increment the catchCount of that fish
      localStorage.setItem("FishArray", JSON.stringify(updatedFishArray)); // Update the FishArray in localStorage
      setLastCaughtFish(randomId);
    }
    console.log(randomId);
    console.log(FishData);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const { key } = event;
      const currentLetter = FishingLetters[currentIndex];
      //  the pressed button is changed to lower case
      if (key.toLowerCase() === currentLetter.toLowerCase()) {
        if (currentIndex === FishingLetters.length - 1) {
          console.log("Game won!");
          setFishCountAndUpdateLocalStorage(FishCount + 1);
          setIsGameOver(true);
          setStartGame(false);
        } else {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        console.log("Game over!");
        document.removeEventListener("keydown", handleKeyDown);
        setincorrectLetter(true);
        setTimeout(() => {
          setincorrectLetter(false);
          setIsGameOver(true);
          setStartGame(false);
        }, 1000);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [FishingLetters, currentIndex]);

  function StartsGame() {
    if (StartGame === true) {
    } else {
      setFishingLetters([]);
      setCurrentIndex(0);
      setTimeLeft(TimeToPlay);
      setIsGameOver(false);
      setStartGame(true);
      const randomNumber = Math.floor(Math.random() * 8) + 3;
      const randomLetters = Array(randomNumber)
        .fill("")
        .map(() => ["A", "W", "S", "D"][Math.floor(Math.random() * 4)]);
      setFishingLetters(randomLetters);
    }
  }
  useEffect(() => {
    if (StartGame && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
    if (timeLeft === 0) {
      setTimeLeft(TimeToPlay);
      setincorrectLetter(false);
      setIsGameOver(true);
      setStartGame(false);
    }
  }, [StartGame, TimeToPlay, timeLeft]);

  return (
    <>
      <div id="FishingContainer">
        <div className="StartFishing" onClick={StartsGame}></div>

        <div
          className="FishingGame"
          style={{ display: StartGame ? "flex" : "none" }}
        >
          {FishingLetters.map((letter: string, index: number) => (
            <span
              key={index}
              className={
                index <= currentIndex - 1
                  ? "correct"
                  : incorrectLetter === true
                  ? "incorrect"
                  : ""
              }
            >
              {letter}
            </span>
          ))}
        </div>
        <span
          style={{ display: StartGame ? "flex" : "none" }}
          className="TimerFishing"
        >
          {timeLeft.toFixed(1)}
        </span>
      </div>
      <div className="FishCollect">
        {FishData.map((data: any, index: number) => {
          if (index === LastCaughtFish - 1) {
            return (
              <div className="fish-animation">
                <div className="plus">+1</div>
                <span
                  className="ff"
                  key={index}
                  style={{ backgroundImage: `url(${data.image})` }}
                ></span>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

export default Fishing;
