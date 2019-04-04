const getTwoDigits = time => `0${time}`.substr(-2);

export default date =>
  `${getTwoDigits(date.getHours())}:${getTwoDigits(
    date.getMinutes()
  )}:${getTwoDigits(date.getSeconds())}`;
