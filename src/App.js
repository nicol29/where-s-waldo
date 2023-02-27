import Header from "./components/Header/Header";
import GameArea from "./components/GameArea/GameArea";
import PopUp from "./components/PopUp/PopUp";
import { useState, useEffect } from "react";
import { db } from "./firebase/firebase-config"
import { collection, getDocs } from "firebase/firestore" 
import { async } from "@firebase/util";

function App() {
  const [position, setPosition] = useState({});
  const [clicked, setClicked] = useState(false);

  const charactersCollectionRef = collection(db, 'characters');

  const handlePopUp = (event) => {
    const imageWidth = event.target.offsetWidth;

    setClicked(!clicked);

    // Responsive placement of popup
    // if ((event.pageX + 182) > imageWidth) {
    //   setPosition({
    //     x: event.pageX - 182,
    //     y: event.pageY
    //   })
    // } else {
    //   setPosition({
    //     x: event.pageX / event.target.clientWidth,
    //     y: event.pageY / event.target.clientHeight
    //   })
    // }
    setPosition({
      x: event.pageX / event.target.clientWidth,
      y: event.pageY / event.target.clientHeight
    })
    console.log(db);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(charactersCollectionRef);

      console.log(data);
    }

    getUsers()
  }, [])

  const handleChoice = () => {
    
  }

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
