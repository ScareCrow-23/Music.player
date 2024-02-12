var arr = [
  {
    songName: "Is This Love",
    url: "./Songs/Is_this_love.mp3",
    image: "./Images/bob_marley.jpg",
  },
  {
    songName: "No woman",
    url: "./Songs/No_woman.mp3",
    image: "./Images/bob_marley.jpg",
  },
  {
    songName: "One Love",
    url: "./Songs/One_love.mp3",
    image: "./Images/bob_marley.jpg",
  },
  {
    songName: "Three Little Birds",
    url: "./Songs/Three_little_birds.mp3",
    image: "./Images/bob_marley.jpg",
  },
  {
    songName: "True Love",
    url: "./Songs/True_love.mp3",
    image: "./Images/xxx.jpg",
  },
  {
    songName: "beamer boy",
    url: "./Songs/beamer_boy.mp3",
    image: "./Images/lil_peep.jpg",
  },
  {
    songName: "Save That Shit",
    url: "./Songs/Save_that_shit.mp3",
    image: "./Images/lil_peep.jpg",
  },
  {
    songName: "Star Shopping",
    url: "./Songs/star_shopping.mp3",
    image: "./Images/lil_peep.jpg",
  },
  {
    songName: "I'm CJ From Groove St.",
    url: "./Songs/sa.mp3",
    image: "./Images/cj.jpg",
  },
];

var allSongs = document.querySelector("#all-songs");

var poster = document.querySelector("#left");

var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

var audio = new Audio();

var selectedSong = 0;

function showSongs() {
  clutter = "";
  arr.forEach(function (elem, idx) {
    clutter += `<div class="song-card" id="${idx}">
    <div class="part-1">
      <img
        src="${elem.image}"
        alt=""
      />
      <h2>${elem.songName}</h2>
    </div>
    <h6>3:56</h6>
  </div>`;
  });
  allSongs.innerHTML = clutter;
  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].image})`;
}

showSongs();

allSongs.addEventListener("click", function (dets) {
  selectedSong = dets.target.id;
  play.innerHTML = `<i class="ri-pause-line"></i>`;
  flag = 1;
  showSongs();
  audio.play();
});

var flag = 0;
play.addEventListener("click", function () {
  if (flag === 0) {
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    showSongs();
    audio.play;
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    showSongs();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    showSongs();
    audio.play();
  } else {
    forward.style.opacity = 0.4;
  }
});
backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    showSongs();
    audio.play();
  } else {
    backward.style.opacity = 0.4;
  }
});
