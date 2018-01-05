const padTime = val => _.padStart(val, 2, '0');
const padMilliSec = val => _.padStart(val, 3, '0');

const timeSelector = document.getElementById('time');

const convertIntervalToTime = interval => ({
  second: Math.floor((interval / 1000) % 60).toFixed(0),
  min: Math.floor((interval / 60000) % 60).toFixed(0),
  hour: Math.floor(interval / 3600000).toFixed(0)
});

const fakeDeadline = moment('6-1-2018 17:40.00', 'D-MM-YYYY HH:mm.ss');
const trueDeadline = moment('6-1-2018 18:00.00', 'D-MM-YYYY HH:mm.ss');

const useFakeDeadline = moment().isBefore(fakeDeadline);

const interval = setInterval(() => {
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
  } else {
    timeSelector.innerHTML = '00:00:00.000';
    clearInterval(interval);
  }
}, 1);
