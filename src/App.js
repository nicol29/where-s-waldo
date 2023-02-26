import Header from "./components/Header/Header";
import GameArea from "./components/GameArea/GameArea";
import PopUp from "./components/PopUp/PopUp";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState({});
  const [clicked, setClicked] = useState(false);

  const handlePopUp = (event) => {
    const imageWidth = event.target.offsetWidth;

    setClicked(!clicked);

    // Responsive placement of popup
    if ((event.pageX + 182) > imageWidth) {
      setPosition({
        x: event.pageX - 182,
        y: event.pageY
      })
    } else {
      setPosition({
        x: event.pageX,
        y: event.pageY
      })
    }
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
