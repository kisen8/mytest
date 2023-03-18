// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// const STORAGE_KEY = 'videoplayer-current-time';

// player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
// player.on('timeupdate', throttle(onTimeupdate, 1000));

// function onTimeupdate(params) {
//   localStorage.setItem(STORAGE_KEY, params.seconds);
// }
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(+localStorage.getItem(STORAGE_KEY));
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}
