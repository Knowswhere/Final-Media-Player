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

console.log("Happy New Year from the Software Team!\n");

const songs = [
  'BTS - Yet to come',
  'Taeyeon – INVU',
  'PSY - That That',
  'IVE - Love Dive',
  'NewJeans - Hype Boy',
  'Blackpink Pink Venom',
  'Le Sserafim - Antifragile',
  'NewJeans - Attention',
  'G-IDLE - Tomboy',
  'IVE - After Like',
  'Newjeans - ditto',
  'TWICE - talk that talk',
  'Taeyang - Vibe',
  'Blackpink - Shut Down',
  'Tomorrow x Together - Sugar Rush Ride',
  'Newjeans - OMG',
  'Kara -  When I Move',
  'Ghost Rule - DECO*27',
  'Haan Main Galat',
  'Roman s Revenge',
  'I cant handle change',
  'Yung Gravy_Dillon Francis - Hot Tub (ft. T-Pain) ',
  "Exo - Growl",
  "Le Sserafim - Fearless",
  "Stray Kids - MANIAC",
  "Six Lounge - kitakaze"
];

//Index of the song it begins with (Blinding Lights)
let songIndex = 10;

loadSong(songs[songIndex]);


function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
  pauseSong();
  playSong();

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

audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

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

progressContainer.addEventListener('click', setProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//Here for shuffle //Change the shuffle to have a button display somewhere on screen

// const shuffleSongs = songs => {
  // for (let i = songs.length - 1; i > 0; i--) {
    // const j = Math.floor(Math.random()) * (i +1);
    // const temp = songs[i];
    // songs[i] = songs [i];
  // songs[j] = temp;
  
  // }

  // return songs;
  
 // };

//Above is the code in comment for testing (if its wrong just delete it)

audio.addEventListener('ended', nextSong);
