import './PopUp.css';

function PopUp () {
  
  return (
    <div className='pop-up'>
      <div className='assassin-pick'>
        <img 
          src={require('../../images/assassins-creed.png')}
          alt='Assassin'>
        </img>
        <p>Assassin's Creed</p>
      </div>
      <div className='kratos-pick'>
        <img 
          src={require('../../images/kratos.png')}
          alt='Kratos'>
        </img>
        <p>Kratos</p>
      </div>
      <div className='sackboy-pick'>
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