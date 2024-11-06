import { useState } from "react";
import "../style/style.css";
import shows from '../data/shows.json'

let data = shows

const Movie = () => {
  const [Movie] = useState(data);
  return (
    <>
{Movie ? (
  <>
  <div className="search-box">
        <input className="search" type="search" onKeyUp={enterWord} />
      </div>
      <div className="main">
        {Movie.map((i,index) => (
            <div key={index} className="blockDisplay" id={index}>
              <h1 id="names">{i.show.name}</h1>
              <img src={i.show.image.medium} alt="" />
              <a href={i.show.url}>show website</a>
            </div>
        )
        )}
      </div>
  </>
):(
  <h1>loading...</h1>
)}
    </>
  );
  function enterWord(e) {
    const word = e.currentTarget.value;
    let upperCaseWord = word.toUpperCase();
    let namesAddArray = [];
    let names = document.querySelectorAll("#names");
    let ids = [];
    
    for (let i = 0; i < names.length; i++) {
      const getNames = names[i].innerHTML;
      let upperCaseNames = getNames.toUpperCase();
      namesAddArray.push(upperCaseNames);
      let idGet = document.getElementById(`${i}`);
      ids.push(idGet);
    }

    for (let i = 0; i < namesAddArray.length; i++) {
      if (
        upperCaseWord[upperCaseWord.length - 1] ===
        namesAddArray[i][upperCaseWord.length - 1]
      ) {
        ids[i].setAttribute("class", "blockDisplay");
      }
      if (
        upperCaseWord[upperCaseWord.length - 1] !==
        namesAddArray[i][upperCaseWord.length - 1]
      ) {
        ids[i].setAttribute("class", "noneDisplay");
      }
    }
  }
};

export default Movie;
