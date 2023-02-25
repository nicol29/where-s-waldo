import Header from "./components/Header/Header";
import GameArea from "./components/GameArea/GameArea";
import PopUp from "./components/PopUp/PopUp";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState({});
  const [clicked, setClicked] = useState(false);

  const handlePosition = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    })

    // let headerHeight = document.querySelector('header').offsetHeight;

    console.log(position.x, position.y);
  }

  const handlePopUp = () => {
    setClicked(!clicked);
  }

  return (
    <div>
      <Header />
      <GameArea 
        handlePosition={handlePosition}
        handlePopUp={handlePopUp}
        position={position}
      />
      {clicked ? <PopUp position={position}/> : null}
    </div>
  );
}

export default App;
