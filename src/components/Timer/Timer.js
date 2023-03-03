function Timer ({ time }) {
  let elapsedTime = formatTime(time);
  return (
    <p>
      {elapsedTime}
    </p>
  )
};

function formatTime (time) {
  let currentSecs = time;
  let hours = 0;
  let mins = 0;
  let secs = 0;

  while(currentSecs > 0) {
    if (secs === 59) {
      mins ++;
      secs = 0
    } else if (mins === 59) {
      hours ++
      mins = 0
    } else {
      secs ++
      currentSecs -- 
    }
  }

  let finalTime = [hours.toString(), mins.toString(), secs.toString()];

  finalTime.forEach((digit, index) => {
    if(digit < 10) finalTime[index] = '0' + digit;
  })

  return `${finalTime[0]}:${finalTime[1]}:${finalTime[2]}`;
}

export { Timer, formatTime };