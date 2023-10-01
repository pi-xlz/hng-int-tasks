const dayEl = document.querySelector('.time__day');
const timeEl = document.querySelector('.time__utc-time');
const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const currentTime = new Date();
let day = weekday[currentTime.getDay()];

dayEl.textContent = day;

const updateTime = () => {
  const currentTime = new Date();
  const currentUtcTime = currentTime.getUTCMilliseconds().toString();
  timeEl.innerHTML = currentUtcTime;

  setTimeout(() => {
    updateTime();
  }, 1000);
};

updateTime();
