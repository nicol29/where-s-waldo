import Header from "./components/Header/Header";
import GameArea from "./components/GameArea/GameArea";
import PopUp from "./components/PopUp/PopUp";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState({});
  const [clicked, setClicked] = useState(false);

  const handlePopUp = (event) => {
    setClicked(!clicked);
    
    setPosition({
      x: event.pageX,
      y: event.pageY
    })
  }

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
