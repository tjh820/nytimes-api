var videoId

function youtubeAPI(){  
  var movie = localStorage.getItem("movieToWatch");
  var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q="+movie+" Trailer"+"&key=AIzaSyDSAK1oRccNklDgvb1RUA-ccz8QrciAlb4";

// Creating an AJAX call for the specific movie button being clicked
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  videoId = response.items[0].id.videoId;
  $("#utube").attr("src","https://www.youtube.com/embed/"+videoId+"?rel=0")
  
});
}


