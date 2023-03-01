import './PopUp.css';

function PopUp ({ position, handleChoice }) {
  return (
    <div 
      className='pop-up' style={position.responsiveX ? 
      {left: position.responsiveX, top: position.y} : {left: position.x, top: position.y}}>
      <div className='assassin' onClick={handleChoice}>
        <img 
          src={require('../../images/assassins-creed.png')}
          alt='Assassin'>
        </img>
        <p>Assassin's Creed</p>
      </div>
      <div className='kratos' onClick={handleChoice}>
        <img 
          src={require('../../images/kratos.png')}
          alt='kratos'>
        </img>
        <p>Kratos</p>
      </div>
      <div className='sackboy' onClick={handleChoice}>
        <img 
            src={require('../../images/sackboy.png')}
            alt='Sackboy'>
          </img>
          <p>Sackboy</p>
      </div>
    </div>
  )
}

export default PopUp;