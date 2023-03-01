import './GameArea.css'

function GameArea (props) {
  return (
    <div onClick={props.handlePopUp}>
      <img
        src={require('../../images/wheres-waldo.jpg')}
        alt='Background Game Area'
        className='wheres-waldo-bg'>
      </img>
    </div>
  )
}

export default GameArea;