const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

const songs = [
    'STAY (with Justin Bieber) - The Kid LAROI, Justin Bieber',
    'Drivers License - Olivia Rodrigo',
    'Montero (Call Me By Your Name) - Lil Nas X',
    'good 4 u - Olivia Rodrigo',
    'Levitating (feat. DaBaby) - Dua Lipa, DaBaby',
    'Peaches (feat. Daniel Caesar & Giveon) - Justin Bieber, Daniel Caesar, Giveon',
    'Kiss Me More (feat. SZA) - Doja Cat, SZA',
    'Blinding Lights - The Weekend',
    'Heat Waves - Glass Animals',
    'Masked Wolf - Astronaut In The Ocean',
    'Industry Baby - Lil Nas X (Jack Harlow)'
];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `https://replit.com/@Cacteye/SpotifyAttempt1#Music%20.mp3/Drivers%20License%20-%20Olivia%20Rodrigo.mp3`;
  // audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;

  console.log(song);
}

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

}

progressContainer.addEventListener('click', setProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

audio.addEventListener('ended', nextSong);
