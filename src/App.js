import { useEffect, useState } from "react";
import GetWord from "./GetWord";

function App() {
  const [word, setWord] = useState();

  useEffect(() => {
    GetWord(setWord);
  }, []);

  return (
    <div className="App">
      <h1>Wordle</h1>
      <h2>{word}</h2>
    </div>
  );
}

export default App;
