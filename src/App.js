import Header from "./components/Header/Header";
import GameArea from "./components/GameArea/GameArea";
import PopUp from "./components/PopUp/PopUp";
import HighScore from "./components/HighScore/HighScore";
import { useState, useEffect } from "react";
import { db } from "./firebase/firebase-config"
import { getDoc, doc } from "firebase/firestore" 

const getCharacter = async (character) => {
  const characterCollectionRef = doc(db, 'characters', character);
  const characterPosition = await getDoc(characterCollectionRef);

  return characterPosition.data();
}

function App() {
  const [clicked, setClicked] = useState(false);
  const [position, setPosition] = useState({});
  const [foundCharacters, setFoundCharacters] = useState([]);
  const [opacityValues, setOpacityValues] = useState({
    assassinOpacity: 1,
    kratosOpacity: 1,
    sackboyOpactiy: 1
  });
  const [time, setTime] = useState(0);

  const handlePopUp = (event) => {
    const imageWidth = event.target.offsetWidth;

    setClicked(!clicked);

    if ((event.pageX + 182) > imageWidth) {
      setPosition({
        responsiveX: event.pageX - 182,
        x: event.pageX,
        y: event.pageY
      })
    } else {
      setPosition({
        x: event.pageX,
        y: event.pageY
      })
    }
  }

  const handleChoice = (event) => {
    const divClicked = event.target.parentNode.className;

    setClicked(!clicked);

    const verifyUserCoords = async () => {
      let coords = await getCharacter(divClicked);

      let bgImage = document.querySelector('.wheres-waldo-bg');
      let xClickedCoord = position.x / bgImage.clientWidth;
      let yClickedCoord = position.y / bgImage.clientHeight;

      if(
        xClickedCoord > (coords.x - 0.02) && 
        xClickedCoord < (coords.x + 0.02) &&
        yClickedCoord > (coords.y - 0.02) &&
        yClickedCoord < (coords.y + 0.02)) markCharacterAsFound(divClicked);
    };
    verifyUserCoords();
  }

  const markCharacterAsFound = (character) => {
    if(!foundCharacters.includes(character)) {
      setFoundCharacters([
        ...foundCharacters, `${character}`
      ]);

      setOpacityValues({
        ...opacityValues, [character + 'Opacity']: 0.25
      })
    }
  }

  useEffect(() => {
    if(foundCharacters.length < 3) {
      setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    }
  }, [time, foundCharacters])

  return (
    <div>
      <Header 
        opacityValues={opacityValues}
        time={time}/>
      <GameArea 
        handlePopUp={handlePopUp}
        position={position}/>
      {clicked && 
        <PopUp 
          position={position}
          handleChoice={handleChoice}/>}
      {/* {foundCharacters.length &&} */}
      <HighScore time={time}/>
    </div>
  );
}

export default App;