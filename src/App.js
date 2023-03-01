import Header from "./components/Header/Header";
import GameArea from "./components/GameArea/GameArea";
import PopUp from "./components/PopUp/PopUp";
import { useState, useEffect } from "react";
import { db } from "./firebase/firebase-config"
import { getDoc, doc } from "firebase/firestore" 

const getCharacter = async (character) => {
  const characterCollectionRef = doc(db, 'characters', character);

  const characterPosition = await getDoc(characterCollectionRef);

  return characterPosition.data();
}

function App() {
  const [position, setPosition] = useState({});
  const [clicked, setClicked] = useState(false);
  const [foundCharacters, setFoundCharacters] = useState({
    Assassin: false,
    Kratos: false,
    Sackboy: false
  });


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
    console.log(divClicked);
    if(!foundCharacters.divClicked) {
      setFoundCharacters({
        ...foundCharacters, divClicked: true
      })
    }


    const verifyUserCoords = async () => {
      let coords = await getCharacter(divClicked);

      let bgImage = document.querySelector('.wheres-waldo-bg');
      let xClickedCoord = position.x / bgImage.clientWidth;
      let yClickedCoord = position.y / bgImage.clientHeight;

      if(
        xClickedCoord > (coords.x - 0.02) && 
        xClickedCoord < (coords.x + 0.02) &&
        yClickedCoord > (coords.y - 0.02) &&
        yClickedCoord < (coords.y + 0.02)) console.log(divClicked + ' found!')
    };
    verifyUserCoords()
  }

  useEffect(() => {

  }, [])

  return (
    <div>
      <Header />
      <GameArea 
        handlePopUp={handlePopUp}
        position={position}
      />
      {clicked && 
        <PopUp 
          position={position}
          handleChoice={handleChoice}/>}
    </div>
  );
}

export default App;
