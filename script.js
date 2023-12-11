let nextPageToken = '';

const fetchVideos = () => {
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCKK3aBCfeRmqMN0uZyVMEbDDnkXsfjVCI&pageToken=${nextPageToken}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let videos = data.items;
      nextPageToken = data.nextPageToken;
      let videoContainer = document.querySelector(".yt-container");

      videos.forEach((video) => {
        const videoTitle = video.snippet.title;
        const videoId = video.id.videoId;
        const thumbnailUrl = video.snippet.thumbnails.high.url;

        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");

        const videoThumbnail = document.createElement("img");
        videoThumbnail.src = thumbnailUrl;
        videoThumbnail.alt = videoTitle;

        const titleElement = document.createElement("h3");
        titleElement.textContent = videoTitle;

        videoItem.appendChild(videoThumbnail);
        videoItem.appendChild(titleElement);

        videoItem.addEventListener("click", () => {
          videoContainer.innerHTML = `
            <h3>${videoTitle}</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
          `;
        });

        videoContainer.appendChild(videoItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching videos: ", error);
    });
};
fetchVideos();
