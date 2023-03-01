import Header from "./components/Header/Header";
import GameArea from "./components/GameArea/GameArea";
import PopUp from "./components/PopUp/PopUp";
import { useState, useEffect } from "react";
import { db } from "./firebase/firebase-config"
import { collection, getDoc, doc } from "firebase/firestore" 


// const getCharacter = (character) => {
//   const characterCollectionRef = doc(db, 'characters', 'kratos');

//   const characterPosition = (async () => {
//     let characterCoords = await getDoc(characterCollectionRef);

//     if(characterCoords.exists()) console.log('lol')
//     return characterCoords.data()
//   })();

//   return characterPosition;
// }
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
        x: event.pageX ,
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
    };
    verifyUserCoords();
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
