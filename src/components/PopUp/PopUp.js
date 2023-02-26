import './PopUp.css';

function PopUp ({ position, handleChoice }) {
  return (
    <div 
      className='pop-up' style={{left: position.x, top: position.y}}>
      <div className='assassin-pick' onClick={handleChoice}>
        <img 
          src={require('../../images/assassins-creed.png')}
          alt='Assassin'>
        </img>
        <p>Assassin's Creed</p>
      </div>
      <div className='kratos-pick' onClick={handleChoice}>
        <img 
          src={require('../../images/kratos.png')}
          alt='Kratos'>
        </img>
        <p>Kratos</p>
      </div>
      <div className='sackboy-pick' onClick={handleChoice}>
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