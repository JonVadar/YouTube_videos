const vPlayer = (video) => {
  return `
        <div class="vdo-wrapper">
        <!-- video -->
        <video
          src="${video.url}"
          autoplay
          muted
          loop
          poster="./poster.jpg"
          class="vdo"
        ></video>

        <!-- pause play btn -->
        <button id="pause-play-btn">
          
        </button>

        <!-- side btn -->
        <div class="side-btns-wrapper">
          <button class="control-btn" id="like-btn">
            <i class="fa-solid fa-thumbs-up"></i>
          </button>
          <button class="control-btn" id="dislike-btn">
            <i class="fa-solid fa-thumbs-down"></i>
          </button>
          <button class="control-btn" id="comments-btn">
            <i class="fa-solid fa-comment"></i>
          </button>
          <button class="control-btn" id="share-btn">
            <i class="fa-solid fa-share"></i>
          </button>
        </div>

        <!-- video info -->
        <div class="info-wrapper">
          <a href="#"><img src="${video.img}" alt="profile" /></a>
          <div>
            <h3>${video.title}</h3>
            <p>
            ${video.desc}
            </p>
          </div>
        </div>

        <!-- blury background -->
        <div class="blury"></div>

        <!-- comments -->
        <div class="comments">
          <p>Comments</p>
        </div>
      </div>
    `;
};

export default vPlayer;
