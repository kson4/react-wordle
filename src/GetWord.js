import axios from "axios";

function GetWord(setWord) {
  axios
    .get("https://random-word-api.herokuapp.com/word?length=5")
    .then((res) => {
      setWord(res.data[0]);
    });
}

export default GetWord;
