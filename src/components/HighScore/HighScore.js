import { useState } from 'react';
import { formatTime } from '../Timer/Timer';
import { db } from '../../firebase/firebase-config';
import { doc, setDoc } from 'firebase/firestore';
import Table from '../Table/Table';
import uniqid from 'uniqid';
import './HighScore.css';

function HighScore (props) {
  const elapsedTime = formatTime(props.time);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const [userName, setUserName] = useState('');

  const writeScoreToDataBase = () => {
    setScoreSubmitted(true);

    const addToDB = async () => {
      const highScoresCollectionRef = doc(db, 'highscores', uniqid());
      await setDoc(highScoresCollectionRef, {
        username: userName,
        time: props.time
      })
    }
    addToDB();
  }

  return (
    <div className="high-score-modal">
      <div className='congrats'>
        <h1>Congratulations!</h1>
        <h2>You found everyone.</h2>
        <p className='time-amount'>Your time: {elapsedTime}</p>
      </div>
      <div style={{'marginTop': 20}}>
        {!scoreSubmitted ? 
          <div>
            <input 
              placeholder='username'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}>
            </input>
            <button onClick={writeScoreToDataBase}>
              Submit Score
            </button>  
          </div> :
          <Table userName={userName}/>}
      </div>
    </div>
  )
}

export default HighScore;