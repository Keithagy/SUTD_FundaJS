const btn = document.querySelector('#play-video-btn');
const video = document.querySelector('#vision-video');
console.log('buttons selected');

const playVideo = (btn, video) => {
  btn.innerHTML = 'Pause video';
  video.play();
};

const pauseVideo = (btn, video) => {
  btn.innerHTML = 'Play video';
  video.pause();
};

const playVideoClickHandler = (btn, video) => {
  if (video.paused) {
    playVideo(btn, video);
    return;
  }
  pauseVideo(btn, video);
};

const makeVideoPlayable = (btn, video) => {
  btn.addEventListener('click', function () {
    if (video.paused) {
      playVideo(btn, video);
      return;
    }
    pauseVideo(btn, video);
  });
  console.log('Handler added');
};

makeVideoPlayable(btn, video);
