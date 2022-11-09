import React, { useEffect, useState } from "react";

export default function Keyboard() {
  const [letters, setLetters] = useState([
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ]);

  useEffect(() => {}, []);

  return (
    <div className="keyboard">
      {letters &&
        letters.map((l) => {
          return <div key={l}>{l}</div>;
        })}
    </div>
  );
}
