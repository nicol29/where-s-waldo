import Header from "./components/Header/Header";
import GameArea from "./components/GameArea/GameArea";
import PopUp from "./components/PopUp/PopUp";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState({});
  const [clicked, setClicked] = useState(true);

  const handlePosition = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    })

    // let headerHeight = document.querySelector('header').offsetHeight;

    console.log(position.x, position.y);
  }

  return (
    <div>
      <Header />
      <GameArea 
        handlePosition={handlePosition}
        position={position}
      />
      {clicked ? <PopUp /> : null}
    </div>
  );
}

export default App;
