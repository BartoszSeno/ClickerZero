import { useEffect, useState } from "react";
import "../assets/css/Normal/Pond/fishing.css";

function Fishing() {
  const [FishingLetters, setFishingLetters] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [StartGame, setStartGame] = useState<boolean>(false);
  const [incorrectLetter, setincorrectLetter] = useState<boolean>(false);
  const [TimeToPlay, setTimeToPlay] = useState<number>(4);
  const [timeLeft, setTimeLeft] = useState<number>(TimeToPlay);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10) + 5; // Random number form 5 to 14
    const randomLetters = Array(randomNumber)
      .fill("")
      .map(() => ["A", "W", "S", "D"][Math.floor(Math.random() * 4)]); // random render letters
    setFishingLetters(randomLetters);
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const { key } = event;
      const currentLetter = FishingLetters[currentIndex];
      //  the pressed button is changed to lower case
      if (key.toLowerCase() === currentLetter.toLowerCase()) {
        // if all letters was corect
        if (currentIndex === FishingLetters.length - 1) {
          console.log("Game won!");
          setIsGameOver(true);
          setStartGame(false);
        } else {
          // adding current index to tracking letters
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        // if letters was incorect
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
    </>
  );
}

export default Fishing;
