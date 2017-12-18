const padTime = val => _.padStart(val, 2, '0');
const padMilliSec = val => _.padStart(val, 3, '0');

const timeSelector = document.getElementById('time');

const interval = setInterval(() => {
  const deadline = moment('4-1-2018', 'D-MM-YYYY');
  const interval = moment(deadline).diff(moment()); // Millisecond unit
  if (interval > 0) {
    const ms = interval % 1000;
    const second = Math.floor((interval / 1000) % 60).toFixed(0);
    const min = Math.floor((interval / 60000) % 60).toFixed(0);
    const hour = Math.floor(((interval / (3600000)) % 24)).toFixed(0);
    const display = `${padTime(hour)}:${padTime(min)}:${padTime(second)}.${padMilliSec(ms)}`;
    timeSelector.innerHTML = display;
  } else {
    clearInterval(interval);
  }
}, 1);
