import { useState } from "react";
import Confetti from "./Confetti";


const MIN_NUMBER = 1;
const MAX_NUMBER = 5;
const MAX_GUESSES = 100;

export default function Game() {
  const [winningNumber, setWinningNumber] = useState(null);
  const [numGuesses, setNumGuesses] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [message, setMessage] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [guess, setGuess] = useState("");
  const [confettiActive, setConfettiActive] = useState(false);


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleStartGame = () => {
    setWinningNumber(generateRandomNumber(MIN_NUMBER, MAX_NUMBER));
    setNumGuesses(0);
    setGuesses([]);
    setMessage("");
    setGameStarted(true);
    setConfettiActive(false);
  };
 

  const handleMakeGuess = () => {
    const guessNumber = parseInt(guess);
    if (guessNumber === winningNumber) {
      setMessage(
        <span style={{ color: "green" }}>
         Congratulations! The correct number was {winningNumber}.
        </span>
      );
      setConfettiActive(true);
      setWinningNumber(null);
      setGuess("");
      setTimeout(() => {
        setGameStarted(false);
      }, 3000);
      setNumGuesses(0);
      setGuesses([]);
  
    } else {
      setNumGuesses(numGuesses + 1);
      setGuesses([...guesses, guessNumber]);
      const remainingGuesses = MAX_GUESSES - numGuesses - 1;
      if (remainingGuesses > 0) {
        setGuess("");
        setMessage(
          <span style={{ color: "yellow" }}>
            You guessed wrong!{" "}
            {guessNumber < winningNumber ? "Bigger" : "Smaller"} enter a
            number. Your remaining right: {remainingGuesses}
          </span>
        );
      } else {
        setMessage(
          <span style={{ color: "red" }}>
            You lost! The correct number was {winningNumber}
          </span>
        );
        setWinningNumber(null);
        setGuess("");
        setTimeout(() => {
          setGameStarted(false);
        }, 3000);
        setNumGuesses(0);
        setGuesses([]);
      }
    }
  };

  return (
   
<div className=" relative bg-cover h-screen w-full " style={{backgroundImage: "url('/images/pexels-suzy.jpg')", backgroundSize: "cover"}}>
<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
{confettiActive && (
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={1000}
      
      />
    )}


  <div id="game" className="container  flex flex-col justify-center items-center pt-10 ">
    





    <h1 className="text-center  text-5xl pt-10    bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">NUMBER GUESSING GAME</h1>

    {!gameStarted ? (
      <div className="row py-5 ">
        <button
          onClick={handleStartGame}
          className="btn btn-primary justify-content-center m-auto"
          style={{ width: "150px", height: "75px" }}
        >
         Start game
        </button>
      </div>
    ) : (
      <>
        <div className="row pt-10">
          <input
            id="guessInput"
            type="text"
            className="form-control justify-content-center m-auto"
            placeholder="Enter a number"
            style={{ width: "150px", height: "75px" }}
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
        </div>
        <div className="row p-5 d-flex flex-column">
          <button
            id="guessBtn"
            className="btn btn-warning justify-content-center m-auto"
            style={{ width: "150px", height: "75px" }}
            onClick={handleMakeGuess}
          >
            Guess
          </button>
          <p id="message" className="text-center text-2xl  justify-content-center m-auto  pt-10">
            {message}
          </p>
        </div>
      </>
    )}
  </div>
</div>
</div>
);
}

