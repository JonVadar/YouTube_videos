// Coding video URL
const codingUrl =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=UU1M6N5LUj3c1JhiZXiNDq3A&key=[ADD YOUR API KEY HERE]";

// Gaming video URL
const gamingUrl =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=UUj3J9fxRnuliwv5swGbK8fg&key=[ADD YOUR API KEY HERE]";

// YouTube url prefix
const ytPrefix = "https://www.youtube.com/watch?v=";

// DOM elements
const codingContainer = document.querySelector("#coding-container");
const gamingContainer = document.querySelector("#gaming-container");
const codingLoader = document.querySelector("#coding-loader");
const gamingLoader = document.querySelector("#gaming-loader");

getDataAndCreateHTML(codingUrl, codingContainer, codingLoader, "https://www.youtube.com/[YourChannel]");
getDataAndCreateHTML(gamingUrl, gamingContainer, gamingLoader, "https://www.youtube.com/[YourChannel]");

// Get data from YT api
function getDataAndCreateHTML(url, container, loader, channelURL) {
  loader.classList.remove("hidden");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      data.items.forEach((el) => {
        container.innerHTML += `<a href="${
          ytPrefix + el.snippet.resourceId.videoId
        }" target="_blank" rel="external" class="card overflow-hidden block hover:ring-sky-500 group">
        <img src="${el.snippet.thumbnails.maxres.url}" alt="thumbnail">
        <h4 class="px-4 py-6 font-medium text-lg group-hover:text-sky-500">${
          el.snippet.title
        }</h4>
    </a>`;
      });
    })
    .catch((err) => {
      console.log(err);
      loader.classList.add("hidden");
      container.parentNode.innerHTML += `<a class="block mt-6 text-center ring-1 ring-zinc-900 dark:ring-zinc-100 px-6 py-2 rounded-lg hover:text-sky-500 hover:ring-sky-500 dark:hover:ring-sky-500" target="_blank" rel="external" href="${channelURL}">Content not available, please visit the Youtube page directly.</a>`;
    });
}
