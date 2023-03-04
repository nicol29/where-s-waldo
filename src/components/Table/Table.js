import { db } from '../../firebase/firebase-config';
import { useEffect, useState } from 'react';
import { getDocs, collection, query, orderBy, limit } from "firebase/firestore";
import { formatTime } from '../Timer/Timer';

function Table ({ userName }) {
  const [topTenScores, setTopTenScores] = useState([]);

  const getHighScores = async () => {
    const highScoresCollectionRef = collection(db, 'highscores');
    const topTenScores = query(highScoresCollectionRef, orderBy("time"), limit(10));
    const highScores = await getDocs(topTenScores);

    setTopTenScores([...highScores.docs]);
  }

  useEffect(() => {
    getHighScores();
  }, [])

  return (
    <div className='leaderboard'>
      <p>Leaderboard:</p>
      <table>
        <tr>
          <th>Username</th>
          <th>Time</th>
        </tr>
        {topTenScores.map((userScore, index) => (
          <tr>
            <td>{userScore.data().username}</td>
            <td>{formatTime(userScore.data().time)}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Table;