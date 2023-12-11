let nextPageToken = ""
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCKK3aBCfeRmqMN0uZyVMEbDDnkXsfjVCI&pageToken="+nextPageToken)
.then((resule)=>{
    return resule.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    nextPageToken = data.nextPageToken
    let videoContainer = document.querySelector(".yt-container")
    for(video of videos){
        videoContainer.innerHTML += `
        <h3>${video.snippet.title}</h3>
            <img src="${video.snippet.thumbnails.high.url}">
        `
    }
})
