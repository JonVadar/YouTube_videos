import vPlayer from "./vPlayer.js";

const videoList = [
  {
    url: "./vids/1.mp4",
    title: "Cute puppy",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, fuga!",
    img: "https://picsum.photos/200",
  },
  {
    url: "./vids/2.mp4",
    title: "Winter migration",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, fuga!",
    img: "https://picsum.photos/200",
  },
  {
    url: "./vids/3.mp4",
    title: "Lions",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, fuga!",
    img: "https://picsum.photos/200",
  },
  {
    url: "./vids/4.mp4",
    title: "Graceful elephants",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, fuga!",
    img: "https://picsum.photos/200",
  },
];

// Videos Wrapper
const videosWrapper = document.querySelector(".videos");

// loader
const loader = document.querySelector(".loader");

setTimeout(() => {
  injectVideos();
  loader.style.display = "none";
}, 2000);

function injectVideos() {
  videoList.forEach((video) => {
    videosWrapper.innerHTML += vPlayer(video);
  });

  const vids = document.querySelectorAll(".vdo-wrapper");

  vids.forEach((vid) => {
    // video
    const vdo = vid.querySelector(".vdo");

    // handle pause play
    const pausePlayBtn = vid.querySelector("#pause-play-btn");
    pausePlayBtn.addEventListener("click", () => {
      if (vdo.paused) {
        vdo.play();
        pausePlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      } else {
        vdo.pause();
        pausePlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      }
    });

    // handle like
    const likeBtn = vid.querySelector("#like-btn");
    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("color-switch");
      dislikeBtn.classList.remove("color-switch");
    });

    // handle dislike
    const dislikeBtn = vid.querySelector("#dislike-btn");
    dislikeBtn.addEventListener("click", () => {
      dislikeBtn.classList.toggle("color-switch");
      likeBtn.classList.remove("color-switch");
    });

    // handle dislike
    const commentsBtn = vid.querySelector("#comments-btn");
    const comments = vid.querySelector(".comments");
    commentsBtn.addEventListener("click", () => {
      comments.classList.toggle("toggle-comments");
    });

    // handle share
    const shareBtn = vid.querySelector("#share-btn");
    const vidTitle = vid.querySelector(".info-wrapper h3");
    shareBtn.addEventListener("click", () => {
      navigator.share({
        title: vidTitle.textContent,
        text: "text",
        url: vdo.src,
      });
    });
  });
}
