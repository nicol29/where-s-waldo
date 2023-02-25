import './Header.css'

function Header () {
  return (
    <header>
      <img 
        className='assassin-image'
        src={require('../../images/assassins-creed.png')}
        alt='Assassin'>
      </img>
      <img 
        className='kratos-image'
        src={require('../../images/kratos.png')}
        alt='Kratos'>
      </img>
      <img 
        className='sackboy-image'
        src={require('../../images/sackboy.png')}
        alt='Sackboy'>
      </img>
    </header>
  )
}

export default Header;