const padTime = val => _.padStart(val, 2, '0');
const padMilliSec = val => _.padStart(val, 3, '0');

const timeSelector = document.getElementById('time');

const convertIntervalToTime = interval => ({
  second: Math.floor((interval / 1000) % 60).toFixed(0),
  min: Math.floor((interval / 60000) % 60).toFixed(0),
  hour: Math.floor(interval / 3600000).toFixed(0)
});

const fakeDeadline = moment('7-1-2018 1:00.00', 'D-MM-YYYY HH:mm.ss');
const trueDeadline = moment('7-1-2018 1:00.00', 'D-MM-YYYY HH:mm.ss');

const useFakeDeadline = moment().isBefore(fakeDeadline);

const interval = setInterval(() => {
  let text = 'Good Luck, Have Fun :)';
  let textColor = '#66fcf1';
  let msInterval;
  if (useFakeDeadline) {
    msInterval = moment(fakeDeadline).diff(moment());
  } else {
    msInterval = moment(trueDeadline).diff(moment());
  }
  if (msInterval > 0) {
    const ms = msInterval % 1000;
    const { second, min, hour } = convertIntervalToTime(msInterval);
    const display = `${padTime(hour)}:${padTime(min)}:${padTime(second)}.${padMilliSec(ms)}`;
    timeSelector.innerHTML = display;
    const hourNum = parseInt(hour, 10);
    if (hourNum < 7 && hourNum >= 6) {
      text = "Let's the game begin!";
      textColor = '#03dda5';
    } else if (hourNum < 6 && hourNum >= 4) {
      text = "JUST DO IT!";
      textColor = '#39df56';
    } else if (hourNum < 4 && hourNum >= 2) {
      text = 'Welcome Back!';
      textColor = '#cad900';
    } else if (hourNum < 2 && hourNum >= 1) {
      text = 'Welcome Back!';
      textColor = '#d95800';
    } else {
      text = 'YOU CAN DO IT!';
      textColor = '#ec4a4a';
    }

  } else {
    timeSelector.innerHTML = '00:00:00.000';
    clearInterval(interval);
    text = 'You made it! See you on the stage :) Good Luck!';
    textColor = '#66fcf1';
  }
  document.getElementById('glhf').innerHTML = text;
  document.getElementById('glhf').setAttribute('style', `color: ${textColor}`);
}, 1);
