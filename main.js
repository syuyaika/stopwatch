const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let stopTime = 0;
let timeoutID;

stopButton.disabled = true;
resetButton.disabled = true;

function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours()-9).padStart(1, '0');
  const m = String(currentTime.getMinutes()).padStart(1, '0');
  const s = String(currentTime.getSeconds()).padStart(1, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(3, '0').slice(0, 1); 

  time.textContent = `${h}:${m}:${s}:${ms}`;
  timeoutID = setTimeout(displayTime, 10);
}

startButton.addEventListener('click', function() {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
  startTime = Date.now();
  displayTime();
});

stopButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});

resetButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  time.textContent = '0:0:0:0';
  clearTimeout(timeoutID);
  stopTime = 0;
});