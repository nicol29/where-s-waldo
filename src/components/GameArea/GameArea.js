function GameArea (props) {
  return (
    <div onMouseMove={props.handlePosition}>
      <img 
        src={require('../../images/wheres-waldo.jpg')}
        alt='Background Game Area'>
      </img>
    </div>
  )
}

export default GameArea;