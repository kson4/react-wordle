import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState(["", "", "", "", "", ""]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });

    return formattedGuess;
  };

  const addNewGuess = (guess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prev) => {
      let newGuesses = [...prev];
      newGuesses[turn] = guess;
      return newGuesses;
    });
    setHistory((prev) => {
      return [...prev, currentGuess];
    });
    setTurn((prev) => {
      return prev + 1;
    });
    setUsedKeys((prev) => {
      let newKeys = { ...prev };
      guess.forEach((l) => {
        const currentColor = newKeys[l.key];
        if (l.color === "green") {
          newKeys[l.key] = "green";
        } else if (l.color === "yellow" && currentColor !== "green") {
          newKeys[l.key] = "yellow";
        } else if (currentColor !== "yellow" || currentColor !== "green") {
          newKeys[l.key] = "grey";
        }
        return;
      });
      return newKeys;
    });
    setCurrentGuess("");
  };

  const handleKeyup = ({ key }) => {
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    } else if (key === "Enter") {
      if (turn > 5) {
        console.log("no more turns available");
      } else if (history.includes(currentGuess)) {
        console.log("you have already guessed that word");
      } else if (currentGuess.length !== 5) {
        console.log("word must be 5 characters long");
      } else {
        const guess = formatGuess();
        addNewGuess(guess);
      }
    } else if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup };
};

export default useWordle;
