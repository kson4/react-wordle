import axios from "axios";

const getWord = (setSolution) => {
  axios
    .get("https://random-word-api.herokuapp.com/word?length=5")
    .then((res) => {
      setSolution(res.data[0]);
    });
};

export default getWord;
