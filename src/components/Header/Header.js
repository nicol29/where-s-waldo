import { Timer } from '../Timer/Timer';
import './Header.css'

function Header ({ opacityValues, time }) {
  return (
    <header>
      <div className='character-images'>
        <img 
          className='assassin-image'
          src={require('../../images/assassins-creed.png')}
          alt='Assassin'
          style={{opacity: opacityValues.assassinOpacity}}>
        </img>
        <img 
          className='kratos-image'
          src={require('../../images/kratos.png')}
          alt='Kratos'
          style={{opacity: opacityValues.kratosOpacity}}>
        </img>
        <img 
          className='sackboy-image'
          src={require('../../images/sackboy.png')}
          alt='Sackboy'
          style={{opacity: opacityValues.sackboyOpacity}}>
        </img>
      </div>
      <div className='timer'>
        <Timer 
        time={time}/>
      </div>
    </header>
  )
}

export default Header;