import './Header.css'

function Header ({ opacityValues }) {
  return (
    <header>
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
    </header>
  )
}

export default Header;