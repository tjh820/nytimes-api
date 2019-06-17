function utellyAPI (input) {

    var title = input;
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="+title+"&country=us",
    "method": "GET",
    "headers": {
    "X-RapidAPI-Key": "e349b454d6msh2af77a7636ddc0cp1f2574jsnb88c6b6a2190",
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token": "51f0ded3-4f98-4a87-bbf6-819afca124a8,47437821-8a08-4745-9296-a36c0f1bccb0",
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

}

