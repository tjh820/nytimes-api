var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=nvr3TwsTaJJH3k_NF2bi4OxHUWp9";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);


